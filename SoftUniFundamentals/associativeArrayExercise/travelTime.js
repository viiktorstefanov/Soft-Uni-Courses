function travelTime(arr) {
    let list = {};
    let cityCost = {};
    for (line of arr) {
        line = line.split(' > ');
        let [country, city, cost] = line;
        cost = +cost;
        // list[country] = cityCost;
        if (list[country]) {

            if (cityCost[city]) {
                if (cost < cityCost[city]) {
                    cityCost[city] = cost;
                }
            }

            else {
                cityCost[city] = cost;
            }


        }
        else {
            cityCost[city] = cost;
            list[country] = cityCost;
        }
    }
for(key in list) {
    console.log(list[key]);
}
}
travelTime([
    "Bulgaria > Sofia > 500",
    "Bulgaria > Sopot > 800",
    "France > Paris > 2000",
    "Albania > Tirana > 1000",
    "Bulgaria > Sofia > 200"
]
)