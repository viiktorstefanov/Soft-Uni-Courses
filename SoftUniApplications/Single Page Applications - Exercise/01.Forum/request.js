export async function request(titleInput, usernameInput, textInput, createDate) {
try {
    let response = await fetch('http://localhost:3030/jsonstore/collections/myboard/posts', {
        method: 'POST',
        headers: {
            'Content-type' : 'application/json'
        },
        body: JSON.stringify( {
            titleInput,
            usernameInput,
            textInput,
            createDate,
        })
    });

    if(!response.ok) {
        let error = await response.json();
        throw new Error(error.message);
    };
    let info = await response.json();
    let id = info._id;
    let date = info.createDate;
    return   {id,date}  ;
}
catch(error) {
    throw new Error(error.message);
}
}