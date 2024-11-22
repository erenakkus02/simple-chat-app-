const messageService = require('../services/messageService');

const sendMessage = async (req, res) => {
    try {
        const message = await messageService.sendMessage(req.body);
        res.status(201).json(message);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

const getMessages = async (req, res) => {
    try {
        const { receiverId } = req.params;
        const messages = await messageService.getMessagesByReceiver(receiverId);
        res.status(200).json(messages);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

module.exports = {
     sendMessage,
     getMessages 

};
