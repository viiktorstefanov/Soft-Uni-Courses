export function checkInputs(titleInput, usernameInput, textInput) {
    if(titleInput === "" || usernameInput === "" || textInput === "") {
        throw new Error('You must fill all fields!');
    }
}