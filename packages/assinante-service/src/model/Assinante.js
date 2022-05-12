const mongoose = require('mongoose')

const schema = mongoose.Schema({
    cpf: String,
    nome: String
})

module.exports = mongoose.model("Assinante", schema)