const mongoose = require('mongoose')

const schema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    userId: Number,
    cityId: Number,
    street: String,
    streetNumber: Number,
    referencePoint: String,
    latitude: String,
    longitude: String,
    description: String,
    images: [String],
    date: Date,
    isResolved: Boolean
})

module.exports = mongoose.model("Foco_Escorpiao", schema)