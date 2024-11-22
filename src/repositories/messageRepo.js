const message = require("../models/message");


const creatMessage = async (messageData) => {
    const message = new message(messageData);
    return await message.save();

}

const getMessagesByReceiver = async (receiverId) => {
    return await message.find({ receiver: receiverId }).populate("sender", "username");
};

// Göndericiye göre mesajları bulma
const getMessagesBySender = async (senderId) => {
    return await message.find({ sender: senderId }).populate("receiver", "username");
};



module.exports = {
    creatMessage,
    getMessagesByReceiver,
    getMessagesBySender
};