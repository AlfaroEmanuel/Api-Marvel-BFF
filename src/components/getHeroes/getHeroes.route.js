"use strict";
const getHeroes = require("./getHeroes.controller");

function route(app, globalPathPrefix) {
    app.get(`${globalPathPrefix}/getheroes/:offset/:nameStartsWith?`, getHeroes);
}

module.exports = route;