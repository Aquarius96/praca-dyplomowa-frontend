export const URL = "https://bazaksiazek.azurewebsites.net/api/";
export const headers = {
  headers: {
    Authorization: "Bearer " + localStorage.getItem("token")
  }
};
