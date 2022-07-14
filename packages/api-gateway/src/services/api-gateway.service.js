const ApiService = require("moleculer-web")

module.exports = {
    name: "api-gateway",
    version: 1,
    mixins: [ApiService],
    settings: {
        routes: [
            {
                path: "/api",
                aliases: {
                    "POST /catalogo": "v1.catalogo-service.create",
                    "GET /catalogo": "v1.catalogo-service.list",

                    "POST /cidade": "cidade-service.create",
                    "GET /cidade": "cidade-service.getAll",
                    "POST /cidadao": "cidadao-service.create",
                    "GET /cidadao": "cidadao-service.getAll",
                    "POST /menu": "menu-service.create",
                    "GET /menu": "menu-service.getAll",
                    "POST /menucidade": "menucidade-service.create",
                    "GET /menucidade": "menucidade-service.getAll",
                    "POST /submenu": "submenu-service.create",
                    "GET /submenu": "submenu-service.getAll",
                }
            }
        ]
    }

}