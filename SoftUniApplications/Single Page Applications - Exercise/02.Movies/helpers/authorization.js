import homePage from "../src/home.js";
import loginPage from "../src/login.js";
import viewFinder from "../src/viewFinder.js";
import { jsonRequest } from "./httpService.js";

export function setAuthToken(token) {
    localStorage.setItem('authToken', token);
}

export function getAuthToken(token) {
    return localStorage.getItem('authToken');
}



export function isLoggedIn() {
    return localStorage.getItem('authToken') !== null;
}

export async function logout() {

    let result = await jsonRequest(
        'http://localhost:3030/users/logout', 'Get', undefined, true, true);
    localStorage.clear();
    return loginPage.getView();
   return viewFinder.redirectTo('login');

}

let auth = {
    setAuthToken,
    getAuthToken,
    isLoggedIn,
    logout,
};

export default auth;