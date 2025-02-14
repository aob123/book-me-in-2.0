import React from "react";

const CategoryButton = ({ category }) => {
  return (
    <div className="categoryButton">
      <h1>{category.name}</h1>
      <div className="timeBar"></div>
    </div>
  );
};

export default CategoryButton;
