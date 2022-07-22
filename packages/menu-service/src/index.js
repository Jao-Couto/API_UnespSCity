"use strict";

const { ServiceBroker } = require("moleculer");
const DatabaseServices = require("./database/Database.ServiceTemplate.js");

const broker = new ServiceBroker({
    transporter: "TCP"
})


DatabaseServices.forEach((service) => {
    broker.createService(service);
});

broker.loadServices("./src/services");

broker.start().then(() => {
    broker.call("menu-service.create", { name: "Conservação Urbana" });
    broker.call("menu-service.create", { name: "Conservação Rural/Áreas Verdes" });
    broker.call("menu-service.create", { name: "Remoção de Detritos" });
    broker.call("menu-service.create", { name: "Vigilância Sanitária" });
    broker.call("menu-service.create", { name: "Controle de Pragas" });
    broker.call("menu-service.create", { name: "Animais Dométicos" });
    broker.call("menu-service.create", { name: "Meio Ambiente" });
    broker.call("menu-service.create", { name: "Fauna e Flora" });
    broker.call("menu-service.create", { name: "Assistência Social" });
    broker.call("menu-service.create", { name: "Famílias Carentes" });
    broker.call("menu-service.create", { name: "Segurança e Defesa Civil" });
    broker.call("menu-service.create", { name: "Botão de Pânico" });
    broker.call("menu-service.create", { name: "Administração Pública" });
    broker.call("menu-service.create", { name: "Notificação e Comunicação" });
    broker.call("menu-service.create", { name: "Sensoriamento Móvel Participativo" });
    broker.call("menu-service.create", { name: "Associação Comercial" });
    broker.repl();
})

