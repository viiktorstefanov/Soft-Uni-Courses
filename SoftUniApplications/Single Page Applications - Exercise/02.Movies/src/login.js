import auth from "../helpers/authorization.js";
import { jsonRequest } from "../helpers/httpService.js";
import viewFinder from "./viewFinder.js";

let section ;

export function initialize(domElement) {
    section = domElement;
    let form = section.querySelector('#login-form');
    form.addEventListener('submit',loginUser);
}

export async function getView() {
    return section;
}

async function loginUser(e) {
    e.preventDefault();
    let form = e.target;
    let formData = new FormData(form);
    let user = {
        email: formData.get('email'),
        password: formData.get('password'),
    }
    let url = 'http://localhost:3030/users/login';
    let result = await jsonRequest(url, 'Post', user);
    auth.setAuthToken(result.accessToken);
    form.reset();
    viewFinder.navigateTo('home');
}

let loginPage = {
    initialize,
    getView,
};

export default loginPage;