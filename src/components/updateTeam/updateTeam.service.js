"use strict";
const Heroe = require('../../model/Heroes');

async function updateTeamService(req) {
    try {
        const { id, team } = req.body;
        const HEROETEAMDB = await Heroe.findOne({id});

        if (!HEROETEAMDB) {
            throw new Error("El heroe no esta clasificado en ningun team!")
        }

        const HEROETEAMUPDATE = await Heroe.findByIdAndUpdate(HEROETEAMDB._id, {
            team
        }, {
            new: true
        });
        return HEROETEAMUPDATE;
    } catch (error) {
        throw error;
    }
}

module.exports = updateTeamService;