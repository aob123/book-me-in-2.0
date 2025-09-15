"use client";
import React from "react";

const Booking = ({ booking }) => {
  console.log("BOOKING COMP", booking);

  const openingHour = 15;
  const closingHour = 23;

  const isoStringStart = booking.start;
  const isoStringEnd = booking.end;

  const startDate = new Date(isoStringStart);
  const endDate = new Date(isoStringEnd);

  // Minutes since opening
  const startMinutes =
    (startDate.getHours() - openingHour) * 60 + startDate.getMinutes();

  const endMinutes =
    (endDate.getHours() - openingHour) * 60 + endDate.getMinutes();

  console.log("");

  console.log("Start minutes:", startMinutes + 1);
  console.log("End minutes:", endMinutes + 1);

  // Format as HH:MM in local time
  const startStr = startDate.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  });
  const endStr = endDate.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  });

  const handleEditBooking = () => {
    console.log("Edit booking:", booking._id);
  };

  return (
    <div
      className="booking"
      onClick={(e) => {
        e.stopPropagation();
        handleEditBooking();
      }}
      style={{
        gridColumn: `${startMinutes + 1} / ${
          endMinutes > 540 || endMinutes < 0 ? 540 + 1 : endMinutes + 1
        }`,
        gridRow: "1",
      }}
    >
      <p>{booking.name}</p> <br />
      <p>
        {startStr} - {endStr}
      </p>
    </div>
  );
};

export default Booking;
