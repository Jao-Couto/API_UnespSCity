const mongoose = require('mongoose')

const schema = mongoose.Schema({
    name: String,
    street: String,
    number: Number,
    city: Number,
    latitude: String,
    longitude: String,
    description: String,
    data: { type: Date, default: Date.now },
})

module.exports = mongoose.model("Praca", schema)