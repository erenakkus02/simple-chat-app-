const userRepo = require("../repositories/userRepo");

const authMiddleware = async (req, res, next) => {
    try {
        const userId = req.headers["x-user-id"]; // Örneğin, kullanıcı ID'si bir header üzerinden alınıyor.
        if (!userId) {
            return res.status(401).json({ error: "Kimlik doğrulama gerekli." });
        }

        const user = await userRepo.findUserById(userId);
        if (!user) {
            return res.status(401).json({ error: "Geçersiz kullanıcı." });
        }

        req.user = user; 
        next();
    } catch (err) {
        
        res.status(500).json({ error: "Kimlik doğrulama sırasında bir hata oluştu." });
    }
};

module.exports = authMiddleware;
