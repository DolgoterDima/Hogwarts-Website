import React, { useState } from "react";
import Day from "./Day";

const Week = ({ daysData, title }) => {
  // destructurisation of props obj

  // const [emitChildToParent, setEmitChildToParent] = useState("");
  //
  // const childToParent = (childdata) => {
  //   setEmitChildToParent(childdata);
  // };
  return (
    <div className="week">
      <h2 className="week__title">{title}</h2>
      <div className="week__sorting">
        <select name="" id="">
          <option value="degrees">degrees</option>
          <option value="wind">wind speed</option>
        </select>
      </div>
      <div className="week__days">
        {daysData.length ? (
          daysData.map(({ degrees, id, isCelsius }) => (
            <Day degrees={degrees} isCelsius={isCelsius} id={id} key={id} />
          ))
        ) : (
          <span>No days left</span>
        )}
      </div>
    </div>
  );
};

export default Week;
