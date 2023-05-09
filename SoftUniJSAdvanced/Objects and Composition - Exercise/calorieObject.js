function calorieObj (arr) {
let obj = {};
let food;
let calories = 0;
for( let i = 0; i < arr.length; i++ ) {
    let currItem = arr[i];
    
    if(i % 2 === 0) {
        food = currItem;
        obj[food] = 0;
    }
    else {
        obj[food] = +currItem;
    }
}
console.log(obj);
}
calorieObj(['Yoghurt', '48', 'Rise', '138', 'Apple', '52'])
calorieObj(['Potato', '93', 'Skyr', '63', 'Cucumber', '18', 'Milk', '42'])

function createCalorie(foods) {
    return foods.reduce((acc, curr, index) => {
      if (index % 2 === 0) {
        acc[curr] = Number(foods[index + 1]);
      }
  
      return acc;
    }, {});
  }
  
  console.log(createCalorie(['Yoghurt', '48', 'Rise', '138', 'Apple', '52']));
  console.log(
    createCalorie(['Potato', '93', 'Skyr', '63', 'Cucumber', '18', 'Milk', '42'])
  );