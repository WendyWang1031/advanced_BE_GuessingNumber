// models/gameHistory.js

const mongoose = require("mongoose");

const gameHistorySchema = new mongoose.Schema({
  createdAt: {
    type: Date,
    required: true,
  },
  numberOfGuesses: {
    type: Number,
    required: true,
  },
  answer: {
    type: Number,
    required: true,
  },
  isSuccess: {
    type: Boolean,
    required: true,
  },
});

const GameHistory = mongoose.model("GameHistory", gameHistorySchema);

module.exports = GameHistory;
