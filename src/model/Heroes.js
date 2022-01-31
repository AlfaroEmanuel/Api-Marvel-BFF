const { Schema, model } = require("mongoose");

const Heroes = Schema({
    id: {
        type: Number,
        required: true
    },
    team: {
        type: String,
        required: true
    }
});

module.exports = model("Heroe", Heroes);