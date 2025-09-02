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
    return await response.json();
}
