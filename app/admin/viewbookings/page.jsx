import React from "react";
import CategoryButton from "./components/CategoryButton";

const getCategories = async () => {
  try {
    const res = await fetch("http://localhost:3000/api/categories");

    return res.json();
  } catch (error) {
    console.log("Failed to get categories", error);
  }
};

const ViewBookings = async () => {
  const { categories } = await getCategories();

  return (
    <main>
      <h1>View Bookings</h1>
      {categories.map((category, i) => (
        // <div key={i++}> {item.name} </div>
        <CategoryButton category={category} key={i++} />
      ))}
    </main>
  );
};

export default ViewBookings;
