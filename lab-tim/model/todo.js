'use strict';

const mongoose = require('mongoose');

const Todo = mongoose.Schema({
  name: { type: String, required: true },
  desc: { type: String, required: true },
  priority: { type: String, required: true },
  userId: { type: mongoose.Schema.Types.ObjectId, required: true, ref: 'user' }
}, { timestamps: true });

module.exports = mongoose.model('todo', Todo);
