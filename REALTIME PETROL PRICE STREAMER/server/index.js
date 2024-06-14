const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const authRoutes = require("./routes/auth");
const messageRoutes = require("./routes/messages");
const app = express();
const socket = require("socket.io");
require("dotenv").config();
app.use(cors());
app.use(express.json());
mongoose
  .connect("mongodb+srv://mithunkumarb22aim:JtuZm3ohnLL0g11C@cluster0.huuomm5.mongodb.net/loginpage?retryWrites=true&w=majority&appName=Cluster0")
  .then(() => {console.log("DB Connetion Successfull");})
  .catch((err) => {console.log(err.message);});
app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);
const server = app.listen(process.env.PORT, () =>console.log(`Server started on ${process.env.PORT}`));
const io = socket(server, {cors: {origin: "http://127.0.0.1:3000",credentials: true,},});
global.onlineUsers = new Map();
io.on("connection", (socket) => {global.chatSocket = socket;socket.on("add-user", (userId) => {onlineUsers.set(userId, socket.id); });
  socket.on("send-msg", (data) => {const sendUserSocket = onlineUsers.get(data.to);
    if (sendUserSocket) {socket.to(sendUserSocket).emit("msg-recieve", data.msg);}
  });
});