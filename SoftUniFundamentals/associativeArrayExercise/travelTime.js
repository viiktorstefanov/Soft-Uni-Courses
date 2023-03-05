function travelTime(arr) {
            let  obj = {}
    
            arr.forEach(line => {
                let tokens = line.split(" > ");
                let [country, city, price] = tokens;
    
                if (! obj.hasOwnProperty(country)) {
                     obj[country] = {}
                }
    
                if (! obj[country].hasOwnProperty(city)) {
    
                     obj[country][city] = price;
                }
    
                let oldPrice =  obj[country][city];
    
                if (oldPrice > price) {
                     obj[country][city] = price;
                }
    
            });
            // let sorted = Object.entries(obj).sort((a, b) => a[0].localeCompare(b[0]));
            let sorted = Object.keys( obj).sort((a,b) => a.localeCompare(b));
          
            let newObj = {};
            for(key of sorted) {
                let sortedCost = Object.entries(obj[key]).sort((a, b) => a[1] - b[1]);
                newObj[key] = {};
                let countryObj = newObj[key];
                sortedCost.forEach(entry => {
                    let [city, cost] = entry;
                    countryObj[city] = cost
                })
                
            }
            let result = "";
            for(country in newObj) {
            result += country + ' -> ';
            cities = Object.keys(newObj[country]); 
            
            cities.forEach((city, index) => {
                result+= `${city} -> ${newObj[country][city]}`;
                if(index !== cities.length -1 ) {
                    result +=  " "
                }
            })
            // for(city in newObj[country]) {
            //     // console.log(`${country} -> ${city} -> ${newObj[country][city]}`);
            //     result+= `${city} -> ${newObj[country][city]}`;
            // }
            result += '\n'
            
            }
            console.log(result);
        } 
        travelTime([
    "Bulgaria > Sofia > 500",
    "Bulgaria > Sopot > 100",
    "France > Paris > 2000",
    "Albania > Tirana > 1000",
    "Bulgaria > Sofia > 200"
    ]
    )
    