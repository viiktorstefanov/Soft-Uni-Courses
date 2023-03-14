function softUniBar(input) {
let line = input.shift();

let pattern = /%(?<name>[A-Z][a-z]+)%[^|$%.]*<(?<product>\w+)>[^|$%.]*\|(?<count>[0-9]+)\|[^0-9\|$%.]*(?<price>[0-9|\.]+)\$/g
let totalIncome = 0;

while(line !== "end of shift") {
    let matches = line.matchAll(pattern);
    for(const match of matches) {
        let name = match.groups.name;
        let product = match.groups.product;
        let count = match.groups.count;
        let price = match.groups.price;

        totalIncome += count * price;

        console.log(`${name}: ${product} - ${(count*price).toFixed(2)}`);
    }
   
    
    line = input.shift();
}
 console.log(`Total income: ${totalIncome.toFixed(2)}`);
}
softUniBar(['%InvalidName%<Croissant>|2|10.3$',
'%Peter%<Gum>1.3$',
'%Maria%<Cola>|1|2.4',
'%Valid%<Valid>valid|10|valid20$',
'end of shift']

)