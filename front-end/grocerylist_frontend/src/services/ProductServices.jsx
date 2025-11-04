
const isLocalhost = window.location.hostname === 'localhost';
const BASE_URL = isLocalhost 
  ? 'http://localhost:8081/grocery-list/api/products' 
  : 'https://grocery-list-app-production-361d.up.railway.app/api/products';


export async function getProductsByType(productType){

    const token = localStorage.getItem("token");

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

    const token = localStorage.getItem("token");

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

    const token = localStorage.getItem("token");

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