"use strict";
const axios = require("axios");
const { api } = require("../../config/global");
const crypto = require('crypto');
const Heroe = require('../../model/Heroes');

async function getHeroeService(req) {
    try {
        const TS = '1';
        const HAST = crypto.createHash('md5').update(TS + api.private_key + api.public_key).digest('hex');
        const URL = `${api.url}characters?ts=${TS}&apikey=${api.public_key}&hash=${HAST}&id=${req.params.id}`;
        const { data } = await axios.get(URL);
        
        const HEROE = await Heroe.find({ id: data.data.results[0].id });
        data.data.results[0].team = HEROE[0]?.team;
        
        return data;
    } catch (error) {
        throw error;
    }
}

module.exports = getHeroeService;