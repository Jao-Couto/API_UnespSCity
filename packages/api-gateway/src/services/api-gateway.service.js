const ApiService = require("moleculer-web")

module.exports = {
    name: "api-gateway",
    version: 1,
    mixins: [ApiService],
    settings: {
        cors: {
            methods: ["DELETE", "GET", "HEAD", "OPTIONS", "PATCH", "POST", "PUT"],
            origin: "*",
        },
        routes: [
            {
                path: "/api",
                whitelist: ["**"],
                aliases: {
                    "POST /catalogo": "v1.catalogo-service.create",
                    "GET /catalogo": "v1.catalogo-service.list",

                    "POST /cidade": "cidade-service.create",
                    "GET /cidade": "cidade-service.getAll",

                    "POST /cidadao": "cidadao-service.create",
                    "GET /cidadao": "cidadao-service.getAll",
                    "POST /cidadao/login": "cidadao-service.login",

                    "POST /menu": "menu-service.create",
                    "GET /menu": "menu-service.getAll",

                    "POST /menucidade": "menucidade-service.create",
                    "GET /menucidade": "menucidade-service.getMenuCidade",

                    "POST /submenu": "submenu-service.create",
                    "GET /submenu": "submenu-service.getSubMenu",

                    "POST /praca": "praca-service.create",
                    "GET /praca": "praca-service.getAll",
                },
                cors: {
                    origin: ["http://localhost:3000", "https://localhost:4000"],
                    methods: ["GET", "OPTIONS", "POST"],
                    credentials: true
                },
            }
        ]
    }


}