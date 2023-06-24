import { createPost } from "./createPost.js";
import { clearInputs } from "./clearInputs.js";
import { checkInputs } from "./checkInputs.js";
import { request } from "./request.js";
import { removeOldPost } from "./removeOldPost.js";
import { hideAll } from "./hideAll.js";

let main = document.querySelector('.container main');
let homeBtn = document.getElementById('home-btn');
let form = document.getElementById('form');
let cancelBtn = document.querySelector('.cancel');
let postBtn = document.querySelector('.public');
let oldPosts = document.querySelectorAll('.container .topic-container');
let home = document.querySelector('.new-topic-border');
let alltopicNameWrapper = document.querySelectorAll('.topic-name-wrapper');
let allTopiCcontainer = document.querySelectorAll('.topic-container');

cancelBtn.addEventListener('click', (e) => {
    e.preventDefault();
    clearInputs();
});

homeBtn.addEventListener('click', (e) => {
    e.preventDefault();
    hideAll();
    home.classList.remove('view');
})

//taking inputs
form.addEventListener('submit', async (e) => {
e.preventDefault();

//remove old posts
// removeOldPost(oldPosts);

//taking inputs fields
let formData = new FormData(e.currentTarget);
let titleInput = formData.get('topicName');
let usernameInput = formData.get('username');
let textInput = formData.get('postText');
let createDate = new Date();

checkInputs(titleInput, usernameInput, textInput);
let idAndDate= await request(titleInput, usernameInput, textInput, createDate);



createPost(titleInput, usernameInput, textInput, idAndDate.date, idAndDate.id);
clearInputs();

let commentTittle = document.querySelectorAll('.normal h2');

})
