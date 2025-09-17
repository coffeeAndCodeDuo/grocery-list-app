const BASE_URL = "http://localhost:8081/grocery-list/api/products";
const token = localStorage.getItem("token");

export async function getProductsByType(productType){

    const response = await fetch(`${BASE_URL}/${productType}`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
        }
    });

    if (!response.ok) {
        throw new Error("Failed to fetch products by type");
    }

    const data = await response.json();
    console.log(data);
    return data;
}

export async function getProductTypes(){

    const response = await fetch(`${BASE_URL}/types`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
        }
    });

    if (!response.ok) {
        throw new Error("Failed to fetch product types");
    }  

    const data = await response.json();
    console.log(data);
    return data;

}

export async function getAllProducts(){

    const response = await fetch(`${BASE_URL}`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
        }
    });

    if (!response.ok) {
        throw new Error("Failed to fetch all products");
    }

    const data = await response.json();
    console.log(data);
    return data;
}