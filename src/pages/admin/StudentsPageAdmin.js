import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import StudentCard from "../../components/cards/studentCard";
import AddNewStudent from "../../components/forms/AddNewStudent";
import { fetchStudents } from "../../store/studentsSlice";
const StudentsPageAdmin = () => {
  /*
  const allStudents = useSelector((state) => state.students.allStudents);
*/
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchStudents());
  }, []);

  return (
    <div>
      <AddNewStudent />
      <div className="grid">
        {/*     {allStudents.map((item) => {
          return (
             
             <StudentCard
              id={item.id}
              name={item.name}
              image={item.image}
              bday={item.dateOfBirth}
            />
          );
        })}*/}
      </div>
    </div>
  );
};

export default StudentsPageAdmin;
