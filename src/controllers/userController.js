const userService = require('../services/userService');


const register = async (req, res) => {
    try {
        const { username, password } = req.body;
        if (!username || !password) {
            return res.status(400).json({ error: "Username and password are required." });
        }
        const user = await userService.registerUser(req.body);
        res.status(201).json(user);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

const login = async (req, res) => {
    try {
        const token = await userService.loginUser(req.body);
        res.status(200).json({ token });
    } catch (err) {
        res.status(401).json({ error: err.message });
    }
};

module.exports = { 
    register,
    login 
};
