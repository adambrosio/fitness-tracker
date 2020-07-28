const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const exerciseSchema = new Schema({
    name: {
        type: String,
        time: true,
        required: "Enter type of exercise"
    },
    weight: {
        type: Number,
        required: "Enter weight used"
    }

})

const Exercise = mongoose.model("Exercise", exerciseSchema);

module.exports = Exercise;