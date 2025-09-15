"use client";
import React, { useState } from "react";
import TimeHeader from "./TimeHeader";
// import CreateRows from "./CreateRows";
import AddBookingModal from "./AddBookingModal";
import CategoryRow from "./CategoryRow";
import { set } from "mongoose";

const ClientView = ({ categories }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("");

  const openModal = (category) => {
    setIsOpen(true);
    setSelectedCategory(category);
  };
  const closeModal = () => {
    setIsOpen(false);
  };

  let hours = [15, 16, 17, 18, 19, 20, 21, 22, 23];
  const CreateRows = () => {
    return (
      <>
        {categories.map((category, i) => (
          <CategoryRow
            category={category}
            hours={hours}
            key={i++}
            openModal={openModal}
          />
        ))}
      </>
    );
  };
  return (
    <>
      <TimeHeader hours={hours.length} />
      <CreateRows />
      <AddBookingModal
        isOpen={isOpen}
        closeModal={closeModal}
        selectedCategory={selectedCategory}
      />
    </>
  );
};

export default ClientView;
