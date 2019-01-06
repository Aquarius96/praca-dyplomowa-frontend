export const URL = "https://bazaksiazek.azurewebsites.net/api/";
export const headers = {
  headers: {
    'Access-Control-Allow-Origin': 'https://bazaksiazek.azurewebsites.net',
    Authorization: "Bearer " + localStorage.getItem("token")
  }
};