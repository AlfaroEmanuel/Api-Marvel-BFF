"use strict";
const getHeroe = require("./getHeroe.controller");

function route(app, globalPathPrefix) {
    app.get(`${globalPathPrefix}/getheroe/:id`, getHeroe);
}

module.exports = route;