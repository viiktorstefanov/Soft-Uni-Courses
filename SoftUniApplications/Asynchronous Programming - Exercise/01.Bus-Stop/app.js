function getInfo() {
    let stopIDElement = document.getElementById('stopId');
    let busID = stopIDElement.value;
    


    fetch(`http://localhost:3030/jsonstore/bus/businfo/${busID} `)
    .then(body => body.json())
    .then(stopInfo => {
        
        document.getElementById('stopName').textContent = stopInfo.name;
        
        //clear previous search info
        Array.from(document.querySelectorAll('#buses > li')).forEach(li => li.remove());

        Object.keys(stopInfo.buses).forEach(key => {
            let li = document.createElement('li');
            li.textContent = `Bus ${key} arrives in ${stopInfo.buses[key]} minutes`;

            document.getElementById('buses').appendChild(li);
        })

    })
    .catch(err => {
        document.getElementById('stopName').textContent = 'Error';
        Array.from(document.querySelectorAll('#buses > li')).forEach(li => li.remove());
    })
}