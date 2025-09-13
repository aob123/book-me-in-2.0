import Booking from "./Booking";
import React from "react";

const CategoryRow = ({ category, hours }) => {
  return (
    <div className="categoryRow">
      <h1 className="categoryName">{category.name}</h1>
      <div
        className="categoryTime"
        style={{ gridTemplateColumns: ` repeat(${hours * 60}, 1fr)` }}
      >
        <Booking />
      </div>
    </div>
  );
};

export default CategoryRow;
