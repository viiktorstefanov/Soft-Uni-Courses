function autoCompany(input) {
let cars = {};
input.forEach( x => {
    let [brand, model, quantity] = x.split(' | ');
    quantity = +quantity;

   if(!cars[brand]) {
        cars[brand] = {};
        cars[brand][model] = quantity;
   }else {
        if(!cars[brand][model]) {
            cars[brand][model] = quantity;
        }else {
            cars[brand][model] += quantity;
        }
   }  
})

for (const brand in cars) {
   console.log(brand);
   for(const model in cars[brand]) {
    console.log(`###${model} -> ${cars[brand][model]}`);
   }
}
}
autoCompany(['Audi | Q7 | 1000',
'Audi | Q6 | 100',
'BMW | X5 | 1000',
'BMW | X6 | 100',
'Citroen | C4 | 123',
'Volga | GAZ-24 | 1000000',
'Lada | Niva | 1000000',
'Lada | Jigula | 1000000',
'Citroen | C4 | 22',
'Citroen | C5 | 10']
)