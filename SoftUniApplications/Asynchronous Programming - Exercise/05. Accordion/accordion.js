async function solution() {
    let response = await fetch('http://localhost:3030/jsonstore/advanced/articles/list ');
    let body = await response.json();
    Object.values(body).forEach(x => {
        let title = x.title;
        let id = x._id;

        let main = document.getElementById('main');

        let divAccordion = document.createElement('div');
        divAccordion.classList.add('accordion');

        let divHead = document.createElement('div');
        divHead.classList.add('head');

        let span = document.createElement('span');
        span.textContent = title;

        let moreBtn = document.createElement('button');
        moreBtn.classList.add('button');
        moreBtn.textContent = 'More';

        let divExtra = document.createElement('div');
        divExtra.classList.add('extra');
        divExtra.style.display = 'none';

        let p = document.createElement('p');
        p.id = 'content';
        
        divExtra.appendChild(p);
        divHead.appendChild(moreBtn);
        divHead.appendChild(span);
        divAccordion.appendChild(divHead);
        divAccordion.appendChild(divExtra);
        main.appendChild(divAccordion);

        moreBtn.addEventListener('click', showIt);

        async function showIt() {
        
            let response = await fetch(`http://localhost:3030/jsonstore/advanced/articles/details/${id}`);
            
            let body = await response.json();

            if(divExtra.style.display === 'none') {
                p.textContent = body.content;
                moreBtn.textContent = 'Less';
                divExtra.style.display = 'block';
            }else {
                p.textContent = '';
                moreBtn.textContent = 'More';
                divExtra.style.display = 'none';
            }
            
        }
    })

    

}
solution();