import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import StudentCard from "../../components/cards/studentCard";

const StudentsPage = () => {
  const dispatchFetchUser = useDispatch();

  useEffect(() => {}, []);

  return (
    <div>
      <ul></ul>
    </div>
  );
};

export default StudentsPage;
