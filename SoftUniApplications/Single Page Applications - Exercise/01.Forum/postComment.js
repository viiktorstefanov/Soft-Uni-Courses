export function postComment (header,commentText, username,dateTime) {
    dateTime = dateTime.toString().substring(0,24);
    dateTime = dateTime.split(' ');
    let year = dateTime[3];
    let mouth = dateTime[2];
    let mouthDay = dateTime[1];
    let currTime = dateTime[4];

    let p = document.createElement('p');
    p.textContent = commentText;

    let postContent = document.createElement('div');
    postContent.classList.add('post-content');

    let pCommentInfo = document.createElement('p');
    pCommentInfo.innerHTML = `<strong>${username}</strong> commented on <time>${mouth}/${mouthDay}/${year}, ${currTime}</time>`;

    let topicName = document.createElement('div');
    topicName.classList.add('topic-name');

    let topicNameWrapper = document.createElement('div');
    topicNameWrapper.classList.add('topic-name-wrapper');

    let userComment = document.createElement('div');
    userComment.id = 'user-comment';
    userComment.classList.add('user-comment');

    postContent.appendChild(p);
    topicName.appendChild(pCommentInfo);
    topicName.appendChild(postContent);
    topicNameWrapper.appendChild(topicName);
    userComment.appendChild(topicNameWrapper);

    header.appendChild(userComment);
    
}