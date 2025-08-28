const BASE_URL = 'http://localhost:8081/grocery-list/api/auth';

export async function userRegister(firstName, lastName, email, password){
    const response = await fetch (`${BASE_URL}/register`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({firstName, lastName, email, password})
    });
    const data = await response.text(); 
    console.log("Resposta do backend:", data);

    return data;
}

export async function userLogin() {
    
}