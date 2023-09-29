const Creature = require('../models/Creature');

function getAll() {
    return Creature.find({});
};

function getById(animalId, include) {
    if(include) {
        return Creature.findById(animalId).populate(include);
    } else {
        return Creature.findById(animalId);
    }
};

function createAnimal(animalData) {
    return Creature.create(animalData)
};

function editAnimal(animalId, animalData) {
    return Creature.findByIdAndUpdate(animalId, animalData, { runValidators: true });
}

function deleteAnimal(animalId) {
    return Creature.findByIdAndDelete(animalId);
}

async function voteForAnimal(animalId, userId) {
    return Creature.findByIdAndUpdate(animalId, { $push: { votes: userId } });
};

function getUserAnimals(userId) {
    return Creature.find().where('owner').eq(userId);
}

module.exports = {
    getAll,
    getById,
    createAnimal,
    editAnimal,
    deleteAnimal,
    voteForAnimal,
    getUserAnimals,
}
