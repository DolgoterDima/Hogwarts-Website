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
      <div className="field  ">
        <label className="label">Degrees</label>
        <div className="control">
          <input
            className="input"
            type="number"
            placeholder="add celsium"
            value={fromDataInfo.degrees}
            onChange={(event) =>
              setFromDataInfo({
                ...fromDataInfo,
                degrees: event.target.value,
              })
            }
          />
        </div>
      </div>
      <div className="field">
        <div className="control">
          <label className="checkbox">
            <input
              type="checkbox"
              onChange={(event) =>
                setFromDataInfo({
                  ...fromDataInfo,
                  isCelsius: event.target.checked,
                })
              }
            />
            Use celsius
          </label>
        </div>
      </div>

      <div className="field">
        <label className="label"> Wind speed</label>
        <div className="control">
          <input
            className="input"
            type="number"
            placeholder="add wind speed"
            value={fromDataInfo.windSpeed}
            onChange={(event) =>
              setFromDataInfo({
                ...fromDataInfo,
                windSpeed: event.target.value,
              })
            }
          />
        </div>
      </div>

      <div className="field is-grouped">
        <div className="control">
          <button
            className="button is-link"
            onClick={(event) => addNewDay(event, newDay)}
          >
            Submit
          </button>
        </div>
      </div>
    </form>
  );
};

export default AddInfoForm;
