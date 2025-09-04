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
