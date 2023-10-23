const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

const JWT_SECRET = 'mostDangerousPassword1995';

async function register(email,username, password) {
    const existing = await User.findOne({ email }).collation({ locale: 'en', strength: 2 });
    const existingUsername = await User.findOne({ username }).collation({ locale: 'en', strength: 2});

    if(existing) {
        throw new Error('Email is taken');
    }

    if(existingUsername) {
        throw new Error('Username is taken');
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    
    const user = await User.create({
        email,
        hashedPassword,
        username,
    });
    

    return {
        _id: user._id,
        email: user.email,
        username: user.username,
    }
};

async function login(email, password) {
    const existing = await User.findOne({ email }).collation({ locale: 'en', strength: 2 });

    if(!existing) {
        throw new Error('Incorrect username or password')
    }

    const match = await bcrypt.compare(password, existing.hashedPassword);

    if(!match) {
        throw new Error(`Passwords don't match`);
    }

    return {
        _id: existing._id,
        email: existing.email,
    }
};

function getUserInfo(userId) {
    return User.findById(userId);
}



module.exports = {
    register,
    login,
    getUserInfo,
}