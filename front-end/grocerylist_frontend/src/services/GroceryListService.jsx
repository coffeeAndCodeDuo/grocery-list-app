const BASE_URL = 'http://localhost:8081/grocery-list/api/my-lists';
import { toast } from "react-toastify";

export async function getAllLists() {

    const token = localStorage.getItem("token");

    const response = await fetch (`${BASE_URL}`, {
        method: "GET", 
        headers: {
            "Authorization": `Bearer ${token}`
        }
    });

    if (!response.ok) {
        throw new Error("Failed to get all lists");
    }

    const data = await response.json();
    console.log(data);
    return data;
}

export async function createNewList(name) {

    const token = localStorage.getItem("token");

    const response = await fetch (`${BASE_URL}`, {
        method: "POST", 
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
        },
        body: JSON.stringify({name})
    });

    if (!response.ok) {
        throw new Error("Failed to create new list");
    }

    const data = await response.json();
    console.log(data);
    return data;
}

export async function getListById(listId) {

    const token = localStorage.getItem("token");

    const response = await fetch (`${BASE_URL}/${listId}`, {
        method: "GET", 
        headers: {
            "Authorization": `Bearer ${token}`
        }
    });

    if (!response.ok) {
        throw new Error("Failed to get list by ID");
    }

    const data = await response.json();
    console.log(data);
    return data;
}

export async function deleteListById(groceryListId) {

    const token = localStorage.getItem("token");

    const response = await fetch (`${BASE_URL}/${groceryListId}`, {
        method: "DELETE", 
        headers: {
            "Authorization": `Bearer ${token}`
        }
    });

    if (!response.ok) {
        throw new Error("Failed to delete list by ID");
    }


    toast.success("List deleted successfully!", { autoClose: 1500})            
}

export async function updateListName(groceryListId, name) {

    const token = localStorage.getItem("token");

    const response = await fetch (`${BASE_URL}/${groceryListId}`, {
        method: "PUT", 
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
        },
        body: JSON.stringify({name})
    });

    if (!response.ok) {
        throw new Error("Failed to update list name");
    }

    const data = await response.json();
    console.log(data);
    return data;
}

export async function addProductToList(groceryListId, productId) {

    const token = localStorage.getItem("token");
    
    const response = await fetch (`${BASE_URL}/${groceryListId}/${productId}`, {
        method: "POST", 
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
        },
    });

    if (!response.ok) {
        throw new Error("Failed to add product to list");
    }

    const data = await response.json();
    console.log(data);
    return data;
}

export async function removeProductFromList(groceryListId, productId) {

    const token = localStorage.getItem("token");

    const response = await fetch (`${BASE_URL}/${groceryListId}/${productId}`, {
        method: "DELETE", 
        headers: {
            "Authorization": `Bearer ${token}`
        }
    });

    if (!response.ok) {
        throw new Error("Failed to remove product from list");
    }

    const data = await response.json();
    console.log(data);
    return data;     
}