const router = require("express").Router();
const Exercise = require("../models/exercises");

    router.get("/api/workouts", (req, res) => {
        Exercise.find({})
        .then(exercise => {
            res.json(exercise);
        })
        .catch(err => {
            res.json(err);
        });
    });

    router.get("api/workouts/range", (req, res) => {
        Exercise.find({})
        .then(exercise => {
            res.json(exercise)
        })
        .catch(err => {
            res.json(err);
        });
    });

    router.put("/api/workouts/:id", ({ body, params }, res) => {
        Exercise.findByIdAndUpdate(
             params.id,
             { $push: { exercises: body }},
             { new: true }
        ).then(exerciseDB => {
            res.json(exerciseDB);
        })
        .catch(err => {
            res.json(err);
        });
    });

    router.post("/api/workouts", ({ body }, res) => {
        Exercise.create(body)
        .then((exerciseDB => {
            res.json.exerciseDB;
        })).catch(err => {
            res.json(err);
        });
    });

module.exports = router;