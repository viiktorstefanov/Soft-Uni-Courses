function sortArray(input, order) {

    if(order === 'asc') {
        ascending.apply(null, input);
    } else {
        descending.apply(null, input);
    }
    
    function ascending() {
        input = input.sort((a, b) => a - b );
        return input;
    }
    
    function descending() {
        input = input.sort((a, b) => b - a );
        return input;
    }
     return input;
    }
sortArray([14, 7, 17, 6, 8], 'asc');
sortArray([14, 7, 17, 6, 8], 'desc');