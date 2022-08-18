const mongoose = require('mongoose')

const schema = mongoose.Schema({
    userId: Number,
    street: String,
    streetNumber: Number,
    referencePoint: String,
    cityId: Number,
    latitude: String,
    longitude: String,
    description: String,
    date: { type: Date, default: Date.now },
    images: [String],
    isResolved: Boolean
})

module.exports = mongoose.model("Praca", schema)