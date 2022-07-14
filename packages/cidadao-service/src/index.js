"use strict";

const { ServiceBroker } = require("moleculer");
const DatabaseServices = require("./database/Database.ServiceTemplate.js");



const broker = new ServiceBroker({
    transporter: "TCP"
});



DatabaseServices.forEach((service) => {
    broker.createService(service);
});

broker.loadServices("./src/services");
broker.start().then(() => {
    broker.call("posts.update", { id: 2, title: "Modified post title" })
        .then(res => console.log("Post updated!"))
        .catch(err => console.error("Unable to update Post!", err));
    broker.repl()
})

