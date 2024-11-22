const chatSocket = (io) => {
    io.on("connection", (socket) => {
        console.log("Bir kullanıcı bağlandı:", socket.id);

        // Mesaj gönderme
        socket.on("send_message", (data) => {
            console.log("Mesaj alındı:", data);

            // Alıcıya mesaj gönder
            io.to(data.receiverId).emit("receive_message", data);
        });

        // Kullanıcıyı odalara bağla
        socket.on("join_room", (roomId) => {
            socket.join(roomId);
            console.log(`Kullanıcı ${socket.id}, ${roomId} odasına katıldı.`);
        });

        socket.on("disconnect", () => {
            console.log("Bir kullanıcı ayrıldı:", socket.id);
        });
    });
};

module.exports = chatSocket;
