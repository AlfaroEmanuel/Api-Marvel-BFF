"use strict";
const ModuleError = require("../../model/module.error");
const updateTeamService = require("./updateTeam.service");

async function updateTeamModule(req) {
    try {
        const serviceResponse = await updateTeamService(req);
        return serviceResponse;
    } catch (error) {
        const moduleError = new ModuleError(error);
        throw moduleError;
    }
}

module.exports = updateTeamModule;