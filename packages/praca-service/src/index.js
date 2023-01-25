const { ServiceBroker } = require("moleculer")
const mongoose = require('mongoose')
const { SERVER } = require("../../../config")

const inicial = async () => {
    await mongoose.connect(SERVER)
    const db = mongoose.connection;
    db.on("error", (error) => console.error(error));
    db.once("open", () => console.log("Connected to MongoDB"));
    console.log("models", mongoose.modelNames());


    const broker = new ServiceBroker({
        transporter: "TCP"
    })

    broker.loadServices("./src/services");

    broker.start().then(() => {
        broker.repl()
    })
}

inicial()