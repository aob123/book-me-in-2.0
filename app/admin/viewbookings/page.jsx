import React from "react";
import CategoryRow from "./components/CategoryRow";
import TimeGrid from "./components/TimeGrid";
import "./viewbookings.css";
import TimeHeader from "./components/TimeHeader";
import AddBookingModal from "./components/AddBookingModal";
import ClientView from "./components/ClientView";

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

  return (
    <main className="viewBookingsMain">
      <section className="viewBookingsGrid">
        <ClientView categories={categories} />
      </section>
    </main>
  );
};

export default ViewBookings;
