// index.js

const express = require("express");
const path = require("path");
const app = express();
const PORT = 3000;

app.use(express.json());

// 生成範圍在 1 到 100 之間的隨機數字
function generateRandomNumber() {
  return Math.floor(Math.random() * 100) + 1;
}

// 存放猜數字遊戲答案的變數
let answer;

app.get("/answer", (req, res) => {
  // 每次呼叫 /answer 時，更新答案
  answer = generateRandomNumber();
  res.send({ answer: answer });
});

app.get("/test", (req, res) => {
  res.send({ msg: "you are amazing!" });
});

app.get("*", (req, res) => {
  res.status(404).json({ error: "Page did not exist" });
});

app.use((err, req, res, next) => {
  const status = err.status || 500;
  if (status === 500) {
    console.log("The server errored when processing a request");
    console.log(err);
  }

  res.status(status);
  res.send({
    status: status,
    message: err.message,
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
