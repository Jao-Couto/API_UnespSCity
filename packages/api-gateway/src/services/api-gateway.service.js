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
                    // Assistencia Social 
                    "GET /useful_contacts": "v1.useful-contacts-service.getByCity",
                    "POST /useful_contacts": "v1.useful-contacts-service.create",
                    "PUT /useful_contacts/:id": "v1.useful-contacts-service.update",
                    "DELETE /useful_contacts/:id": "v1.useful-contacts-service.delete",

                    // Conservação Urbana 
                    "GET /facilities_inspection": "v1.facilities-inspection-service.getAll",
                    "GET /facilities_inspection/:id": "v1.facilities-inspection-service.getById",
                    "POST /facilities_inspection": "v1.facilities-inspection-service.create",
                    "PUT /facilities_inspection/:id": "v1.facilities-inspection-service.update",
                    "PUT /facilities_inspection/update_resolved/:id": "v1.facilities-inspection-service.updateResolved",
                    "DELETE /facilities_inspection/:id": "v1.facilities-inspection-service.delete",

                    "GET /monument": "v1.fountains-monuments-service.getAll",
                    "GET /monument/:id": "v1.fountains-monuments-service.getById",
                    "POST /monument": "v1.fountains-monuments-service.create",
                    "PUT /monument/:id": "v1.fountains-monuments-service.update",
                    "PUT /monument/update_resolved/:id": "v1.fountains-monuments-service.updateResolved",
                    "DELETE /monument/:id": "v1.fountains-monuments-service.delete",

                    "GET /paviment": "v1.paviment-service.getAll",
                    "GET /paviment/:id": "v1.paviment-service.getById",
                    "POST /create_paviment": "v1.paviment-service.create",
                    "PUT /paviment/:id": "v1.paviment-service.update",
                    "PUT /paviment/update_resolved/:id": "v1.paviment-service.updateResolved",
                    "DELETE /del_paviment/:id": "v1.paviment-service.delete",

                    "GET /public_roads": "v1.public-roads-service.getAll",
                    "GET /public_roads/:id": "v1.public-roads-service.getById",
                    "POST /public_roads": "v1.public-roads-service.create",
                    "PUT /public_roads/:id": "v1.public-roads-service.update",
                    "PUT /public_roads/update_resolved/:id": "v1.public-roads-service.updateResolved",
                    "DELETE /public_roads/:id": "v1.public-roads-service.delete",

                    "GET /get_all_street_lighting": "v1.street-lighting-service.getAll",
                    "GET /street_lighting/:id": "v1.street-lighting-service.getById",
                    "POST /create_street_lighting": "v1.street-lighting-service.create",
                    "PUT /street_lighting/:id": "v1.street-lighting-service.update",
                    "PUT /street_lighting/update_resolved/:id": "v1.street-lighting-service.updateResolved",
                    "DELETE /del_street_lighting/:id": "v1.street-lighting-service.delete",

                    "POST /start_temperature": "v1.temperature-service.start",
                    "POST /stop_temperature": "v1.temperature-service.stop",

                    // Botão do Pânico
                    "GET /get_all_panic_button": "v1.panic-button-service.getAll",
                    "GET /panic_button": "v1.panic-button-service.getById",
                    "POST /panic_button/:id": "v1.panic-button-service.create",
                    "POST /call_panic_button": "v1.panic-button-service.callPanicButton",
                    "PUT /panic_button/:id": "v1.panic-button-service.update",
                    "DELETE /panic_button/:id": "v1.panic-button-service.delete",

                    // Meio Ambiente 
                    "GET /public_area_adoption": "v1.public-area-adoption-service.getAll",
                    "POST /public_area_adoption": "v1.public-area-adoption-service.create",
                    "PUT /public_area_adoption/:id": "v1.public-area-adoption-service.update",
                    "PUT /public_area_adoption/update_adopted/:id": "v1.public-area-adoption-service.updateResolved",
                    "DELETE /public_area_adoption/:id": "v1.public-area-adoption-service.delete",

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

                    "GET /remocao_animais_mortos": "v1.removal-deadanimals.getAll",
                    "GET /remocao_animais_mortos/:id": "v1.removal-deadanimals.getById",
                    "POST /remocao_animais_mortos": "v1.removal-deadanimals.create",
                    "PUT /remocao_animais_mortos/:id": "v1.removal-deadanimals.update",
                    "PUT /remocao_animais_mortos/update_resolved/:id": "v1.removal-deadanimals.updateResolved",
                    "DELETE /remocao_animais_mortos/:id": "v1.removal-deadanimals.delete",

                    "GET /remove-trash": "v1.remove-trash.getAll",
                    "GET /remove-trash/:id": "v1.remove-trash.getById",
                    "POST /remove-trash": "v1.remove-trash.create",
                    "PUT /remove-trash/:id": "v1.remove-trash.update",
                    "PUT /remove-trash/update_resolved/:id": "v1.remove-trash.updateResolved",
                    "DELETE /remove-trash/:id": "v1.remove-trash.delete",

                    "GET /radar_dengue": "v1.radar-dengue-service.getAll",
                    "GET /radar_dengue/:id": "v1.radar-dengue-service.getById",
                    "POST /radar_dengue": "v1.radar-dengue-service.create",
                    "PUT /radar_dengue/:id": "v1.radar-dengue-service.update",
                    "PUT /radar_dengue/update_resolved/:id": "v1.radar-dengue-service.updateResolved",
                    "DELETE /radar_dengue/:id": "v1.radar-dengue-service.delete",

                    "GET /tumulos": "v1.tumulos-service.getAll",
                    "GET /tumulos/:id": "v1.tumulos-service.getById",
                    "POST /tumulos": "v1.tumulos-service.create",
                    "PUT /tumulos/:id": "v1.tumulos-service.update",
                    "DELETE /tumulos/:id": "v1.tumulos-service.delete",

                    "POST /catalogo": "v1.catalogo-service.create",
                    "GET /catalogo": "v1.catalogo-service.list",

                    "POST /cidade": "cidade-service.create",
                    "GET /cidade": "cidade-service.getAll",

                    "POST /cidadao": "cidadao-service.create",
                    "GET /cidadao": "cidadao-service.getAll",
                    "PUT /update_cidadao": "cidadao-service.updatePanicButton",
                    "POST /cidadao/login": "cidadao-service.login",

                    "POST /menu": "menu-service.create",
                    "GET /menu": "menu-service.getAll",

                    "POST /menucidade": "menucidade-service.create",
                    "GET /menucidade": "menucidade-service.getMenuCidade",
                    "GET /menucidade/submenu/:cityId": "menucidade-service.getSubMenu",


                    "POST /submenu": "submenu-service.create",
                    "GET /submenu": "submenu-service.getSubMenu",

                    "POST /praca": "praca-service.create",
                    "GET /praca": "praca-service.getAll",
                    "GET /praca/markers": "praca-service.getAllMarkers",
                    "PUT /praca/:id": "praca-service.update",
                    "PUT /praca/update_resolved/:id": "praca-service.updateResolved",
                    "DELETE /praca/:id": "praca-service.delete",

                    "POST /parques": "parques-service.create",
                    "GET /parques": "parques-service.getAll",
                    "GET /parques/markers": "parques-service.getAllMarkers",
                    "PUT /parques/:id": "parques-service.update",
                    "PUT /parques/update_resolved/:id": "parques-service.updateResolved",
                    "DELETE /parques/:id": "parques-service.delete",

                    "POST /rurais": "rurais-service.create",
                    "GET /rurais": "rurais-service.getAll",
                    "GET /rurais/markers": "rurais-service.getAllMarkers",
                    "PUT /rurais/:id": "rurais-service.update",
                    "PUT /rurais/update_resolved/:id": "rurais-service.updateResolved",
                    "DELETE /rurais/:id": "rurais-service.delete",

                    "POST /ambientes": "ambientes-service.create",
                    "GET /ambientes": "ambientes-service.getAll",
                    "GET /ambientes/markers": "ambientes-service.getAllMarkers",
                    "PUT /ambientes/:id": "ambientes-service.update",
                    "PUT /ambientes/update_resolved/:id": "ambientes-service.updateResolved",
                    "DELETE /ambientes/:id": "ambientes-service.delete",

                    "POST /anticorrupcao": "anticorrupcao-service.create",
                    "GET /anticorrupcao": "anticorrupcao-service.getAll",
                    "GET /anticorrupcao/markers": "anticorrupcao-service.getAllMarkers",
                    "PUT /anticorrupcao/:id": "anticorrupcao-service.update",
                    "PUT /anticorrupcao/update_resolved/:id": "anticorrupcao-service.updateResolved",
                    "DELETE /anticorrupcao/:id": "anticorrupcao-service.delete",

                    "POST /gestores": "gestores-service.create",
                    "GET /gestores": "gestores-service.getAll",
                    "GET /gestores/markers": "gestores-service.getAllMarkers",
                    "PUT /gestores/:id": "gestores-service.update",
                    "PUT /gestores/update_resolved/:id": "gestores-service.updateResolved",
                    "DELETE /gestores/:id": "gestores-service.delete",

                    "POST /comercial": "comercial-service.create",
                    "GET /comercial": "comercial-service.getAll",
                    "GET /comercial/markers": "comercial-service.getAllMarkers",
                    "PUT /comercial/:id": "comercial-service.update",
                    "PUT /comercial/update_resolved/:id": "comercial-service.updateResolved",
                    "DELETE /comercial/:id": "comercial-service.delete",

                    "POST /noticias": "noticias-service.create",
                    "GET /noticias": "noticias-service.getAll",
                    "GET /noticias/markers": "noticias-service.getAllMarkers",
                    "PUT /noticias/:id": "noticias-service.update",
                    "PUT /noticias/update_resolved/:id": "noticias-service.updateResolved",
                    "DELETE /noticias/:id": "noticias-service.delete",

                    "POST /ofertas": "ofertas-service.create",
                    "GET /ofertas": "ofertas-service.getAll",
                    "GET /ofertas/markers": "ofertas-service.getAllMarkers",
                    "PUT /ofertas/:id": "ofertas-service.update",
                    "PUT /ofertas/update_resolved/:id": "ofertas-service.updateResolved",
                    "DELETE /ofertas/:id": "ofertas-service.delete",

                    "POST /programacao": "programacao-service.create",
                    "GET /programacao": "programacao-service.getAll",
                    "GET /programacao/markers": "programacao-service.getAllMarkers",
                    "PUT /programacao/:id": "programacao-service.update",
                    "PUT /programacao/update_resolved/:id": "programacao-service.updateResolved",
                    "DELETE /programacao/:id": "programacao-service.delete",

                    "POST /propostas": "propostas-service.create",
                    "GET /propostas": "propostas-service.getAll",
                    "GET /propostas/markers": "propostas-service.getAllMarkers",
                    "PUT /propostas/:id": "propostas-service.update",
                    "PUT /propostas/update_resolved/:id": "propostas-service.updateResolved",
                    "DELETE /propostas/:id": "propostas-service.delete",

                    "POST /sugestoes": "sugestoes-service.create",
                    "GET /sugestoes": "sugestoes-service.getAll",
                    "GET /sugestoes/markers": "sugestoes-service.getAllMarkers",
                    "PUT /sugestoes/:id": "sugestoes-service.update",
                    "PUT /sugestoes/update_resolved/:id": "sugestoes-service.updateResolved",
                    "DELETE /sugestoes/:id": "sugestoes-service.delete",

                    "POST /image": "image-service.create",
                    "GET /image": "image-service.getAll",
                },
                cors: {
                    origin: ["http://localhost:3001", "https://localhost:4000"],
                    methods: ["GET", "OPTIONS", "POST", "PUT", "DELETE"],
                    credentials: true
                },
            }
        ]
    }


}
