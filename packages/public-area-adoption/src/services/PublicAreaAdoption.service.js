const PublicAreaAdoption = require("../model/PublicAreaAdoption")

module.exports = {
    name: "public-area-adoption-service",
    version: 1,
    actions: {
        create: {
            params: {
                name: 'string',
                guardian: "string",
                userId: "number",
                street: "string",
                streetNumber: "number",
                referencePoint: "string",
                cityId: "number",
                latitude: "number",
                longitude: "number",
                description: "string",
                images: ["string"]
            },
            async handler(ctx) {
                const timeElapsed = Date.now();
                const today = new Date(timeElapsed);
                if (ctx.params) {
                    if (ctx.params.cityId
                        && ctx.params.name
                        && ctx.params.street
                        && ctx.params.streetNumber
                        && ctx.params.latitude
                        && ctx.params.longitude
                        && ctx.params.description
                        && ctx.params.guardian
                        && ctx.params.images
                    ) {
                        return PublicAreaAdoption.create({
                            cityId: ctx.params.cityId,
                            name: ctx.params.name,
                            street: ctx.params.street,
                            streetNumber: ctx.params.streetNumber,
                            latitude: ctx.params.latitude,
                            longitude: ctx.params.longitude,
                            description: ctx.params.description,
                            guardian: ctx.params.guardian,
                            images: ctx.params.images,
                            isAdopted: false,
                            date: today
                        })
                    }
                }
                return false
            }
        },

        getAll: {
            async handler(ctx) {
                return await PublicAreaAdoption.find()
            }
        },

        update: {
            async handler(ctx) {
                if (ctx.params && ctx.params.id) {
                    return await PublicAreaAdoption.updateOne({ _id: ctx.params.id }, {
                        $set: {
                            idCity: ctx.params.idCity,
                            name: ctx.params.name,
                            street: ctx.params.street,
                            streetNumber: ctx.params.streetNumber,
                            latitude: ctx.params.latitude,
                            longitude: ctx.params.longitude,
                            description: ctx.params.description,
                            guardian: ctx.params.guardian,
                            images: ctx.params.images,
                        }
                    });
                }
                return false
            }
        },

        updateAdopted: {
            async handler(ctx) {
                if (ctx.params && ctx.params.id) {
                    return await PublicAreaAdoption.updateOne({ _id: ctx.params.id }, { $set: { isAdopted: true } });
                }
                return false
            }
        },

        delete: {
            async handler(ctx) {
                if (ctx.params && ctx.params.id) {
                    return await PublicAreaAdoption.deleteOne({ _id: ctx.params.id })
                }
                return false
            }
        }
    }

}