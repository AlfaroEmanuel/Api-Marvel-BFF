"use strict";
const config = require("./updateTeam.config");
const updateTeamModule = require("./updateTeam.module");

async function updateTeamController(req, res) {
    const response = await updateTeamModule(req);
    return res.status(200).send(response);
}

module.exports = updateTeamController;