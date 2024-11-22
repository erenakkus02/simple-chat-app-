const userRepo = require("../repositories/userRepo");


const registerUser= async (userData) => {
    const { username } = userData;
    const existingUser = await userRepo.findUserByUsername(username);
    if (existingUser) {
        throw new Error('Email already exists');

    }

    const exsistingUsername = await userRepo.findUserByUsername(userData.username);
    if (exsistingUsername) {
        throw new Error('Username already exists');

    }
    return await userRepo.createUser(userData);

}
const loginUser = async (userData) => {
    const user = await userRepo.findUserByUsername(userData.username);
    if (!user || user.password !== userData.password) {
        throw new Error('Invalid username or password');

    }
    return "Kullanıcı ID: ${user.id} Giriş basarılı";
}

module.exports = {
    registerUser,
    loginUser,

};