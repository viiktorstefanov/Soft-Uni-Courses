window.addEventListener("load", solve);

function solve() {
  let publishBtnElement = document.getElementById('publish-btn');
  
  publishBtnElement.addEventListener('click', (e) => {

    let titleElement = document.getElementById('post-title');
    let categoryElement = document.getElementById('post-category');
    let contentElement = document.getElementById('post-content');

    let title = titleElement.value;
    let category = categoryElement.value;
    let content = contentElement.value;

    if(titleElement.value !== '' && categoryElement.value !== '' && contentElement.value !== '' ) {
      e.preventDefault();

      let reviewUlElement = document.getElementById('review-list');
      let articleElement = document.createElement('article');
      let h4Element = document.createElement('h4');
      let pCategoryElement = document.createElement('p');
      let pContentElement = document.createElement('p');

      let editBtnElement = document.createElement('button');
      editBtnElement.textContent = 'Edit';
      editBtnElement.classList.add('action-btn');
      editBtnElement.classList.add('edit');
      let approveBtnElement = document.createElement('button');
      approveBtnElement.textContent = 'Approve';
      approveBtnElement.classList.add('action-btn');
      approveBtnElement.classList.add('approve');

      h4Element.textContent = title;
      pCategoryElement.textContent = category;
      pContentElement.textContent = content;

      articleElement.appendChild(h4Element);
      articleElement.appendChild(pCategoryElement);
      articleElement.appendChild(pContentElement);
      let liElement = document.createElement('li');
      liElement.classList.add('rpost');
      liElement.appendChild(articleElement);
      liElement.appendChild(approveBtnElement);
      liElement.appendChild(editBtnElement);
      reviewUlElement.appendChild(liElement);
   

      titleElement.value = '';
      categoryElement.value = '';
      contentElement.value = '';

      editBtnElement.addEventListener('click', (e) => {

        titleElement.value = h4Element.textContent;
        categoryElement.value = pCategoryElement.textContent;
        contentElement.value = pContentElement.textContent;

        let currUl = e.currentTarget.parentElement
        while (currUl.firstChild) {
            currUl.removeChild(currUl.lastChild);
          }
      })
      approveBtnElement.addEventListener('click', (e) => {
        //published-list
        let ulPublishedElement = document.getElementById('published-list');
        ulPublishedElement.appendChild(liElement);
        editBtnElement.remove();
        e.currentTarget.remove();
      })

      let clearBtnElement = document.getElementById('clear-btn');
      clearBtnElement.addEventListener('click', () => {
        let remove = document.getElementById('published-list');
        
        while (remove.firstChild) {
          remove.removeChild(remove.lastChild);
          remove = document.getElementById('published-list')
        }
        console.log(remove);
        // while(remove != undefined) {
        //   remove.remove();
         
        // }
      })
    }
  })
}
