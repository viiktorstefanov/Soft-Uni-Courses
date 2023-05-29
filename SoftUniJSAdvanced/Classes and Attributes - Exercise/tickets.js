function tickets(input, sortCriterion) {
    let output = [];
    let tickets = [];
    class Ticket {
        constructor(destination, price, status) {
            this.destination = destination;
            this.price = price;
            this.status = status;
        }
    }
    
    input.forEach((x) => {
        let [destination, price, status] = x.split('|');
        price = +price;
        let sortedInput = [];
        sortedInput.push(destination, price, status);
        output.push(sortedInput)
    });

    switch(sortCriterion) {
        case 'destination' : output.sort((a, b) => a[0].localeCompare(b[0])).forEach(x => { tickets.push(new Ticket(x[0], x[1], x[2]))});
        break;
        case 'price' : output.sort((a, b) => a[1]-b[1]).forEach(x => { tickets.push(new Ticket(x[0], x[1], x[2]))})
        break;
        case 'status' : output.sort((a, b) => a[2].localeCompare(b[2])).forEach(x => { tickets.push(new Ticket(x[0], x[1], x[2]))})
        break;
    }
    return tickets;
}
// tickets(['Philadelphia|94.20|available',
// 'New York City|95.99|available',
// 'New York City|95.99|sold',
// 'Boston|126.20|departed'],
// 'destination'
// )
tickets(['Philadelphia|94.20|available',
    'New York City|95.99|available',
    'New York City|95.99|sold',
    'Boston|126.20|departed'],
    'status'
)