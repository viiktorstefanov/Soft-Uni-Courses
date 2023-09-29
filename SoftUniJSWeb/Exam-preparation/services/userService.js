const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

const JWT_SECRET = 'mostDangerousPassword1995';

async function register(email, password, firstName, lastName) {
    const existing = await User.findOne({ email }).collation({ locale: 'en', strength:2 });

    if(existing) {
        throw new Error('Email is taken');
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    
    const user = await User.create({
        email,
        hashedPassword,
        firstName,
        lastName
    });
    

    return {
        _id: user._id,
        email: user.email,
        firstName,
        lastName
    }
};

async function login() {

};

function verifyToken() {

}

function createToken({ _id, username }) {
    const payload = {
        _id,
        username,
    };

    const token = jwt.sign(payload, JWT_SECRET);
    return token;
}


module.exports = {
    register,
    login,
    verifyToken
}