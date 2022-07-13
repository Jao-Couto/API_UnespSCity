"use strict";

const { ServiceBroker } = require("moleculer");
const DatabaseServices = require("./database/Database.ServiceTemplate.js");



const broker = new ServiceBroker({ logger: console });



DatabaseServices.forEach((service) => {
    broker.createService(service);
});

broker.loadServices("./src/services");
broker.start().then(() => {
    broker.repl()
})

