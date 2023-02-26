import React from "react";
import { NavLink } from "react-router-dom";

const StudentCard = ({ id, image, name, bday }) => {
  return (
    <NavLink to="`/student-profile/${:id}`" className="student-card">
      <img src={image} alt="student" className="student-card__image" />
      <span className="student-card__name">{name}</span>
      <span className="student-card__bday">{bday}</span>
    </NavLink>
  );
};

export default StudentCard;
