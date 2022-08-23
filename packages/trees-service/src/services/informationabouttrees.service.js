const InformationAboutTrees = require("../model/InformationAboutTrees");
const mongoose = require("mongoose");

module.exports = {
    name: "information-about-trees",
    version: 1,
    actions: {
        create: {
            async handler(ctx) {
                if (ctx.params) {
                    if (
                        ctx.params.cityid &&
                        ctx.params.userid &&
                        ctx.params.name &&
                        ctx.params.images &&
                        ctx.params.description &&
                        ctx.params.latitude &&
                        ctx.params.longitude &&
                        ctx.params.street &&
                        ctx.params.streetNumber &&
                        ctx.params.referencePoint
                    ) {
                        return InformationAboutTrees.create({
                            cityid: ctx.params.cityid,
                            userid: ctx.params.userid,
                            name: ctx.params.name,
                            images: ctx.params.images,
                            description: ctx.params.description,
                            latitude: ctx.params.latitude,
                            longitude: ctx.params.longitude,
                            street: ctx.params.street,
                            streerNumber: ctx.params.streerNumber,
                            referencePoint: ctx.params.referencePoint
                        });
                    }
                }
                return false;
            },
        },

        getAll: {
            async handler(ctx) {
                return await InformationAboutTrees.find();
            },
        },

        getByCityId: {
            async handler(ctx) {
                if (ctx.params && ctx.params.cityid) {
                    return await InformationAboutTrees.find({
                        cityid: ctx.params.cityid,
                    });
                }
                return false;
            },
        },

        delete: {
            async handler(ctx) {
                if (ctx.params && ctx.params.id) {
                    return await InformationAboutTrees.deleteOne({
                        _id: ctx.params.id,
                    });
                }
                return false;
            },
        },
    },
};
