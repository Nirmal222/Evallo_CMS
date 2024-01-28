const mongoose = require('mongoose');

const ContentSchema = new mongoose.Schema({
    // category: { type: mongoose.Schema.Types.ObjectId, ref: "project" },
    category: { type: String },
    tag: { type: String, required: true },
    content: { type: String },
    title: { type: String } 
    // files: [{ type: String}],
});

const Content = mongoose.model('content', ContentSchema);

module.exports = Content;