const fs = require('fs');
const data = JSON.parse(fs.readFileSync('./services/data.json'));

function getList() {
    return data;
};

function getItemById(id) {
    return data.find(x => x.id === id);
};

async function deleteById(id) {
    const index = data.findIndex(p => p.id == id);
    data.splice(index, 1);

    await persist();
}

async function createItem(name, price) {
    const id = ("155D00" + (Math.random()* 99999999)).slice(0,8);
    data.push( {
        id,
        name,
        price,
    });

    await persist();

    

}

async function persist() {
    return new Promise((resolve, reject) => {
        fs.writeFile('./services/data.json', 
        JSON.stringify(data, null , 2), 
        (err) => {
            if(err == null) {
                resolve();
            } else {
                reject(err);
            }
        });
    }) 
};

module.exports = {
    getList,
    getItemById,
    createItem,
    deleteById
}