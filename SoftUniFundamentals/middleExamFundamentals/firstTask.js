function firstTask(input) {
    let index = 0;
   let numCities = Number(input.shift());
   let profit = 0;
   let totalProfit = 0;
   
   for( let i = 1; i <= numCities; i++) {
      
       let currCity = input[index];
       let income = Number(input[index+1]);
       let expenses = Number(input[index+2]);

       if(i % 5 === 0) {
        income = income - (income * 0.1)
    }
       else if(i % 3 === 0) {
           expenses = expenses + (expenses * 0.5)
       }
       
       profit = income - expenses;
       totalProfit += profit
       console.log(`In ${currCity} Burger Bus earned ${profit.toFixed(2)} leva.`);
       index += 3;
       
       
   }
   console.log(`Burger Bus total profit: ${totalProfit.toFixed(2)} leva.`);
   }
// firstTask((["3",
// "Sofia",
// "895.67",
// "213.50",
// "Plovdiv",
// "2563.20",
// "890.26",
// "Burgas",
// "2360.55",
// "600.00"])
// )
firstTask((["5",
"Lille",
"2226.00",
"1200.60",
"Rennes",
"6320.60",
"5460.20",
"Reims",
"600.20",
"452.32",
"Bordeaux",
"6925.30",
"2650.40",
"Montpellier",
"680.50",
"290.20"])
)

// function problem1(arr) {
//     let numOfcities = Number(arr.shift());
//     let citiesCounter = 0;
//     let totalIncome = 0;
//     for (let i = 0; i < numOfcities; i++) {
//         let currenCity = arr.splice(0, 3);
//         let income = Number(currenCity[1]);
//         let expences = Number(currenCity[2]);
//         citiesCounter++;
//         if (citiesCounter % 3 === 0) {
//             expences = expences * 1.5;
 
//         } if (citiesCounter % 5 === 0 && citiesCounter % 3 === 0) {
//             income = income * 0.9;
//             expences = Number(currenCity[2]);
//         } else if (citiesCounter % 5 === 0 && citiesCounter % 3 != 0) {
//             income = income * 0.9;
//         }
//         let profit = income - expences;
//         console.log(`In ${currenCity[0]} Burger Bus earned ${profit.toFixed(2)} leva.`);
//         totalIncome += profit;
 
//     }
//     console.log(`Burger Bus total profit: ${totalIncome.toFixed(2)} leva.`);
 
// }