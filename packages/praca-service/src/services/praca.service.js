const Praca = require("../model/Praca")


module.exports = {
    name: "praca-service",
    actions: {
        create: {
            params: {
                userId: "number",
                street: "string",
                streetNumber: "number",
                referencePoint: "string",
                cityId: "number",
                latitude: "string",
                longitude: "string",
                description: "string",

            },
            async handler(ctx) {
                return Praca.create({
                    userId: ctx.params.userId,
                    street: ctx.params.street,
                    streetNumber: ctx.params.streetNumber,
                    referencePoint: ctx.params.referencePoint,
                    cityId: ctx.params.cityId,
                    latitude: ctx.params.latitude,
                    longitude: ctx.params.longitude,
                    description: ctx.params.description,
                    isResolved: false
                })
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
        },
    },
}