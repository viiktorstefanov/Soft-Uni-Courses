const Electronics = require('../models/Electronics');

function getAll() {
    return Electronics.find({});
};

function getById(electronicId) {
        return Electronics.findById(electronicId);
};

function createElectronics(electronicsData) {
    return Electronics.create(electronicsData)
};

function editElectronics(electronicsId, electronicsData) {
    return Electronics.findByIdAndUpdate(electronicsId, electronicsData, { runValidators: true });
};

function deleteElectronics(electronicsId) {
    return Electronics.findByIdAndDelete(electronicsId);
}

async function buy(electronicsId, userId) {
    const electronics = await Electronics.findById(electronicsId);
    electronics.buyingList.push(userId);
    await electronics.save();
};

async function searchItems(name,type) {
    return Electronics.find(
    { 
        name: { $regex: name, $options: 'i' },
        type: { $regex: type, $options: 'i' } 
    }).lean();
}


module.exports = {
    getAll,
    getById,
    createElectronics,
    editElectronics,
    deleteElectronics,
    buy,
    searchItems
}
