function attachEvents() {
    let submitElement = document.getElementById('submit');
    let refreshElement = document.getElementById('refresh');
    submitElement.addEventListener('click', submitHandler);
    refreshElement.addEventListener('click', refreshHandler);

    function submitHandler () {
        let nameElement = document.querySelector('input[name="author"]');
        let messageElement = document.querySelector('input[name="content"]');
        let name = nameElement.value;
        let message = messageElement.value;

        let data = {
            author: name,
            content: message,
        }


        fetch('http://localhost:3030/jsonstore/messenger', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(data),
        })
    }

    function refreshHandler () {
        fetch('http://localhost:3030/jsonstore/messenger')
        .then(response => response.json())
        .then(data => {
            let messages = [];
           Object.values(data).forEach(x => {
                messages.push(`${x.author}: ${x.content}`);
            });
            let textAreaElement = document.getElementById('messages');
                textAreaElement.textContent = messages.join('\n');
        })
    }
}

attachEvents();