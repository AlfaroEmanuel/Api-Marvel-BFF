"use strict";
const ModuleError = require("../../model/module.error");

const getHeroesService = require("./getHeroes.service");

async function getHeroesModule(req) {
    try {
        const serviceResponse = await getHeroesService(req);
        return serviceResponse;
    } catch (error) {
        const moduleError = new ModuleError(error);
        throw moduleError;
    }
}

module.exports = getHeroesModule;