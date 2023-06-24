export  function addComment(e,id,topicContainer,username,dateTime,text) {
    
    //clear old maked commentDiv's
    if(topicContainer.querySelectorAll('.comment').length > 0) {
        topicContainer.querySelectorAll('.comment').forEach(comment => comment.remove());
    }

    dateTime = new Date(dateTime).toString().substring(0,24);
    dateTime = dateTime.split(' ');
    let year = dateTime[3];
    let mouth = dateTime[2];
    let mouthDay = dateTime[1];
    let currTime = dateTime[4];
    //Fri Jun 23 2023 21:56:12


    let comment = document.createElement('div');
    comment.classList.add('comment');

    let header = document.createElement('div');
    header.classList.add('header');

    let img = document.createElement('img');
    img.src = '/static/profile.png';
    img.alt = 'avatar';

    let pComment = document.createElement('p');
    pComment.innerHTML = `<span>${username}</span> posted on <time>${year}-${mouth}-${mouthDay} ${currTime}</time>`;

    let postContent = document.createElement('p');
    postContent.classList.add('post-content');
    postContent.textContent = `${text}`;

    header.appendChild(img);
    header.appendChild(pComment);
    header.appendChild(postContent);

    comment.appendChild(header);

    topicContainer.appendChild(comment);
    
    return header;
}