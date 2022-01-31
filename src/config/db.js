/* eslint-disable prettier/prettier */
const mongoose = require('mongoose');
const { db } = require("../config/global");

const dbConnection = async () => {
    try {
        await mongoose.connect(db);
        console.log("BD Conectada")
    } catch (error) {
        console.log(error)
        throw new Error("Error al conectar la BD")
    }
}

module.exports = {
    dbConnection
}