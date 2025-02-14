import mongoose, { mongo, Schema } from "mongoose";

const bookingSchema = new Schema(
  {
    name: String,
    category: String,
    duration: Number,
    start: Date,
    end: Date,
    createdAt: {
      type: Date,
      default: new Date(),
    },
  },
  {
    timestamps: true,
  }
);

const Booking =
  mongoose.models.Booking || mongoose.model("Booking", bookingSchema);

export default Booking;
