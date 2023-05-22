function playingCards(face,suit) {

let faces = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
let suits = {
    'S' : "\u2660",
    'H' : "\u2665",
    'D' : "\u2666",
    'C' : "\u2663",
}

if(!faces.includes(face) || !suits[suit]) {
    throw new Error
}
if(face !== face.toUpperCase() && suit !== suit.toUpperCase()) {
    throw new Error
}

let card = {
    face,
    suit,
    toString() {
        return (this.face + suits[this.suit]) 
    }
}
return card;
}
module.exports = playingCards;
