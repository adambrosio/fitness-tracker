const router = require("express").Router();
const Exercise = require("../models/exercises");

module.exports = function(app) {
    app.get("/api/workouts", (req, res) => {
        Exercise.find({})
        .then(exercise => {
            res.json(exercise);
        })
        .catch(err => {
            res.json(err);
        });
    });

    app.get("api/workouts/range", (req, res) => {
        Exercise.find({})
        .then(exercise => {
            res.json(exercise)
        })
        .catch(err => {
            res.statusCode(400).json(err);
        });
    });

    app.put("/api/workouts/:id", (req, res) => {
        Exercise.findByIdAndUpdate(
            { _id: req.params.id },
            {
                // The $push operator appends a specified value to an array
                $push: { exercises: req.body}
            },
                { new: true }
        ).then(exerciseDB => {
            res.json(exerciseDB);
        })
        .catch(err => {
            res.statusCode(400).json(err);
        });
    });

    app.post("/api/workouts", ({ body }, res) => {
        Exercise.create(body)
        .then((exerciseDB => {
            res.json.exerciseDB;
        })).catch(err => {
            res.statusCode(400).json(err);
        });
    });

}

module.exports = router