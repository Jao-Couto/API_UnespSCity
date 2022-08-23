const Fair = require("../model/Fair");
const mongoose = require("mongoose");

module.exports = {
    name: "fair",
    version: 1,
    actions: {
        create: {
            async handler(ctx) {
                console.log("data has been received: ", ctx.params.cityid);
                const _id = mongoose.Types.ObjectId();
                const timeElapsed = Date.now();
                const today = new Date(timeElapsed);
                if (ctx.params) {
                    if (
                        ctx.params.cityid &&
                        ctx.params.name &&
                        ctx.params.imgsrc &&
                        ctx.params.operatingDays &&
                        ctx.params.location &&
                        ctx.params.openingHour &&
                        ctx.params.closingHour
                    ) {
                        return Fair.create({
                            _id,
                            cityid: ctx.params.cityid,
                            name: ctx.params.name,
                            imgsrc: ctx.params.imgsrc,
                            operatingDays: ctx.params.operatingDays,
                            location: ctx.params.location,
                            openingHour: ctx.params.openingHour,
                            closingHour: ctx.params.closingHour,
                            date: today,
                        });
                    }
                }
                return false;
            },
        },

        getAll: {
            async handler(ctx) {
                return await Fair.find();
            },
        },

        getByCityId: {
            async handler(ctx) {
                if (ctx.params && ctx.params.cityid) {
                    return await Fair.find({
                        // Esse find é igual no JS. Ele vai achar uma feira com o cityId
                        cityid: ctx.params.cityid, // Pelo que eu vi, o documento feira nao tem esse cityId como atributo
                    });
                }
                return false;
            },
        },

        delete: {
            async handler(ctx) {
                if (ctx.params && ctx.params.id) {
                    return await Fair.deleteOne({
                        _id: ctx.params.id,
                    });
                }
                return false;
            },
        },
    },
};
