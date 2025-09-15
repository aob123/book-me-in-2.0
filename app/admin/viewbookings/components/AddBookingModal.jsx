import React from "react";
import "../addBookingModal.css";

const AddBookingModal = ({ isOpen, closeModal, selectedCategory }) => {
  return isOpen ? (
    <div
      className="modal_overlay"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div className="modal_container">
        <h1>Add Booking for {selectedCategory}</h1>
        <button onClick={closeModal}>Close</button>
      </div>
    </div>
  ) : null;
};

export default AddBookingModal;
