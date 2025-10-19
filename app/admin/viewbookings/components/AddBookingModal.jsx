import React from "react";
import "../addBookingModal.css";
import AddBookingForm from "./AddBookingForm";

const AddBookingModal = ({
  isOpen,
  closeModal,
  selectedCategory,
  booking,
  mode,
}) => {
  if (!isOpen) return null;

  const categoryName = selectedCategory?.name || selectedCategory; // works for both string or object

  return (
    <div className="modal_overlay" role="dialog" aria-modal="true">
      <div className="modal_container">
        <div className="modal_container_header">
          <h1>
            {mode === "add" ? "Add Booking" : "Edit Booking"} - {categoryName}
          </h1>
          <button onClick={closeModal}>x</button>
        </div>
        <AddBookingForm booking={booking} />
      </div>
    </div>
  );
};

export default AddBookingModal;
