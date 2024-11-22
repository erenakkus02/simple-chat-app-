const User = require("../models/user");

const createUser = async (userData) => {
    const user = new User(userData);
    return await user.save();
}

const findUserByUsername = async (username) => {
    return await User.findOne({ username });
}

const findUserByEmail = async (userEmail) => {
    return await User.findOne({ userEmail });
}
const findUserById = async (userId) => {
    return await User.findById(userId); // Kullanıcıyı ID'ye göre buluyoruz
};

module.exports = {
    createUser,  // Burada eksiklik olabilir
    findUserByUsername,
    findUserByEmail,
    findUserById
};
