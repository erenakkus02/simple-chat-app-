const express = require("express");
const http = require("http");
const mongoose = require("mongoose");
const socketIo = require("socket.io");
const userRoutes = require("./routes/userRoutes");
const messageRoutes = require("./routes/messageRoutes");
const chatSocket = require("./sockets/chatSocket");
require("dotenv").config();

const app = express();

// Middleware
app.use(express.json());

// Routes
app.use("/api/users", userRoutes);
app.use("/api/messages", messageRoutes);

// Veritabanı Bağlantısı
mongoose
    .connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("MongoDB'ye bağlandı"))
    .catch((err) => console.error("MongoDB bağlantı hatası:", err));

// HTTP ve Socket Sunucusu
const server = http.createServer(app);
const io = socketIo(server, {
    cors: {
        origin: "*", // Gerekirse bu ayarı değiştirebilirsiniz.
    },
});

// Socket entegrasyonu
chatSocket(io);

// Sunucu Başlatma
const PORT = process.env.PORT || 5000;
server.listen(PORT, () => {
    console.log(`Sunucu ${PORT} portunda çalışıyor.`);
});
