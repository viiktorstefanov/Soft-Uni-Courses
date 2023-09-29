const { Schema, model, Types } = require('mongoose');

const CreatureSchema = new Schema({
    name: {
        type: String,
        required: [true, 'Name is required!'],
        minLength: [2, 'Name should be at least 2 characters!'],
      },
      species: {
        type: String,
        required: [true, 'Species is required!'],
        minLength: [3, 'Species should be at least 3 characters!'],
      },
      skinColor: {
        type: String,
        required: [true, 'Skin color is required!'],
        minLength: [3, 'Skin color should be at least 3 characters!'],
      },
      eyeColor: {
        type: String,
        required: [true, 'Eye color is required!'],
        minLength: [3, 'Eye color should be at least 3 characters!'],
      },
      image: {
        type: String,
        required: [true, 'Image is required!'],
        match: [
          /^http:\/\/|^https:\/\//,
          'Image must start with either http:// or https://',
        ],
      },
      description: {
        type: String,
        required: [true, 'Description is required!'],
        minLength: [5, 'Description must be between 5 and 50 characters!'],
        maxLength: [500, 'Description must be between 5 and 500 characters!'],
      },
    votes: [
        {
            type: Types.ObjectId,
            ref: 'User',
        }
    ],
    owner: { 
        type: Types.ObjectId, 
        ref: 'User',
    }
});

const Creature = model('Creature', CreatureSchema);

module.exports = Creature;