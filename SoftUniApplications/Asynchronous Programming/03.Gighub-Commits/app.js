function loadCommits() {
   let username = document.getElementById('username').value;
   let repo = document.getElementById('repo').value;
   document.getElementById('commits').textContent = "";


   fetch(`https://api.github.com/repos/${username}/${repo}/commits`)
   .then((response) => {
    if(response.status < 400) {
        return response.json();
    }

    throw({
        status: response.status,
        statusText: response.statusText,
    });
   })
   .then(info => {
        info.forEach(element => {
            let li = document.createElement('li');
            li.textContent = `${element.commit.author.name}: ${element.commit.message}`;
            document.getElementById('commits').appendChild(li);
        })
   })
   .catch((error) => {
    let li = document.createElement('li');
    li.textContent = `Error: ${error.status} (Not Found)`;
    document.getElementById('commits').appendChild(li);
    //Error: <error.status> (Not Found)
   })
}