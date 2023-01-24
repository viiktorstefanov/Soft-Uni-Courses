function centuries (cent) {
let centuries = cent*100;
let year = Math.trunc(365.2422 * centuries);
let hour = 24*year;
let minutes = 60*hour;
console.log(`${cent} centuries = ${centuries}`+` years = ${year} `+`days = ${hour} `+`hours = ${minutes} minutes`)
}
centuries(1)