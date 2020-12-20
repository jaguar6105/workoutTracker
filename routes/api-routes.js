const router = require("express").Router();
const Workout = require("../models/workout.js");

//create workout
router.post("/api/workouts", ({ body }, res) => {
    Workout.create(body)
        .then(dbWorkout => {
            res.json(dbWorkout);
        })
        .catch(err => {
            res.status(400).json(err);
        });
});

//last workout
router.get("/api/workouts", (req, res) => {
    Workout.find({}).then(dbWorkout => {
        res.json(dbWorkout);
    })
        .catch(err => {
            res.status(400).json(err);
        });
});

//add exercise
router.put("/api/workouts/:id", ({ body }, res) => {
    
   /* Workout.update(
        {
            _id: mongojs.ObjectId(req.params.id)
        },
        {
            $set: {
                $push: { exercise: body }
            }
        },
        (error, data) => {
            if (error) {
                res.send(error);
            } else {
                res.send(data);
            }
        }
    );*/

});

//get workouts in range
router.get("/api/workouts/range", (req, res) => {
    Workout.find({}).then(dbWorkout => {
        res.json(dbWorkout);
    })
        .catch(err => {
            res.status(400).json(err);
        });
});

module.exports = router;
