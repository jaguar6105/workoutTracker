const router = require("express").Router();
const Workout = require("../models/workout.js");

//create workout
router.post("/api/workouts", ({ body }, res) => {
  
});

//last workout
router.get("/api/workouts", (req, res) => {
  
});

//add exercise
router.put("/api/workouts/:id", ({ body }, res) => {

});

//get workouts in range
router.get("/api/workouts/range", (req, res) => {

});

module.exports = router;
