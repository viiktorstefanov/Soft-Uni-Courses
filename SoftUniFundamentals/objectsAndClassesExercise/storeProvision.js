function storeProvision(stock, ordered) {
    let currentStock = {};
    for (let index = 0,  i = 0; i < stock.length / 2; i++, index+=2) {

        let nameProductStock = stock[index];
        let quantityOfProductStock = Number(stock[index + 1]);

        currentStock[nameProductStock] = quantityOfProductStock
    }

   

    for (let i = 0, index = 0; i < ordered.length / 2; i++, index+=2) {
        let nameProductOrdered = ordered[index];
        let quantityOfProductOrdered = Number(ordered[index + 1]);
        
        if (nameProductOrdered in currentStock) {
            currentStock[nameProductOrdered] += quantityOfProductOrdered;
        } else {
            currentStock[nameProductOrdered] = quantityOfProductOrdered
        }

    }
    
    for (const key in currentStock) {
        console.log(`${key} -> ${currentStock[key]}`)
    }
}
storeProvision([
    'Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'
],
    [
        'Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30'
    ]
)
