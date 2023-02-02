import React, { useState } from "react";
import Day from "./Day";

const Week = ({ daysData, title }) => {
  // destructurisation of props obj

  const [emitChildToParent, setEmitChildToParent] = useState("");

  const childToParent = (childdata) => {
    setEmitChildToParent(childdata);
  };
  return (
    <div className="week">
      <h2 className="week__title">{title}</h2>
      <div className="week__days">
        {daysData.map(({ degrees, id, isCelsius }) => (
          <Day degrees={degrees} isCelsius={isCelsius} id={id} key={id} />        ))}
      </div>
    </div>
  );
};

export default Week;
