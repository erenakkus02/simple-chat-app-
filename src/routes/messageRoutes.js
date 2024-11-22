const express = require("express");
const messageController = require("../controllers/messageController");
const authMiddleware = require("../middleWares/authMiddleWare");

const router = express.Router();

// Yeni mesaj gönder
router.post("/send", authMiddleware, messageController.sendMessage);

// Mesajları al
router.get("/:receiverId", authMiddleware, messageController.getMessages);

module.exports = router;
