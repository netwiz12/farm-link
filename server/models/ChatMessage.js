const mongoose = require('mongoose');

const chatMessageSchema = new mongoose.Schema({
    senderId: { type: String, required: true },
    senderType: { type: String, enum: ['farmer', 'buyer'], required: true },
    recipientId: { type: String, required: true },
    message: { type: String, required: true },
    timestamp: { type: Date, default: Date.now },
    commodityId: { type: String, required: true }
});

const ChatMessage = mongoose.model('ChatMessage', chatMessageSchema);

module.exports = ChatMessage;