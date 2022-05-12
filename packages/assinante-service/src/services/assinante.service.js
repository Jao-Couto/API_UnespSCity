const Assinante = require("../model/Assinante")

module.exports = {
    name: "assinante-service",
    version: 1,
    actions: {
        async create(ctx) {
            if (ctx.params && ctx.params.cpf && ctx.params.nome) {
                return await Assinante.create({
                    cpf: ctx.params.cpf,
                    nome: ctx.params.nome
                })
            }
        },

        async exists(ctx) {
            if (ctx.params && ctx.params.id) {
                return await Assinante.exists({
                    _id: ctx.params.id
                })
            }
            return false
        }

    }

}