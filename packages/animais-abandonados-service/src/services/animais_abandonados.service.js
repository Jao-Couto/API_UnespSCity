const mongoose = require("mongoose");
const Animais_Abandonados = require("../model/AnimaisAbandonados");

module.exports = {
    name: "animais-abandonados-service",
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
                lastTimeSeen: "string",
            },
            async handler(ctx) {
                const _id = mongoose.Types.ObjectId();
                const timeElapsed = Date.now();
                const today = new Date(timeElapsed);
                if (ctx.params) {
                    if (ctx.params.lastTimeSeen && ctx.params.street && ctx.params.streetNumber && ctx.params.latitude && ctx.params.longitude && ctx.params.description && ctx.params.images) {
                        return Animais_Abandonados.create({
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
                            isResolved: false,
                            lastTimeSeen: ctx.params.lastTimeSeen
                        })
                    }
                }
                return false
            }
        },


        getAll: {
            async handler(ctx) {
                return await Animais_Abandonados.find()
            }
        },

        getById: {
            async handler(ctx) {
                if (ctx.params && ctx.params.id) {
                    return await Animais_Abandonados.find({ _id: ctx.params.id })
                }
                return false
            }
        },

        update: {
            params: {
                street: "string",
                streetNumber: "number",
                referencePoint: "string",
                latitude: "number",
                longitude: "number",
                description: "string",
            },
            async handler(ctx) {
                if (ctx.params && ctx.params.id) {
                    return await Animais_Abandonados.updateOne({ _id: ctx.params.id }, {
                        $set: {
                            street: ctx.params.street,
                            streetNumber: ctx.params.streetNumber,
                            referencePoint: ctx.params.referencePoint,
                            latitude: ctx.params.latitude,
                            longitude: ctx.params.longitude,
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
                    return await Animais_Abandonados.updateOne({ _id: ctx.params.id }, { $set: { isResolved: true } });
                }
                return false
            }
        },

        delete: {
            async handler(ctx) {
                if (ctx.params && ctx.params.id) {
                    return await Animais_Abandonados.deleteOne({ _id: ctx.params.id })
                }
                return false
            }
        }
    }
}