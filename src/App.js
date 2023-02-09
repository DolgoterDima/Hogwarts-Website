import "./App.css";
import React, { useState } from "react";

import AddInfoForm from "./components/AddInfoForm";
import "../src/styles/week.css";

import Week from "./components/Week";

import { weekContext } from "./helpers/context";

function App() {
  let [degrees, setDegrees] = useState({
    name: "",
    email: "",
  });
  let [isCelsius, setIsCelsius] = useState(false);

  let [daysArr, daysArrChange] = useState([
    { id: 1, degrees: 44, isCelsius: true },
    { id: 2, degrees: 9, isCelsius: true },
    { id: 3, degrees: 3, isCelsius: true },
    { id: 4, degrees: 34 },
    { id: 5, degrees: 24, isCelsius: true },
    { id: 6, degrees: 56, isCelsius: true },
    { id: 7, degrees: 0, isCelsius: true },
  ]);

  /*  let [fromDataInfo, setFromDataInfo] = useState({
    degrees: Math.ceil(Math.random() * (30 - -30) + -30),
    isCelsius: true,
  });*/

  const addDay = (e, newDay = "default new day") => {
    e.preventDefault();
    daysArrChange([...daysArr, newDay]);
  };
  const deleteDay = (e, postIdToDelete) => {
    e.preventDefault();
    console.log("postIdToDelete", postIdToDelete);
    const arrayWithoutDeletedDay = daysArr.filter(
      ({ id }) => id !== postIdToDelete
    );

    daysArrChange([...arrayWithoutDeletedDay]);
  };

  /* glossary sorting*/
  const sorting = {
    "by degrees": "by degrees",
    "by wind speed": "by degrees",
  };
  const changeOrder = (type) => {};

  return (
    <div className="App">
      <header className="App-header">
        <weekContext.Provider
          value={{
            daysArray: daysArr,
            addNewDay: addDay,
            deleteDay,
            changeOrder,
          }}
        >
          <AddInfoForm />
          <Week daysData={daysArr} title={"Week Title"} />
        </weekContext.Provider>
      </header>
    </div>
  );
}

export default App;
