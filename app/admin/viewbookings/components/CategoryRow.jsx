"use client";
import Booking from "./Booking";
import React, { useEffect, useState } from "react";

const CategoryRow = ({ category, hours }) => {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    console.log("CATEGORY ROW MOUNTED");
    const getBookings = async () => {
      try {
        const res = await fetch(`http://localhost:3002/api/bookings`);
        if (!res.ok) {
          throw new Error(`Failed to fetch bookings: ${res.status}`);
        }
        const data = await res.json();
        setBookings(data.bookings);
      } catch (error) {
        console.log("Failed to get bookings", error);
      }
    };

    console.log("Fetching bookings for category:", category.name);
    getBookings();
  }, []);

  for (let i = 0; i < bookings.length; i++) {
    if (category.name === bookings[i].category) {
      console.log(
        "MATCH",
        category.name,
        bookings[i].category,
        bookings[i]._id
      );
    } else {
      console.log("NO MATCH", category.name, bookings.category);
    }
  }

  const handleAddBooking = () => {
    console.log("Add booking to", category.name);
  };

  return (
    <div className="categoryRow">
      <h1 className="categoryName">{category.name}</h1>
      <div
        className="categoryTime"
        onClick={handleAddBooking}
        style={{
          gridTemplateColumns: ` repeat(${hours.length * 60}, 1fr)`,
          gridTemplateRows: `1fr`,
        }}
      >
        {bookings
          .filter((booking) => booking.category === category.name)
          .map((booking, id) => (
            <Booking booking={booking} key={id} />
          ))}

        {/* <Booking /> */}
      </div>
    </div>
  );
};

export default CategoryRow;
