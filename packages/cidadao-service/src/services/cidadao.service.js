"use strict";

const Database = require("../adapters/Database");
const passwordHash = require('password-hash');
var verifyPassword = require('../../node_modules/password-hash/lib/password-hash');

// Filters applied when searching for entities
// Elements correspond to the columns of the table
const Filters_Cidadadao = {
    full: ["id", "name", "password", "email", "mobilePhone", "cityId", "panicButton", "isAdmin"],
    restricted: ["name"],
};

module.exports = {
    name: "cidadao-service",

    actions: {

        create: {
            params: {
                name: "string",
                password: "string",
                email: "string",
                mobilePhone: "string",
                cityId: "number",
                panicButton: "boolean"
            },
            handler(ctx) {
                return this.generateHash(ctx.params.password)
                    .then((res) => this.DB_Cidadaos.insert(ctx, {
                        name: ctx.params.name,
                        password: res,
                        email: ctx.params.email,
                        mobilePhone: ctx.params.mobilePhone,
                        cityId: ctx.params.cityId,
                        panicButton: ctx.params.panicButton == ctx.params.panicButton,
                        isAdmin: ctx.params.isAdmin == false,
                    }))
                    .then(() => {
                        console.log("User Account Created", ctx.params.name);
                        return "ok"
                    })
                    .catch((err) => {
                        console.log(err);
                        return "error"
                    });
            }
        },

        getAll: {
            params: {

            },
            handler(ctx) {
                return this.DB_Cidadaos.find(ctx, {})
                    .then((res) => {
                        console.log("Search Complete", res.data);
                        return res.data
                    })
                    .catch((err) => {
                        console.log("error: " + err);
                        return []
                    });
            }
        },

        getOne: {
            params: {
                userId: "string"
            },
            handler(ctx) {
                return this.DB_Cidadaos.findOne(ctx, { query: { id: ctx.params.userId } })
                    .then((res) => {
                        console.log("Search Complete", res.data);
                        return res.data
                    })
                    .catch((err) => {
                        console.log("error: " + err);
                        return []
                    });
            }
        },

        updateOne: {
            params: {
                id: "string",
                name: "string",
                email: "string",
                mobilePhone: "string",
                cityId: "number",
                panicButton: "boolean"
            },
            async handler(ctx) {
                if (ctx.params) {
                    return await this.DB_Cidadaos.updateById(ctx, ctx.params.id, {
                        name: ctx.params.name,
                        email: ctx.params.email,
                        mobilePhone: ctx.params.mobilePhone,
                        cityId: ctx.params.cityId,
                        panicButton: ctx.params.panicButton == ctx.params.panicButton
                    });
                }
                return false
            }
        },

        updatePanicButton: {
            params: {
                id: "string",
                panicButton: "boolean"
            },
            async handler(ctx) {
                if (ctx.params) {
                    return await this.DB_Cidadaos.updateById(ctx, ctx.params.id, { panicButton: ctx.params.panicButton });
                }
                return false
            }
        },

        login: {
            params: {
                email: "string",
                password: "string",
            },
            async handler(ctx) {
                const user = await this.DB_Cidadaos.findOne(ctx, {
                    query: {
                        email: ctx.params.email,
                    }
                });
                const verifyPass = verifyPassword.verify(ctx.params.password, user.data.password)


                if (verifyPass) {

                    user.data.token = user.data.password.substring(user.data.password.length - 20)
                    delete user.data.password
                    return {
                        status: 200,
                        data: user.data
                    }
                }
                return {
                    status: 400,
                    error: "err"
                }
            }
        },

    },
    methods: {
        generateHash(value) {
            return Promise.resolve(passwordHash.generate(value, { algorithm: 'sha256' }))
                .then((res) => {
                    console.log("Password Encrypted", res)
                    return res
                });
        },
    },
    created() {
        this.DB_Cidadaos = new Database("Cidadao", Filters_Cidadadao.full);
    }
};
