const mongoose = require("mongoose");
const Adocao_Animais = require("../model/AdocaoAnimais");

module.exports = {
    name: "adocao-animais-service",
    version: 1,
    actions: {
        create: {
            params: {
                userId: "number",
                cityId: "number",
                street: "string",
                streetNumber: "number",
                referencePoint: "string",
                latitude: "number",
                longitude: "number",
                description: "string",
            },
            async handler(ctx) {
                const _id = mongoose.Types.ObjectId();
                const timeElapsed = Date.now();
                const today = new Date(timeElapsed);
                if (ctx.params) {
                    if (ctx.params.street && ctx.params.streetNumber && ctx.params.latitude && ctx.params.longitude && ctx.params.description && ctx.params.images) {
                        return Adocao_Animais.create({
                            _id,
                            userId: ctx.params.userId,
                            cityId: ctx.params.cityId,
                            street: ctx.params.street,
                            streetNumber: ctx.params.streetNumber,
                            referencePoint: ctx.params.referencePoint,
                            latitude: ctx.params.latitude,
                            longitude: ctx.params.longitude,
                            description: ctx.params.description,
                            images: ctx.params.images,
                            date: today,
                            isResolved: false
                        })
                    }
                }
                return false
            }
        },


        getAll: {
            async handler(ctx) {
                return await Adocao_Animais.find()
            }
        },

        getById: {
            async handler(ctx) {
                if (ctx.params && ctx.params.id) {
                    return await Adocao_Animais.find({ _id: ctx.params.id })
                }
                return false
            }
        },

        update: {
            params: {
                owner: "string",
                description: "string",
            },
            async handler(ctx) {
                if (ctx.params && ctx.params.id) {
                    return await Adocao_Animais.updateOne({ _id: ctx.params.id }, {
                        $set: {
                            owner: ctx.params.owner,
                            description: ctx.params.description,
                            images: ctx.params.images,
                        }
                    });
                }
                return false
            }
        },

        updateResolved: {
            async handler(ctx) {
                if (ctx.params && ctx.params.id) {
                    return await Adocao_Animais.updateOne({ _id: ctx.params.id }, { $set: { isResolved: true } });
                }
                return false
            }
        },

        delete: {
            async handler(ctx) {
                if (ctx.params && ctx.params.id) {
                    return await Adocao_Animais.deleteOne({ _id: ctx.params.id })
                }
                return false
            }
        }
    }
}