function vacation(group, type, day) {
    let price = 0;
    let totalPrice = 0;
    if(type === "Students") {
        if(day === "Friday") {
        price = 8.45;
    }
        else if(day === "Saturday") {
        price = 9.80;
    }
        else if(day === "Sunday") {
        price = 10.46;
    }
    }
    else if(type === "Business") {
        if(day === "Friday") {
            price = 10.90;
        }
        else if(day === "Saturday") {
            price = 15.60;
        }
        else if(day === "Sunday") {
            price = 16;
        }   
    }
    else if(type === "Regular") {
        if(day === "Friday") {
            price = 15;
        }
        else if(day === "Saturday") {
            price = 20;
        }
        else if(day === "Sunday") {
            price = 22.50;
        }   
    }
totalPrice = price * group ;
if(group >= 30 && type === "Students") {
    totalPrice = totalPrice - (totalPrice * 0.15)
}
else if(group >= 100 && type === "Business") {
    totalPrice = totalPrice - (price * 10);
}
else if (group >= 10 && group <= 20 && type === "Regular") {
    totalPrice = totalPrice - (totalPrice * 0.5)

}
console.log(`Total price: ${totalPrice.toFixed(2)}`);

}
vacation(30,
    "Students",
    "Sunday"
    )