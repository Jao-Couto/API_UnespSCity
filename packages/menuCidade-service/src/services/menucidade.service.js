"use strict";

const Database = require("../adapters/Database");
const passwordHash = require('password-hash');

// Filters applied when searching for entities
// Elements correspond to the columns of the table
const Filters_MenuCidade = {
    full: ["id", "cityId", "menuId"],
    restricted: ["cityId"],
};

module.exports = {
    name: "menucidade-service",
    dependencies: [
        "menu-service",
        "submenu-service"
    ],
    actions: {

        create: {
            params: {
                cityId: "string",
                menuId: "string"
            },
            handler(ctx) {
                return this.DB_MenuCidade.insert(ctx, {
                    cityId: ctx.params.cityId,
                    menuId: ctx.params.menuId
                })
                    .then(() => {
                        console.log("MenuCidade Created: ", ctx.params.cityId);
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
                return this.DB_MenuCidade.find(ctx, {})
                    .then((res) => { console.log("Search Complete", res.data); return res.data })
                    .catch((err) => {
                        console.log("error: " + err);
                        return []
                    });
            }
        },

    },
    methods: {
    },
    created() {
        this.DB_MenuCidade = new Database("MenuCidade", Filters_MenuCidade.full);
    }
};
