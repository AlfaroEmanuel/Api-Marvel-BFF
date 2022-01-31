"use strict";
const ModuleError = require("../../model/module.error");
const setTeamService = require("./setTeam.service");

async function setTeamModule(req) {
    try {
        const serviceResponse = await setTeamService(req);
        return serviceResponse;
    } catch (error) {
        const moduleError = new ModuleError(error);
        throw moduleError;
    }
}

module.exports = setTeamModule;