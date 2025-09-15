import React from "react";
import CategoryRow from "./components/CategoryRow";
import TimeGrid from "./components/TimeGrid";
import "./viewbookings.css";
import TimeHeader from "./components/TimeHeader";

const getCategories = async () => {
  try {
    const res = await fetch("http://localhost:3002/api/categories");

    return res.json();
  } catch (error) {
    console.log("Failed to get categories", error);
  }
};

const ViewBookings = async () => {
  const { categories } = await getCategories();
  let hours = [15, 16, 17, 18, 19, 20, 21, 22, 23];
  const CreateRows = () => {
    return (
      <>
        {categories.map((category, i) => (
          <CategoryRow category={category} hours={hours} key={i++} />
        ))}
      </>
    );
  };

  return (
    <main className="viewBookingsMain">
      <section className="viewBookingsGrid">
        {/* <CategoryRow category={{ name: "Time" }} /> */}
        <TimeHeader hours={hours.length} />
        <CreateRows />
      </section>
    </main>
  );
};

export default ViewBookings;
