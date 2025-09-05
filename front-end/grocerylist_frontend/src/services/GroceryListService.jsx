const BASE_URL = 'http://localhost:8081/grocery-list/api/my-lists';

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

export async function createNewList(listName) {

    const token = localStorage.getItem("token");

    const response = await fetch (`${BASE_URL}`, {
        method: "POST", 
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
        },
        body: JSON.stringify({listName})
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

    