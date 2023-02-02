import React, { useState, useContext } from "react";
import { weekContext } from "../helpers/context";

const AddInfoForm = () => {
    const { daysArray, addNewDay } = useContext(weekContext);
  let [fromDataInfo, setFromDataInfo] = useState({
    degrees: Math.ceil(Math.random() * (30 - -30) + -30),
    isCelsius: true,
  });

  let newDay = {
    id: daysArray.length + 1,
    degrees: fromDataInfo.degrees,
    isCelsius: fromDataInfo.isCelsius,
  };

  return (
    <form>

      <input
        type="number"
        placeholder="add celsium"
        value={fromDataInfo.degrees}
        onChange={(event) =>
          setFromDataInfo({ ...fromDataInfo, degrees: event.target.value })
        }
      />
      {/*   перезапись только одного параметра*/}

      <input
        type="checkbox"
        name="isCelsius"
        onChange={(event) =>
          setFromDataInfo({
            ...fromDataInfo,

            isCelsius: event.target.checked,
          })
        }
      />
      <button onClick={(event)=>addNewDay(event, newDay)}>add</button>
    </form>
  );
};

export default AddInfoForm;
