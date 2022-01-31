"use strict";
const Heroe = require('../../model/Heroes');

async function setTeamService(req) {
    try {
        const HEROETEAM = new Heroe(req.body);
        const { id, team } = req.body; 
        const HEROETEAMMONGO= await Heroe.findOne({id});
        let heroe;

        if (!HEROETEAMMONGO) {
            heroe = await HEROETEAM.save();
        } else {
            heroe = await Heroe.findByIdAndUpdate(HEROETEAMDB._id, {
                team
            }, {
                new: true
            });
        }
        return heroe;
    } catch (error) {
        throw error;
    }
}

module.exports = setTeamService;
