"use strict";
const config = require("./setTeam.config");
const setTeamModule = require("./setTeam.module");

async function setTeamController(req, res) {
    const response = await setTeamModule(req);
    return res.status(200).send(response);
}

module.exports = setTeamController;