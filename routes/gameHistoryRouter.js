// routes/gameHistoryRouter.js

const express = require("express");
const router = express.Router();
const GameHistory = require("../models/gameHistory"); // 注意路徑

router.post("/game-history", async (req, res) => {
  try {
    // 從 POST 請求中獲取資料
    const { createdAt, numberOfGuesses, answer, isSuccess } = req.body;

    // 創建一個新的遊戲歷史記錄
    const newGameHistory = new GameHistory({
      createdAt,
      numberOfGuesses,
      answer,
      isSuccess,
    });

    // 將資料存入資料庫
    await newGameHistory.save();

    // 回傳成功訊息或新增的遊戲歷史記錄資訊
    res
      .status(201)
      .json({ message: "Game history added", data: newGameHistory });
  } catch (error) {
    // 處理錯誤
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
