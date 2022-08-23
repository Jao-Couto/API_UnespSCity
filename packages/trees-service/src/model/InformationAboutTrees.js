const mongoose = require("mongoose");

const schema = mongoose.Schema({
    cityid: Number,
    userid: Number,
    name: String,
    images: [String],
    description: String,
    latitude: Number,
    longitude: Number,
    street: String,
    streetNumber: Number,
    referencePoint: Number,
    date: { type: Date, default: Date.now },
});

module.exports = mongoose.model("InformationAboutTrees", schema);
