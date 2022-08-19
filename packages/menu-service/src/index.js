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

broker.start().then(async () => {
    await broker.call("menu-service.create", { name: "Conservação Urbana", logo: 'https://unesp-s-city.s3.sa-east-1.amazonaws.com/icones/home_conservacao_urbana.png', subTitle: 'Itens' });
    await broker.call("menu-service.create", { name: "Conservação Rural/Áreas Verdes", logo: 'https://unesp-s-city.s3.sa-east-1.amazonaws.com/icones/home_conservacao_rural.png', subTitle: 'Itens' });
    await broker.call("menu-service.create", { name: "Remoção de Detritos", logo: 'https://unesp-s-city.s3.sa-east-1.amazonaws.com/icones/home_remocao_detritos.png', subTitle: 'Itens' });
    await broker.call("menu-service.create", { name: "Vigilância Sanitária", logo: 'https://unesp-s-city.s3.sa-east-1.amazonaws.com/icones/home_vigilancia_sanitaria.png', subTitle: 'Itens' });
    await broker.call("menu-service.create", { name: "Controle de Pragas", logo: 'https://unesp-s-city.s3.sa-east-1.amazonaws.com/icones/home_controle_pragas.png', subTitle: 'Itens' });
    await broker.call("menu-service.create", { name: "Animais Dométicos", logo: 'https://unesp-s-city.s3.sa-east-1.amazonaws.com/icones/home_animais_domesticos.png', subTitle: 'Itens' });
    await broker.call("menu-service.create", { name: "Meio Ambiente", logo: 'https://unesp-s-city.s3.sa-east-1.amazonaws.com/icones/home_meio_ambiente.png', subTitle: 'Itens' });
    await broker.call("menu-service.create", { name: "Fauna e Flora", logo: 'https://unesp-s-city.s3.sa-east-1.amazonaws.com/icones/home_fauna_flora.png', subTitle: 'Itens' });
    await broker.call("menu-service.create", { name: "Assistência Social", logo: 'https://unesp-s-city.s3.sa-east-1.amazonaws.com/icones/home_assistencia_social.png', subTitle: 'Itens' });
    await broker.call("menu-service.create", { name: "Famílias Carentes", logo: 'https://unesp-s-city.s3.sa-east-1.amazonaws.com/icones/home_familias_carentes.png', subTitle: 'Itens' });
    await broker.call("menu-service.create", { name: "Segurança e Defesa Civil", logo: 'https://unesp-s-city.s3.sa-east-1.amazonaws.com/icones/home_seguranca_defesa_civil.png', subTitle: 'Itens' });
    await broker.call("menu-service.create", { name: "Botão de Pânico", logo: 'https://unesp-s-city.s3.sa-east-1.amazonaws.com/icones/home_botao_panico.png', subTitle: 'Itens' });
    await broker.call("menu-service.create", { name: "Administração Pública", logo: 'https://unesp-s-city.s3.sa-east-1.amazonaws.com/icones/home_administracao_publica.png', subTitle: 'Itens' });
    await broker.call("menu-service.create", { name: "Notificação e Comunicação", logo: 'https://unesp-s-city.s3.sa-east-1.amazonaws.com/icones/home_notificacao_comunicacao.png', subTitle: 'Itens' });
    await broker.call("menu-service.create", { name: "Sensoriamento Móvel Participativo", logo: 'https://unesp-s-city.s3.sa-east-1.amazonaws.com/icones/home_sensoriamento_movel_participativo.png', subTitle: 'Itens' });
    await broker.call("menu-service.create", { name: "Associação Comercial", logo: 'https://unesp-s-city.s3.sa-east-1.amazonaws.com/icones/home_assossiacao_comercial.png', subTitle: 'Itens' });
    broker.repl();
})

