import { toast } from "react-toastify";

const isLocalhost = window.location.hostname === 'localhost';
const BASE_URL = isLocalhost 
  ? 'http://localhost:8081/grocery-list/api/my-lists' 
  : 'https://grocery-list-app-production-361d.up.railway.app/api/my-lists';


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
   
    return data;     
}