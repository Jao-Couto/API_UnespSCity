"use strict";

const Database = require("../adapters/Database");
const passwordHash = require('password-hash');

// Filters applied when searching for entities
// Elements correspond to the columns of the table
const Filters_Cidadadao = {
    full: ["id", "name"],
    restricted: ["name"],
};

module.exports = {
    name: "cidades",

    actions: {

        create: {
            params: {
                name: "string"
            },
            handler(ctx) {
                return this.DB_Cidades.insert(ctx, {
                    name: ctx.params.name
                })
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
                return this.DB_Cidades.find(ctx, {})
                    .then((res) => console.log("Search Complete", res.data))
                    .catch((err) => {
                        console.log("error: " + err);
                    });
            }
        },

    },
    methods: {
    },
    created() {
        this.DB_Cidades = new Database("Cidades", Filters_Cidadadao.full);
    }
};
