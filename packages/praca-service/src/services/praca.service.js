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
                latitude: "number",
                longitude: "number",
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
                    images: [ctx.params.images],
                    isResolved: false,
                    history: []
                })
            }
        },

        getAll: {
            async handler(ctx) {
                return await Praca.find()
            }
        },

        getById: {
            params: {
                id: "string",
            },
            async handler(ctx) {
                return await Praca.find({ _id: ctx.params.id })
            }
        },

        getAllMarkers: {
            async handler(ctx) {
                return await Praca.find({ isResolved: false, cityId: ctx.params.cityId }, "latitude longitude date")
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

        update: {
            async handler(ctx) {
                if (ctx.params && ctx.params.id) {
                    return await Praca.updateOne({ _id: ctx.params.id }, {
                        $set: {
                            idCity: ctx.params.idCity,
                            name: ctx.params.name,
                            street: ctx.params.street,
                            streetNumber: ctx.params.streetNumber,
                            latitude: ctx.params.latitude,
                            longitude: ctx.params.longitude,
                            description: ctx.params.description,
                            images: ctx.params.images
                        }
                    });
                }
                return false
            }
        },
        updateResolved: {
            async handler(ctx) {
                if (ctx.params && ctx.params.id) {
                    return await Praca.updateOne({ _id: ctx.params.id }, { $set: { isResolved: true } });
                }
                return false
            }
        },

        addHistory: {
            params: {
                id: "string",
                userId: "number",
                description: "string"
            },
            async handler(ctx) {
                const timeElapsed = Date.now();
                const today = new Date(timeElapsed);
                const userName = await ctx.call("cidadao-service.getOne", { userId: ctx.params.userId + "" });
                return await Praca.updateOne({ _id: ctx.params.id }, {
                    $push: {
                        history: {
                            userId: ctx.params.userId,
                            userName: userName.name,
                            description: ctx.params.description,
                            date: today
                        }
                    }
                });
            }
        },

        delete: {
            async handler(ctx) {
                if (ctx.params && ctx.params.id) {
                    return await Praca.deleteOne({ _id: ctx.params.id })
                }
                return false
            }
        }
    },
}