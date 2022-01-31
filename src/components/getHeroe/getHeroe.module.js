"use strict";
const ModuleError = require("../../model/module.error");

const getHeroeService = require("./getHeroe.service");

async function getHeroeModule(req) {
  try {
    const serviceResponse = await getHeroeService(req);
    return serviceResponse;
  } catch (error) {
    const moduleError = new ModuleError(error);
    throw moduleError;
  }
}

module.exports = getHeroeModule;
