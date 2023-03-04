function cardGame(input) {
    let obj = {};
    let playersCards = {};
for(line of input) {
    let eachLine =line.split(': ');
    let playerName = eachLine.shift();
    let playerCards = eachLine.join(' ').split(', ');
    let power = 0;
    let points = 0;
    let type = 0;
    
for(let i = 0; i < playerCards.length; i++) {
        
    for(let j = i+1; j < playerCards.length-1; j++) {
        let a = playerCards[i];
    if(playerCards[i] === playerCards[j]) {
        let b = playerCards[j]
        playerCards.splice(playerCards.indexOf(j),1)
    }
    }
}
if(!playersCards[playerName]) {
    playersCards[playerName] = playerCards;
}

   
    for(let card of playerCards) {
        let cards = card.split("");
        let first = "";
        let second = "";
       if(cards.length === 2) {
        first = cards[0]; // cards.length
        second = cards[1]; // cards.length
       }
       else {
        first = cards[0] + cards[1]; // cards.length
        second = cards[2]; // cards.length
       }
        
        if(playersCards[playerName]) {
            for(card2 of playersCards[playerName]) {
                if(playersCards[playerName].includes(card)){
                    continue;
                }
                else {
                    playersCards[playerName].push(card2)
                }
            }
           
            }
          
       switch(first) {
        case "2" : power = 2; break;
        case "3" : power = 3; break;
        case "4" : power = 4; break;
        case "5" : power = 5; break;
        case "6" : power = 6; break;
        case "7" : power = 7; break;
        case "8" : power = 8; break;
        case "9" : power = 9; break;
        case "10" : power = 10; break;
        case "J" : power = 11; break;
        case "Q" : power = 12; break;
        case "K" : power = 13; break;
        case "A" : power = 14; break;
        case "S" : power = 4; break;
        case "H" : power = 3; break;
        case "D" : power = 2; break;
        case "C" : power = 1; break;
       }
       switch(second) {
        case "2" : type = 2; break;
        case "3" : type = 3; break;
        case "4" : type = 4; break;
        case "5" : type = 5; break;
        case "6" : type = 6; break;
        case "7" : type = 7; break;
        case "8" : type = 8; break;
        case "9" : type = 9; break;
        case "10" : type = 10; break;
        case "J" : type = 11; break;
        case "Q" : type = 12; break;
        case "K" : type = 13; break;
        case "A" : type = 14; break;
        case "S" : type = 4; break;
        case "H" : type = 3; break;
        case "D" : type = 2; break;
        case "C" : type = 1; break;
       }
       points += power * type;
         
    }
    
    if(!obj[playerName]) {
    obj[playerName] = points
    }
    else {
    obj[playerName] = obj[playerName] + points;
    }
    console.log(points);

}
}
cardGame([
    'Peter: 2C, 4H, 9H, AS, QS',
    'Tomas: 3H, 10S, JC, KD, 5S, 10S',
    'Andrea: QH, QC, QS, QD',
    'Tomas: 6H, 7S, KC, KD, 5S, 10C',
    'Andrea: QH, QC, JS, JD, JC',
    'Peter: JD, JD, JD, JD, JD, JD'
    ]
    )
 