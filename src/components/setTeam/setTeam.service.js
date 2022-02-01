"use strict";
const Heroe = require('../../model/Heroes');

async function setTeamService(req) {
    try {
        const { id, team } = req.body; 
        const HEROETEAM = new Heroe(req.body);
        const HEROETEAMMONGO = await Heroe.findOne({id});
        let heroe;
        console.log('BODY ===>', req.body);
        if (!HEROETEAMMONGO) {
            heroe = await HEROETEAM.save();
        } else {
            heroe = await Heroe.findByIdAndUpdate(HEROETEAMMONGO._id, {
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
