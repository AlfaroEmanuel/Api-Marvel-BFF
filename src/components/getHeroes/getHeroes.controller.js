"use strict";
const config = require("./getHeroes.config");
const getHeroesModule = require("./getHeroes.module");

async function getHeroesController(req, res) {
    const response = await getHeroesModule(req);
    return res.status(200).send(response);
}

module.exports = getHeroesController;