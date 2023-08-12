const fs = require('fs');
const data = JSON.parse(fs.readFileSync('./services/data.json'));

function getList() {
    return data;
};

function getItemById(id) {
    return data.find(x => x.id === id);
};

async function createItem(name, price) {
    const id = ("155D00" + (Math.random()* 99999999)).slice(0,8);
    data.push( {
        id,
        name,
        price,
    });

    fs.writeFile('./services/data.json', JSON.stringify(data, null , 2), () => {});

}

module.exports = {
    getList,
    getItemById,
    createItem
}