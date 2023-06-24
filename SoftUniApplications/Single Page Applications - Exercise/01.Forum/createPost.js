import { addComment } from "./addComment.js";
import { addCommentForm } from "./addCommentForm.js";
export async function createPost(tittle, username, text, dateTime, id) {
  
    //2023-06-23T13:08:26.938Z

   let topicTittle = document.querySelector('.topic-title');

   let topicContainer = document.createElement('div');
   topicContainer.classList.add('topic-container');

   let topicNameWrapper = document.createElement('div');
   topicNameWrapper.classList.add('topic-name-wrapper');
   topicNameWrapper.id = 'topicWrapper';
   
   let topicName = document.createElement('div');
   topicName.classList.add('topic-name');

   let normal = document.createElement('a');
   normal.classList.add('normal');
   normal.href = '#';
   normal.setAttribute('dataset', id);
   

   let h2 = document.createElement('h2');
   h2.textContent = `${tittle}`;
   h2.addEventListener('click', (e) => {
    let currPostId = e.target.parentElement.getAttribute('dataset');
    let header = addComment(e,currPostId,topicContainer,username,dateTime,text);
    
    // let currTopicNameWrapper = e.currentTarget.parentElement.parentElement.parentElement;
    addCommentForm(topicContainer,header);
    let currNewTopicBorder = document.querySelector('.new-topic-border');
    let alltopicNameWrapper = document.querySelectorAll('.topic-name-wrapper');
    currNewTopicBorder.classList.add('view');
    alltopicNameWrapper.forEach(div => div.classList.add('view'));

    let userComment = document.createElement('div');
    userComment.classList.add('user-comment');
   })

   let columns = document.createElement('div');
   columns.classList.add('columns');

   let div = document.createElement('div');

   let pDate = document.createElement('p');
   pDate.textContent = 'Date: '

   let time = document.createElement('time');
   time.textContent = `${dateTime}`;
   

   let nickName = document.createElement('div');
    nickName.classList.add('nick-name');

   let pUsername = document.createElement('p');
    pUsername.textContent = 'Username: ';

    let span = document.createElement('span');
    span.textContent = `${username}`;
    
    //appending topic
    pUsername.appendChild(span);
    nickName.appendChild(pUsername);
    pDate.appendChild(time);
    div.appendChild(pDate);
    div.appendChild(nickName);
    columns.appendChild(div);
    normal.appendChild(h2);
    topicName.appendChild(normal);
    topicName.appendChild(columns);
    topicNameWrapper.appendChild(topicName);
    topicContainer.appendChild(topicNameWrapper);

    topicTittle.appendChild(topicContainer);
}

