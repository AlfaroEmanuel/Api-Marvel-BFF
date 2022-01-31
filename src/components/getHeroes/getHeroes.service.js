"use strict";
const axios = require("axios");
const { api } = require("../../config/global");
const crypto = require('crypto');

async function getHeroesService(req) {
    try {
        const TS = '1';
        const HASH = crypto.createHash('md5').update(TS + api.private_key + api.public_key).digest('hex');
        const URL = `${api.url}characters?ts=${TS}&apikey=${api.public_key}&hash=${HASH}&offset=${req.params.offset}${req.params.nameStartsWith ? ('&nameStartsWith=' + req.params.nameStartsWith) : ''}`;
        
        const { data } = await axios.get(URL);

        console.log(data);
        return data;
    } catch (error) {
        throw error;
    }
}

module.exports = getHeroesService;