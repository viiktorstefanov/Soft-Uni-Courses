function cardGame(arr) {
    let stats = {};
    for (line of arr) {
        line = line.split(': ');
        let playerName = line.shift();
        line = line.join('').split(', ');
        let set = new Set();
        for (card of line) {
            set.add(card)
            if (stats[playerName]) {
                stats[playerName] = stats[playerName].add(card)
            }
            else {
                stats[playerName] = set;
            }
        }
    }
    let statsWithPoints = {};
    let arrStats = Object.entries(stats);
    for (playerName of arrStats) {
        let set = playerName[1];
        let cardArray = Array.from(set);
        let points = 0;
        let power = 0;
        let type = 0;
        for (card of cardArray) {
            let cards = card.split("");
            let first = "";
            let second = "";
            if (cards.length === 2) {
                first = cards[0];
                second = cards[1];
            }
            else {
                first = cards[0] + cards[1];
                second = cards[2];
            }
            switch (first) {
                case "2": power = 2; break;
                case "3": power = 3; break;
                case "4": power = 4; break;
                case "5": power = 5; break;
                case "6": power = 6; break;
                case "7": power = 7; break;
                case "8": power = 8; break;
                case "9": power = 9; break;
                case "10": power = 10; break;
                case "J": power = 11; break;
                case "Q": power = 12; break;
                case "K": power = 13; break;
                case "A": power = 14; break;
                case "S": power = 4; break;
                case "H": power = 3; break;
                case "D": power = 2; break;
                case "C": power = 1; break;
            }
            switch (second) {
                case "2": type = 2; break;
                case "3": type = 3; break;
                case "4": type = 4; break;
                case "5": type = 5; break;
                case "6": type = 6; break;
                case "7": type = 7; break;
                case "8": type = 8; break;
                case "9": type = 9; break;
                case "10": type = 10; break;
                case "J": type = 11; break;
                case "Q": type = 12; break;
                case "K": type = 13; break;
                case "A": type = 14; break;
                case "S": type = 4; break;
                case "H": type = 3; break;
                case "D": type = 2; break;
                case "C": type = 1; break;
            }
            points += power * type;
        }
        statsWithPoints[playerName[0]] = points;
    }
    for (key in statsWithPoints) {
        console.log(`${key}: ${statsWithPoints[key]}`);
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