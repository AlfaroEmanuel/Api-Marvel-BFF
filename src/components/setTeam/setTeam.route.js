"use strict";
const setTeam = require("./setTeam.controller");

function route(app, globalPathPrefix) {
  app.post(`${globalPathPrefix}/setTeam`, setTeam);
}

module.exports = route;
