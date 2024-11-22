const messageRepo = require("../repositories/messageRepo");



const sendMessage = async (Data) => {
    if (!Data.message || Data.message.trim() === '') {
        throw new Error('Message cannot be empty');


    }
    return await messageRepo.creatMessage(Data);

}
const getMessagesByReceiver = async (receiverId) => {
    return await messageRepo.getMessagesByReceiver(receiverId);
};

const getMessagesBySender = async (senderId) => {
    return await messageRepo.getMessagesBySender(senderId);
};

module.exports = { 
    sendMessage,
    getMessagesByReceiver, 
    getMessagesBySender
};

