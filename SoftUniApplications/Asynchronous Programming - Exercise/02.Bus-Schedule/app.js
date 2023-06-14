function solve() {

    let departElement = document.getElementById('depart');
    let arriveElement = document.getElementById('arrive');
    let stopID = 'depot';

    function depart() {
        departElement.disabled = true;
        arriveElement.disabled = false;
        let stopInfoSpan = document.getElementsByClassName('info')[0];

        if(stopInfoSpan.getAttribute('data-next-stop-id') !== null) {
            stopID = stopInfoSpan.getAttribute('data-next-stop-id');
        }

        fetch(`http://localhost:3030/jsonstore/bus/schedule/${stopID}`)
        .then(body => body.json())
        .then(info => {
            
            stopInfoSpan.textContent = `Next stop ${info.name}`;
            stopInfoSpan.setAttribute('data-next-stop-name', info.name);
            stopInfoSpan.setAttribute('data-next-stop-id', info.next);
            let a = stopInfoSpan.getAttribute('data-next-stop-id');
            console.log(a);
            
        })
        .catch(err => {
            stopInfoSpan.textContent = 'Error';
        })
    }

    function arrive() {
        arriveElement.disabled = true;
        departElement.disabled = false;
        let stopInfoSpan = document.getElementsByClassName('info')[0];
        // stopID = stopInfoSpan.getAttribute('data-next-stop-id');

        fetch(`http://localhost:3030/jsonstore/bus/schedule/${stopID}`)
        .then(body => body.json())
        .then(info => {
            stopInfoSpan.textContent = `Arriving at ${info.name}`;
        })
    }

    return {
        depart,
        arrive
    };
}

let result = solve();