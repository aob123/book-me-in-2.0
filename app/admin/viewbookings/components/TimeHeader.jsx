import React from "react";
import Booking from "./Booking";

const TimeHeader = ({}) => {
  let hours = [15, 16, 17, 18, 19, 20, 21, 22, 23];
  //   let hours = [15, 16];

  return (
    <div className="timeHeaderRow">
      <h1 className="timeHeaderName">Time</h1>
      <div
        className="timeHeaderGrid"
        style={{ gridTemplateColumns: ` repeat(${hours.length * 60}, 1fr)` }}
      >
        {hours.map(
          (hour, index) => (
            console.log(index + 1),
            (
              <div
                className="hour"
                style={{
                  gridColumn: `${index * 60 + 1} / ${(index + 1) * 60 + 1}`,
                }}
                key={index}
              >
                <p>{hour}:00</p>
              </div>
            )
          )
        )}
      </div>
    </div>
  );
};

export default TimeHeader;
