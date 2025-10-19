"use client";
import Booking from "./Booking";
import React, { useEffect, useState } from "react";
import AddBookingModal from "./AddBookingModal";

const CategoryRow = ({ category, hours, bookings, onAdd, onEdit }) => {
  return (
    <div className="categoryRow">
      <h1 className="categoryName">{category.name}</h1>
      <div
        className="categoryTime"
        onClick={onAdd}
        style={{
          gridTemplateColumns: `repeat(${hours.length * 60}, 1fr)`,
          gridTemplateRows: `1fr`,
        }}
      >
        {bookings
          .filter((booking) => booking.category === category.name)
          .map((booking, id) => (
            <Booking booking={booking} key={id} onEdit={onEdit} />
          ))}
      </div>
    </div>
  );
};

export default CategoryRow;
