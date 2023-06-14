function lockedProfile() {
    (async  () => {
        try {
            response = await fetch('http://localhost:3030/jsonstore/advanced/profiles');
            let profileInfo = await response.json();
            let keys = Object.keys(profileInfo);
            
            //remove default profile
            document.querySelector('#main .profile').remove();
           
            keys.forEach((profile, index) => {
                let currProfile = profileInfo[profile];
                createProfile(currProfile._id, currProfile.username, currProfile.email, currProfile.age, index)
                
            })
        }catch(err) {

        }

    })();
}

function createProfile(id, username, email, age, index) {
    let divProfile = document.createElement('div');
    divProfile.classList.add('profile');

    let imgProfile = document.createElement('img');
    imgProfile.src = './iconProfile2.png';
    imgProfile.classList.add('userIcon');

    let lockLabelProfile = document.createElement('label');
    lockLabelProfile.textContent = 'Lock';

    let lockInputProfile = document.createElement('input');
    lockInputProfile.type = 'radio';
    lockInputProfile.name = `user${index + 1}Locked`;
    lockInputProfile.value = 'lock';
    lockInputProfile.checked = 'true';

    let unlockLabelProfile = document.createElement('label');
    unlockLabelProfile.textContent = 'Unlock';

    let UnlockInputProfile = document.createElement('input');
    UnlockInputProfile.type = 'radio';
    UnlockInputProfile.name = `user${index + 1}Locked`;
    UnlockInputProfile.value = 'unlock';
    
    let br = document.createElement('br');
    let hr = document.createElement('hr');

    let usernameLabelProfile = document.createElement('label');
    usernameLabelProfile.textContent = 'Username';

    let usernameProfile = document.createElement('input');
    usernameProfile.type = 'text';
    usernameProfile.name = `user${index + 1}Username`;
    usernameProfile.value = `${username}`;
    usernameProfile.disabled = 'true';
    usernameProfile.readOnly = 'true';

    let hideDiv = document.createElement('div');
    hideDiv.style.display = 'none';
    hideDiv.id = `user${index + 1}HiddenFields`;

    let hideHr = document.createElement('hr');

    let hideEmailLabel = document.createElement('label');
    hideEmailLabel.textContent = 'Email:';

    let hideEmailInput = document.createElement('input');
    hideEmailInput.type = 'email';
    hideEmailInput.name = `user${index + 1}Email`;
    hideEmailInput.value = `${email}`;
    hideEmailInput.disabled = 'true';
    hideEmailInput.readOnly = 'true';

    let hideAgeLabel = document.createElement('label');
    hideAgeLabel.textContent = 'Age:';

    let hideAgeInput = document.createElement('input');
    hideAgeInput.type = 'email';
    hideAgeInput.name = `user${index + 1}Age`;
    hideAgeInput.value = `${age}`;
    hideAgeInput.disabled = 'true';
    hideAgeInput.readOnly = 'true';

    let showMoreBtn = document.createElement('button');
    showMoreBtn.textContent = 'Show more';
    showMoreBtn.addEventListener('click', showOrHide);

    hideDiv.appendChild(hideHr);
    hideDiv.appendChild(hideEmailLabel);
    hideDiv.appendChild(hideEmailInput);
    hideDiv.appendChild(hideAgeLabel);
    hideDiv.appendChild(hideAgeInput);

    divProfile.appendChild(imgProfile);
    divProfile.appendChild(lockLabelProfile);
    divProfile.appendChild(lockInputProfile);
    divProfile.appendChild(unlockLabelProfile);
    divProfile.appendChild(UnlockInputProfile);
    divProfile.appendChild(br);
    divProfile.appendChild(hr);
    divProfile.appendChild(usernameLabelProfile);
    divProfile.appendChild(usernameProfile);
    divProfile.appendChild(hideDiv);
    divProfile.appendChild(showMoreBtn);

    document.getElementById('main').appendChild(divProfile);

}

function showOrHide(e) {
let showBtn = e.target;
let hideElement = e.target.previousElementSibling;
let lock = e.target.parentElement.querySelector('input');
if(lock.checked) {
    return;
}

if(hideElement.style.display == 'block') {
    e.target.textContent = 'Show more';
    hideElement.style.display = 'none';
}else{
    e.target.textContent = 'Hide it';
    hideElement.style.display = 'block';
}
}