function towns(line) {
    let townObject = {};
    for(let iterator of line) {
    let [town,latitude,longitude] = iterator.split(' | ');
    latitude = (Math.abs(Number(latitude))).toFixed(2);
    longitude = (Math.abs(Number(longitude))).toFixed(2);
   
    townObject.town = town;
    townObject.latitude = latitude;
    townObject.longitude = longitude;
     console.log(townObject);
    }
    
    }
    towns(['Sofia | 42.696552 | 23.32601',
    'Beijing | 39.913818 | 116.363625']
    )