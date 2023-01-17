function cinemaTickets (input) {

let nameOfFilm;
let totalTickets = 0;
let finalTotalTickets = 0;
let freeSpace = 0;
let index = 0;
let ticket;
let isTrue = true;
let standartTicket = 0;
let kidTicket = 0;
let studentTicket = 0;
let finalMovie = "";

while(isTrue) {
    if(nameOfFilm === "Finish") {
        index--;
    }
nameOfFilm = input[index];
finalMovie = nameOfFilm;
if(nameOfFilm === "Finish") {
    isTrue = false;
}
index++;
freeSpace = Number(input[index]);
index++;
while(freeSpace >= totalTickets) {
    
    nameOfFilm = input[index];
    if(nameOfFilm === "End" || nameOfFilm === "Finish") {
        console.log(`${finalMovie} - ${((totalTickets * 100)/freeSpace).toFixed(2)}% full.`);
        finalTotalTickets += totalTickets;
        totalTickets = 0;
        index++;
        break;
    }
    ticket = input[index];
    index++;
    if(ticket === "kid") {
        kidTicket++;
        totalTickets++;
    }
    else if(ticket === "standard") {
        standartTicket++;
        totalTickets++;
    }
    else if(ticket === "student") {
        studentTicket++;
        totalTickets++;
    }
}
}
console.log(`Total tickets: ${finalTotalTickets}`);
console.log(`${((studentTicket * 100) / finalTotalTickets).toFixed(2)}% student tickets.`);
console.log(`${((standartTicket * 100) / finalTotalTickets).toFixed(2)}% standard tickets.`);
console.log(`${((kidTicket * 100) / finalTotalTickets).toFixed(2)}% kids tickets.`)
}
cinemaTickets(["The Matrix",
"20",
"student",
"standard",
"kid",
"kid",
"student",
"student",
"standard",
"student",
"End",
"The Green Mile",
"17",
"student",
"standard",
"standard",
"student",
"standard",
"student",
"End",
"Amadeus",
"3",
"standard",
"standard",
"standard",
"Finish"])

