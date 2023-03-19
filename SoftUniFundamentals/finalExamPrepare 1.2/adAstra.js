function adAstra (input) {
let text = input.shift();
let pattern = /([#||])(?<food>[A-Za-z ]+)\1(?<date>[\d]{2}\/[\d]{2}\/[\d]{2})\1(?<calories>\d{1,5})\1/g;
let extract = text.matchAll(pattern);
let enoughFoodDays = 0;
let allCalories = 0;
for (const iterator of extract) {
    let calories = iterator.groups.calories;
    allCalories += Number(calories);
}
console.log(`You have food to last you for: ${Math.floor(allCalories/2000)} days!`);
extract = text.matchAll(pattern);
for (const iterator of extract) {
    let food = iterator.groups.food;
    let date = iterator.groups.date;
    let calories = iterator.groups.calories;
    console.log(`Item: ${food}, Best before: ${date}, Nutrition: ${calories}`);
}
}
adAstra([
    '#Bread#19/03/21#4000#|Invalid|03/03.20||Apples|08/10/20|200||Carrots|06/08/20|500||Not right|6.8.20|5|'
    ]
    )