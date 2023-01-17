function rounding(number, prec) {

    if(prec > 15) {
    
    prec = 15;
    
    }
    
     
    
    number = number.toFixed(prec);
    
    console.log(Number(number));
    
    }
    rounding(10.5,3)