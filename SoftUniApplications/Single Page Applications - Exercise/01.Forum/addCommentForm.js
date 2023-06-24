import { postComment } from "./postComment.js";
export function addCommentForm (topicContainer,header) {
    
    let answerComment = document.createElement('div');
    answerComment.classList.add('answer-comment');

    let p = document.createElement('p');
    p.innerHTML = '<p><span>currentUser</span> comment:</p>';

    let answer = document.createElement('div');
    answer.classList.add('answer');

    let form = document.createElement('form');
    
    let textarea = document.createElement('textarea');
    textarea.name = 'postText';
    textarea.id = 'comment';
    textarea.cols = '30';
    textarea.rows = '10';

    let div = document.createElement('div');

    let label = document.createElement('label');
    label.for = 'username';
    label.innerHTML = 'Username <span class="red">*</span>';

    let input = document.createElement('input');
    input.type = 'text';
    input.name = 'username';
    input.id = 'username';

    let postButton = document.createElement('button');
    postButton.textContent = 'Post';
    postButton.addEventListener('click', (e) => {
        e.preventDefault();

        let dateTime = new Date();
       

        postComment(header,textarea.value,input.value,dateTime);
        
        
        
        
        //clearinputs
        textarea.value = '';
        input.value = '';
    })
    
    

    div.appendChild(label);
    div.appendChild(input);
    form.appendChild(textarea);
    form.appendChild(div);
    form.appendChild(postButton);
    answer.appendChild(form);
    answerComment.appendChild(p);
    answerComment.appendChild(answer);

    topicContainer.appendChild(answerComment);
    
}