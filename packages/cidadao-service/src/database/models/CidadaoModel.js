"use strict";

const Sequelize = require("sequelize");

module.exports = {
    name: "cidadaos",
    define: {
        id: { // id must always exist
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },

        name: {
            type: Sequelize.STRING,
            allowNull: false,
        },

        email: {
            type: Sequelize.STRING,
            allowNull: false,
        },

        password: {
            type: Sequelize.TEXT,
            allowNull: false
        },
    },
    options: {
        timestamps: false
    }
};
