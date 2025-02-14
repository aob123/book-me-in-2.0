import mongoose from "mongoose";
import Category from "./app/(models)/Category.js";
import { connectToDatabase } from "./lib/mongoose.js";

const seedCategories = async () => {
  try {
    await connectToDatabase();

    const existingCategories = await Category.find();
    if (existingCategories.length > 0) {
      console.log("Categories already exist. Skipping seeding.");
      return;
    }

    const defaultCategories = [
      { name: "Computer 1", players: 1, duration: 60, active: true },
      { name: "Computer 2", players: 1, duration: 60, active: true },
      { name: "Computer 3", players: 1, duration: 60, active: true },
      { name: "Computer 4", players: 1, duration: 60, active: true },
      { name: "Xbox Activity Room", players: 4, duration: 60, active: true },
      { name: "Xbox Café", players: 4, duration: 60, active: true },
      { name: "Pool (Green)", players: 4, duration: 60, active: true },
      { name: "Pool (Blue)", players: 4, duration: 60, active: true },
      { name: "Switch", players: 4, duration: 60, active: true },
      { name: "VR", players: 2, duration: 30, active: true },
      { name: "Studio", players: 4, duration: 60, active: true },
    ];

    await Category.insertMany(defaultCategories);
    console.log("Categories seeded successfully!");
  } catch (error) {
    console.error("Error seeding categories:", error);
  } finally {
    mongoose.connection.close();
  }
};

seedCategories();
