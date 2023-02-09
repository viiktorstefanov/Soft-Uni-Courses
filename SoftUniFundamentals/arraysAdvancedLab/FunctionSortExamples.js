function listOfProducts(arr) {
    // for string order 
    let orderNameList = arr.sort((a,b) => a.localeCompare(b));
    console.log(orderNameList)
    }
    listOfProducts(['Potatoes', 'Tomatoes', 'Onions', 'Apples'])

    console.log("________________________________________________")

    function listOfProducts2(arr) {
        //for numbers 
        let orderNameList = arr.sort((a,b) => a - b);
        console.log(orderNameList)
        
        }
        listOfProducts2([5, 6, 7, 10, 2, 1])