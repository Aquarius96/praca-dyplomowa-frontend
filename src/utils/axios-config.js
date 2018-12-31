export const URL = 'http://localhost:8000/api/';
export const headers = {
    headers: {
        'Authorization': 'Bearer ' + localStorage.getItem("token")
    }
}