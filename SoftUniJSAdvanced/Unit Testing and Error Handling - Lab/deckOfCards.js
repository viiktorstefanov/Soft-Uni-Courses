function printDeckOfCards(inputCards) {
        const playingCards = function playingCards(face,suit) {

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
        let cards = [];
        let flag = true;
        inputCards.forEach(x => {

            let [face, suit] = x.split('');
            if(x.length > 2) {
                face = x[0] + x[1];
                suit = x[2];
            }
            try {
                let validCard = playingCards(face,suit).toString();
                cards.push(validCard);
            } catch (error) {
                console.log(`Invalid card: ${x}`);
                flag = false;
                return;
            }
            
            
        })
      if(flag) {
        console.log(cards.join(' '))}
  }
  
  printDeckOfCards(['AS', '10D', 'KH', '2C'])
  printDeckOfCards(['5S', '3D', 'QD', '1C'])