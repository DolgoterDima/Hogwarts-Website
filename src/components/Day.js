import React, { useContext } from "react";
import "../styles/day.css";
import { weekContext } from "../helpers/context";

const Day = ({ degrees, isCelsius, id }) => {
  const { daysArray, addNewDay, deleteDay } = useContext(weekContext);
   return (
    <div className="day">
{/*      {daysArray.map(({ degrees, isCelsius }) => (
        <h3 key={degrees}>{degrees}</h3>
      ))}*/}
      <span className={"day__degrees"}>{degrees} °C °F</span>
      <span className={"day__degrees"}>{isCelsius} </span>
      <button onClick={(event)=>deleteDay(event, id)}> delete </button>
    </div>
  );
};

export default Day;
