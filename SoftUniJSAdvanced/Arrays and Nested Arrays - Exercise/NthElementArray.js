function everyNElement (array, step) {

    let result = [];
      
        for (let i = 0; i < array.length; i += step) {
          result.push(array[i]);
        }
      
        return result;
      }
      
      console.log(everyNElement(['5', '20', '31', '4', '20'], 2));
      console.log(everyNElement(['dsa', 'asd', 'test', 'tset'], 2));
      console.log(everyNElement(['1', '2', '3', '4', '5'], 6));