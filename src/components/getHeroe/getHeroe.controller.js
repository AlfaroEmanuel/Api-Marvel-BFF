"use strict";
const config = require("./getHeroe.config");
const getHeroeModule = require("./getHeroe.module");

async function getHeroeController(req, res) {
  const response = await getHeroeModule(req);
  return res.status(200).send(response);
}

module.exports = getHeroeController;