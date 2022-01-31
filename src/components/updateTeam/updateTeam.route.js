"use strict";
const updateTeam = require("./updateTeam.controller");

function route(app, globalPathPrefix) {
  app.put(`${globalPathPrefix}/updateTeam`, updateTeam);
}

module.exports = route;