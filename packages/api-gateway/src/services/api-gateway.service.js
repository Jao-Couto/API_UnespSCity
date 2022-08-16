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
                    "GET /adocao_animais": "v1.adocao-animais-service.getAll",
                    "GET /adocao_animais/:id": "v1.adocao-animais-service.getById",
                    "POST /adocao_animais": "v1.adocao-animais-service.create",
                    "PUT /adocao_animais/:id": "v1.adocao-animais-service.update",
                    "PUT /adocao_animais/update_resolved/:id": "v1.adocao-animais-service.updateResolved",
                    "DELETE /adocao_animais/:id": "v1.adocao-animais-service.delete",

                    "GET /animais_abandonados": "v1.animais-abandonados-service.getAll",
                    "GET /animais_abandonados/:id": "v1.animais-abandonados-service.getById",
                    "POST /animais_abandonados": "v1.animais-abandonados-service.create",
                    "PUT /animais_abandonados/:id": "v1.animais-abandonados-service.update",
                    "PUT /animais_abandonados/update_resolved/:id": "v1.animais-abandonados-service.updateResolved",
                    "DELETE /animais_abandonados/:id": "v1.animais-abandonados-service.delete",

                    "GET /animais_perdidos": "v1.animais-perdidos-service.getAll",
                    "GET /animais_perdidos/:id": "v1.animais-perdidos-service.getById",
                    "POST /animais_perdidos": "v1.animais-perdidos-service.create",
                    "PUT /animais_perdidos/:id": "v1.animais-perdidos-service.update",
                    "PUT /animais_perdidos/update_resolved/:id": "v1.animais-perdidos-service.updateResolved",
                    "DELETE /animais_perdidos/:id": "v1.animais-abandonados-perdidos.delete",

                    "GET /animais_sinantropicos": "v1.animais-sinantropicos-service.getAll",
                    "GET /animais_sinantropicos/:id": "v1.animais-sinantropicos-service.getById",
                    "POST /animais_sinantropicos": "v1.animais-sinantropicos-service.create",
                    "PUT /animais_sinantropicos/:id": "v1.animais-sinantropicos-service.update",
                    "PUT /animais_sinantropicos/update_resolved/:id": "v1.animais-sinantropicos-service.updateResolved",
                    "DELETE /animais_sinantropicos/:id": "v1.animais-sinantropicos-service.delete",

                    "POST /catalogo": "v1.catalogo-service.create",
                    "GET /catalogo": "v1.catalogo-service.list",

                    "POST /cidade": "cidade-service.create",
                    "GET /cidade": "cidade-service.getAll",

                    "POST /cidadao": "cidadao-service.create",
                    "GET /cidadao": "cidadao-service.getAll",
                    "POST /cidadao/login": "cidadao-service.login",

                    "GET /foco_escorpiao": "v1.foco-escorpiao-service.getAll",
                    "GET /foco_escorpiao/:id": "v1.foco-escorpiao-service.getById",
                    "POST /foco_escorpiao": "v1.foco-escorpiao-service.create",
                    "PUT /foco_escorpiao/:id": "v1.foco-escorpiao-service.update",
                    "PUT /foco_escorpiao/update_resolved/:id": "v1.foco-escorpiao-service.updateResolved",
                    "DELETE /foco_escorpiao/:id": "v1.foco-escorpiao-service.delete",

                    "GET /insetos_roedores_caramujos": "v1.insetos-roedores-caramujos-service.getAll",
                    "GET /insetos_roedores_caramujos/:id": "v1.insetos-roedores-caramujos-service.getById",
                    "POST /insetos_roedores_caramujos": "v1.insetos-roedores-caramujos-service.create",
                    "PUT /insetos_roedores_caramujos/:id": "v1.insetos-roedores-caramujos-service.update",
                    "PUT /insetos_roedores_caramujos/update_resolved/:id": "v1.insetos-roedores-caramujos-service.updateResolved",
                    "DELETE /insetos_roedores_caramujos/:id": "v1.insetos-roedores-caramujos-service.delete",

                    "GET /leishmaniose": "v1.leishmaniose-service.getAll",
                    "GET /leishmaniose/:id": "v1.leishmaniose-service.getById",
                    "POST /leishmaniose": "v1.leishmaniose-service.create",
                    "PUT /leishmaniose/:id": "v1.leishmaniose-service.update",
                    "PUT /leishmaniose/update_resolved/:id": "v1.leishmaniose-service.updateResolved",
                    "DELETE /leishmaniose/:id": "v1.leishmaniose-service.delete",

                    "GET /limpeza_piscinas": "v1.limpeza-piscinas-service.getAll",
                    "GET /limpeza_piscinas/:id": "v1.limpeza-piscinas-service.getById",
                    "POST /limpeza_piscinas": "v1.limpeza-piscinas-service.create",
                    "PUT /limpeza_piscinas/:id": "v1.limpeza-piscinas-service.update",
                    "PUT /limpeza_piscinas/update_resolved/:id": "v1.limpeza-piscinas-service.updateResolved",
                    "DELETE /limpeza_piscinas/:id": "v1.limpeza-piscinas-service.delete",

                    "GET /limpeza_terreno": "v1.limpeza-terreno-service.getAll",
                    "GET /limpeza_terreno/:id": "v1.limpeza-terreno-service.getById",
                    "POST /limpeza_terreno": "v1.limpeza-terreno-service.create",
                    "PUT /limpeza_terreno/:id": "v1.limpeza-terreno-service.update",
                    "PUT /limpeza_terreno/update_resolved/:id": "v1.limpeza-terreno-service.updateResolved",
                    "DELETE /limpeza_terreno/:id": "v1.limpeza-terreno-service.delete",

                    "GET /locais_uteis": "v1.locais-uteis-service.getAll",
                    "GET /locais_uteis/:id": "v1.locais-uteis-service.getById",
                    "POST /locais_uteis": "v1.locais-uteiso-service.create",
                    "PUT /locais_uteis/:id": "v1.locais-uteis-service.update",
                    "DELETE /locais_uteis/:id": "v1.locais-uteis-service.delete",

                    "GET /maus_tratos_animais": "v1.maus-tratos-animais-service.getAll",
                    "GET /maus_tratos_animais/:id": "v1.maus-tratos-animais-service.getById",
                    "POST /maus_tratos_animais": "v1.maus-tratos-animais-service.create",
                    "PUT /maus_tratos_animais/:id": "v1.maus-tratos-animais-service.update",
                    "PUT /maus_tratos_animais/update_resolved/:id": "v1.maus-tratos-animais-service.updateResolved",
                    "DELETE /maus_tratos_animais/:id": "v1.maus-tratos-animais-service.delete",

                    "POST /menu": "menu-service.create",
                    "GET /menu": "menu-service.getAll",

                    "POST /menucidade": "menucidade-service.create",
                    "GET /menucidade": "menucidade-service.getMenuCidade",

                    "POST /praca": "praca-service.create",
                    "GET /praca": "praca-service.getAll",

                    "GET /radar_dengue": "v1.radar-dengue-service.getAll",
                    "GET /radar_dengue/:id": "v1.radar-dengue-service.getById",
                    "POST /radar_dengue": "v1.radar-dengue-service.create",
                    "PUT /radar_dengue/:id": "v1.radar-dengue-service.update",
                    "PUT /radar_dengue/update_resolved/:id": "v1.radar-dengue-service.updateResolved",
                    "DELETE /radar_dengue/:id": "v1.radar-dengue-service.delete",

                    "POST /submenu": "submenu-service.create",
                    "GET /submenu": "submenu-service.getSubMenu",

                    "GET /tumulos": "v1.tumulos-service.getAll",
                    "GET /tumulos/:id": "v1.tumulos-service.getById",
                    "POST /tumulos": "v1.tumulos-service.create",
                    "PUT /tumulos/:id": "v1.tumulos-service.update",
                    "DELETE /tumulos/:id": "v1.tumulos-service.delete",
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