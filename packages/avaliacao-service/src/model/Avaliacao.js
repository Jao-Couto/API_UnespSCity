const mongoose = require('mongoose')

const schema = mongoose.Schema({
    idAssinante: mongoose.Schema.Types.ObjectId,
    idFilme: mongoose.Schema.Types.ObjectId,
    nota: Number
})

module.exports = mongoose.model("Avaliacao", schema)