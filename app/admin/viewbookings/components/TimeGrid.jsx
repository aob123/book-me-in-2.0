import React from "react";
import Segment from "./Segment";
import Hour from "./Hour";

const TimeGrid = ({ category }) => {
  const hoursOpen = 9;
  const segmentsPerHour = 12;
  const totalSegments = hoursOpen * segmentsPerHour;
  // const totalSegments = 10;

  let hours = [15, 16, 17, 18, 19, 20, 21, 22, 23];

  // Create an array with the total number of segments
  const segmentsArray = Array.from({ length: totalSegments }, (_, i) => i);

  return (
    <>
      <h1>Time</h1>
      <div className="timeHeader">
        <div className="timeGrid">
          <div className="timeIndicator"></div>
          {hours.map((hour, index) => (
            <Hour key={index} hour={hour} />
          ))}
          {/* {segmentsArray.map((segment, index) => (
          <Segment key={index} />
          ))} */}
          {/* <Segment /> */}
        </div>
      </div>
    </>
  );
};

export default TimeGrid;
