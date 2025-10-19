"use client";
import React, { useState, useEffect, useMemo } from "react";
import TimeHeader from "./TimeHeader";
import CategoryRow from "./CategoryRow";
import AddBookingModal from "./AddBookingModal";

const ClientView = ({ categories }) => {
  const [bookings, setBookings] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalMode, setModalMode] = useState("add"); // "add" or "edit"
  const [selectedBooking, setSelectedBooking] = useState(null);
  const [category, setSelectedCategory] = useState(null);

  useEffect(() => {
    console.log("CATEGORY ROW MOUNTED");
    const getBookings = async () => {
      try {
        const res = await fetch(`http://localhost:3000/api/bookings`);
        if (!res.ok) {
          throw new Error(`Failed to fetch bookings: ${res.status}`);
        }
        const data = await res.json();
        setBookings(data.bookings);
      } catch (error) {
        console.log("Failed to get bookings", error);
      }
    };

    console.log("Fetching bookings");
    getBookings();
  }, []);

  let hours = [15, 16, 17, 18, 19, 20, 21, 22, 23];

  const openAddModal = (category) => {
    setModalMode("add");
    setSelectedBooking(null);
    setSelectedCategory(category);
    setModalOpen(true);
  };

  const openEditModal = (booking) => {
    setModalMode("edit");
    setSelectedBooking(booking);
    setSelectedCategory(booking.category);
    setModalOpen(true);
  };

  const closeModal = () => setModalOpen(false);

  return (
    <>
      <TimeHeader hours={hours.length} />
      {categories.map((category) => {
        const categoryBookings = useMemo(
          () => bookings.filter((b) => b.category === category.name),
          [bookings, category.name]
        );

        return (
          <CategoryRow
            key={category._id}
            category={category}
            hours={hours}
            bookings={categoryBookings}
            onAdd={() => openAddModal(category)}
            onEdit={openEditModal}
          />
        );
      })}
      {console.log(modalOpen, modalMode, selectedBooking, category)};
      <AddBookingModal
        isOpen={modalOpen}
        onClose={setModalOpen}
        selectedCategory={category}
        mode={modalMode}
        booking={selectedBooking}
        closeModal={closeModal}
      />
    </>
  );
};

export default ClientView;
