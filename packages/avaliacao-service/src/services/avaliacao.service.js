const Avaliacao = require("../model/Avaliacao")

module.exports = {
    name: "avaliacao-service",
    version: 1,
    dependencies: [
        "v1.catalogo-service",
        "v1.assinante-service"
    ],
    actions: {
        async avaliar(ctx) {
            const idAssinante = ctx.params.idAssinante
            const idFilme = ctx.params.idFilme
            const nota = ctx.params.nota

            const existsAssinante = await ctx.call("v1.assinante-service.exists", { id: idAssinante })
            const existsFilme = await ctx.call("v1.catalogo-service.exists", { id: idFilme })

            if (!existsAssinante) {
                throw "O assinante informado não existe"
            }

            if (!existsFilme) {
                throw "O filme informado não existe"
            }

            return Avaliacao.create({
                idAssinante,
                idFilme,
                nota
            })
        }
    }

}