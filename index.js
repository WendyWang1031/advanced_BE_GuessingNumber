// index.js

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const gameHistoryRouter = require("./routes/gameHistoryRouter"); // 注意路徑

const app = express();
const PORT = 9999;

app.use(express.json());
app.use(cors());

//測試端點
app.get("/test", (req, res) => {
  res.send({ msg: "you are amazing!" });
});

// 猜數字遊戲 API 端點
app.get("/answer", (req, res) => {
  const answer = Math.floor(Math.random() * 99) + 1; // 產生1~99的隨機數字
  res.send({ answer: [answer] });
});

// 連接到 MongoDB 數據庫
mongoose.connect(
  "mongodb+srv://WendyWang:LsZ01pZl1gSn8tz6@firsttry.qa1lzhq.mongodb.net/FirstTry?retryWrites=true&w=majority"
);

mongoose.connection.on("connected", () => {
  console.log("Connected to MongoDB");
});

mongoose.connection.on("error", (err) => {
  console.error("MongoDB connection error:", err);
});

mongoose.connection.on("disconnected", () => {
  console.log("Disconnected from MongoDB");
});

// 使用遊玩歷史的路由
app.use("/api", gameHistoryRouter);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
