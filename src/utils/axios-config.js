export const URL = "http://localhost:8000/api/";
export const headers = {
  headers: {
    'Access-Control-Allow-Origin': 'http://localhost:8000',
    Authorization: "Bearer " + localStorage.getItem("token")
  }
};