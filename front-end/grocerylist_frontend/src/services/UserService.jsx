import { toast } from "react-toastify";

const BASE_URL = 'http://localhost:8081/grocery-list/api/profile';

export async function getUserProfile() {

    const token = localStorage.getItem('token');

    const response = await fetch(`${BASE_URL}`, {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${token}`
        }
    });
    if (!response.ok) {
        throw new Error('Failed to fetch user profile');
    }
    const data = await response.json();
    console.log(data); //nao se pode por response.json() duas vezes porque a response só é lida uma vez
    return data;

}

export async function changeUserNames(firstName, lastName){

    const token = localStorage.getItem('token');

    const response = await fetch(`${BASE_URL}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({firstName, lastName})
    });

    if (!response.ok) {
        throw new Error('Failed to fetch user profile');
    }

    const data = await response.json();
    console.log(data);
    return data;
}

export async function changeUserPassword(currentPassword, newPassword){
    const token = localStorage.getItem('token');

    const response = await fetch(`${BASE_URL}/password`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({currentPassword, newPassword })
    });

    if (!response.ok) {
        throw new Error('Failed to change user password');
    }

    const text = await response.text();
    console.log(text);
    return text;
}

export async function deleteUserAccount(){
    
    const token = localStorage.getItem('token');

    const response = await fetch(`${BASE_URL}/`, {
        method: 'DELETE',
        headers: {
            "Content-Type": "application/json",
            'Authorization': `Bearer ${token}`
        }
    });

    if (!response.ok) {
        throw new Error('Failed to delete user account');
    }

    localStorage.removeItem("token");
    localStorage.removeItem("userId");
    
}
