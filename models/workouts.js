const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
  date: {
    type: Date,
    default: Date.now
  },

  exercises: [
    {
      type: {
        type: String,
        trim: true,
        required: "Excercise type is required"
      },
        name: {
          type: String,
          trim: true,
          required: "Excercise name is required"
        },
        duration: {
          type: Number,
          required: "Excercise duration is required"
        },
        weight: {
          type: Number
        },
        reps: {
          type: Number
        },
        sets: {
          type: Number
        },
        distance: {
          type: Number
        }
    }
  ],
});

const workout = mongoose.model("Workout", WorkoutSchema);

module.exports = workout;
