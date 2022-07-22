const Praca = require("../model/Praca")

module.exports = {
    name: "praca-service",
    version: 1,
    actions: {
        create: {
            params: {
                name: "string",
                street: "string",
                number: "number",
                city: "number",
                latitude: "string",
                longitude: "string",
                description: "string",
            },
            async handler(ctx) {

                if (ctx.params) {
                    if (ctx.params.name && ctx.params.street && ctx.params.number && ctx.params.city && ctx.params.latitude && ctx.params.longitude && ctx.params.description) {
                        return Praca.create({
                            name: ctx.params.name,
                            street: ctx.params.street,
                            number: ctx.params.number,
                            city: ctx.params.city,
                            latitude: ctx.params.latitude,
                            longitude: ctx.params.longitude,
                            description: ctx.params.description,
                        })
                    }
                }
                return false
            }
        },

        getAll: {
            async handler(ctx) {
                return await Praca.find()
            }
        },

        exists: {
            async handler(ctx) {
                if (ctx.params && ctx.params.id) {
                    return await Praca.exists({ _id: ctx.params.id })
                }
                return false
            }
        }
    }

}