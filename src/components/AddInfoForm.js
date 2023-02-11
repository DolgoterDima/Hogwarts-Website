import React, { useState, useContext } from "react";
import { weekContext } from "../helpers/context";

const AddInfoForm = () => {
  const { daysArray, addNewDay } = useContext(weekContext);
  let [fromDataInfo, setFromDataInfo] = useState({
    degrees: Math.ceil(Math.random() * (30 - -30) + -30),
    isCelsius: true,
    windSpeed: Math.ceil(Math.random() * (30 - 10) + 10),
  });

  let newDay = {
    id: daysArray.length + 1,
    degrees: fromDataInfo.degrees,
    isCelsius: fromDataInfo.isCelsius,
  };

  return (
    <form className="form">
      <div className="form__row">
        <label className="form__label" htmlFor="degrees">
          Degrees
        </label>
        <input
          className="form__input"
          id="degrees"
          type="number"
          placeholder="add celsium"
          value={fromDataInfo.degrees}
          onChange={(event) =>
            setFromDataInfo({ ...fromDataInfo, degrees: event.target.value })
          }
        />
      </div>

      <div className="form__row">
        <label className="form__label" htmlFor="isCelsius">
          Use celsius
        </label>
        <input
          className="form__input form__input--checkbox"
          id="isCelsius"
          type="checkbox"
          name="isCelsius"
          onChange={(event) =>
            setFromDataInfo({
              ...fromDataInfo,

              isCelsius: event.target.checked,
            })
          }
        />
      </div>

      <div className="form__row">
        <label className="form__label" htmlFor="windspeed">
          Wind speed
        </label>
        <input
          className="form__input form__input--checkbox"
          id="windspeed"
          type="number"
          placeholder="add wind speed"
          value={fromDataInfo.windSpeed}
          onChange={(event) =>
            setFromDataInfo({ ...fromDataInfo, windSpeed: event.target.value })
          }
        />
      </div>
      {/*   перезапись только одного параметра*/}
      <div className="form__row form__row--full">
        <button onClick={(event) => addNewDay(event, newDay)}>add</button>
      </div>
    </form>
  );
};

export default AddInfoForm;
