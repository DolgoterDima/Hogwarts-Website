import "./App.css";
import React, { useEffect, useState } from "react";
import { Provider } from "react-redux";

import store from "./store";

import { Routes, Route } from "react-router-dom";
import AdminPage from "./pages/admin";
import HomePage from "./pages/HomePage";

import AddNewDay from "./pages/admin/AddNewDay";
import CheckAuth from "./hoc/CheckAuth";

import PostPage from "./pages/admin/PostPage";
import BlogPage from "./pages/BlogPage";

import MainLayout from "./layouts/MainLayout";
import AdminLayout from "./layouts/AdminLayout";

import LoginPage from "./pages/LoginPage";
import StudentsPage from "./pages/public/StudentsPage";
import StudentsPageAdmin from "./pages/admin/StudentsPageAdmin";

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

  return (
    <div className="App">
      <Provider store={store}>
        {/* for redux*/}
        <Routes>
          {/*where to show all user content*/}
          <Route path="/" element={<MainLayout />}>
            <Route index element={<HomePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/students" element={<StudentsPage />} />

            <Route path="/blog" element={<BlogPage />} />
            <Route path="/blog/:postId" element={<PostPage />} />
          </Route>

          {/*where to show all admin content*/}
          <Route path="/admin" element={<AdminLayout />}>
            {/*
          if user a is auth show admin page or redirect to login
*/}
            <Route
              index
              element={
                <CheckAuth>
                  <AdminPage />
                </CheckAuth>
              }
            />
            <Route path="/admin/add-new-day" element={<AddNewDay />} />
            <Route path="/admin/students" element={<StudentsPageAdmin />} />
          </Route>
        </Routes>
      </Provider>
      {/*    <weekContext.Provider
          value={{
            daysArray: daysArr,
            addNewDay: addDay,
            deleteDay,
          }} >
          <AddInfoForm />
          <Week daysData={daysArr} title={"Week Title"} />
        </weekContext.Provider>*/}
    </div>
  );


}

export default App;
