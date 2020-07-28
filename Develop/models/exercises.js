const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const exerciseSchema = new Schema({
    name: {
        type: String,
        time: true,
        required: "Enter type of exercise"
    }

})

const Exercise = mongoose.model("Exercise", exerciseSchema);

module.exports = Exercise;