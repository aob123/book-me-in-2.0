import React from "react";
import "../addBookingModal.css";
import AddBookingForm from "./AddBookingForm";

const AddBookingModal = ({ isOpen, closeModal, selectedCategory }) => {
  return isOpen ? (
    <div
      className="modal_overlay"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div className="modal_container">
        <div className="modal_container_header">
          <h1>New Booking - {selectedCategory}</h1>
          <button onClick={closeModal}>X</button>
        </div>
        <AddBookingForm />
        <button onClick={closeModal}>Close</button>
      </div>
    </div>
  ) : null;
};

export default AddBookingModal;
