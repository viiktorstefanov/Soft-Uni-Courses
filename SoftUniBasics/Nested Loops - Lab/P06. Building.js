function building(input) {
let numFlor = Number(input[0]);
let numRoom = Number(input[1]);

for(let i= numFlor; i > 0; i--) {
    let buff = "";
    for(let k = 0; k < numRoom; k++) {
        
        if(i === numFlor) {
            buff += `L${i}${k} `;
        }
        else if(i % 2 === 0 ) {
            buff+= `O${i}${k} `;
        }
        else {
            buff+= `A${i}${k} `;
        }
        
    }
    console.log(buff)
    
}
}
building(["6","4"])