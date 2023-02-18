import React from "react";
import { useSelector } from "react-redux";

const StudentsPage = () => {
  const allStudents = useSelector((state) => state.students); //get students module from store
  return (
    <div>
      <ul>
        {allStudents.map((item) => {
          return <p key={item.id}>{item.name}</p>;
        })}
      </ul>
    </div>
  );
};

export default StudentsPage;
