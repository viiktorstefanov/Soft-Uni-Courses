function greatestCommonDivisor(a, b) {

   
        if (a === 0) {
          return b;
        }
      
        return greatestCommonDivisor(b % a, a);
      }
      
      console.log(greatestCommonDivisor(15, 5));
      console.log(greatestCommonDivisor(2154, 458));

