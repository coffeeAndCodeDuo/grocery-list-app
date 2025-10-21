/*const BASE_URL = 'http://localhost:8081/grocery-list/api/auth';*/
const BASE_URL = 'https://grocery-list-app-production-361d.up.railway.app/api/auth';


export async function userRegister(firstName, lastName, email, password){
    const response = await fetch (`${BASE_URL}/register`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({firstName, lastName, email, password})
    });
    const data = await response.text(); 

    return data;
}

export async function userLogin(email, password) {
    const response = await fetch(`${BASE_URL}/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password })
    });
    const data = await response.json();
    const loginToken = data.token;

    localStorage.setItem("token", loginToken);

    return loginToken;
}