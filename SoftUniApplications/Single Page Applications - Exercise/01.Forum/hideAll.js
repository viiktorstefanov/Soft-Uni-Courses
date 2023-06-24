export function hideAll () {
    let alltopicNameWrapper = document.querySelectorAll('.topic-name-wrapper');
    let allComment = document.querySelectorAll('.comment');

    //clear answerForm
    let answerForm = document.querySelector('.answer-comment');
    if(answerForm !== null) {
        document.querySelector('.answer-comment').remove();
    }
    

    if(alltopicNameWrapper.length > 0) {
        alltopicNameWrapper.forEach(div => {
            div.classList.remove('view');
        });
    }
   
    allComment.forEach(comment => {
        comment.classList.add('view');
    })
}