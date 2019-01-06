import { actionBuilder } from "./base";

const roleActions = actionBuilder(
  "ROLE",
  "https://bazaksiazek.azurewebsites.net/api/role/"
);

export const fetchRoles = roleActions.FETCH_ALL;
export const fetchRole = id => roleActions.FETCH_ONE(id)();
export const addRole = role => roleActions.ADD(role)();
export const deleteRole = id => roleActions.DELETE(id)();
