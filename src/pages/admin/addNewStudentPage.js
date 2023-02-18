import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { studentsActions } from "../../store/students";

const AddNewStudentPage = () => {
  const nameField = useRef();
  const emailField = useRef();
  const addressField = useRef();
  const phoneField = useRef();

  const students = useSelector((state) => state.students);
  const dispatch = useDispatch();

  const onSubmitStudentInfo = (e) => {
    e.preventDefault();
    dispatch({
      type: studentsActions.ADD_STUDENT,
      payload: {
        id: students.length + 1,
        name: nameField.current.value,
        email: emailField.current.value,
        address: addressField.current.value,
        phone: phoneField.current.value,
      },
    });

    console.log("submited", nameField.current.value);
    console.log("students", students);
  };
  return (
    <div>
      <form onSubmit={onSubmitStudentInfo}>
        <div className="field">
          <label className="label">Name</label>
          <div className="control">
            <input
              required
              className="input"
              ref={nameField}
              type="text"
              placeholder="Name"
            />
          </div>
        </div>

        <div className="field">
          <label className="label">Email</label>
          <div className="control">
            <input
              required
              className="input"
              ref={emailField}
              type="email"
              value="qwqeqw@weq.sadas"
              placeholder="Email"
            />
          </div>
        </div>

        <div className="field">
          <label className="label">Address</label>
          <div className="control">
            <input
              required
              className="input"
              ref={addressField}
              type="text"
              placeholder="Address"
            />
          </div>
        </div>

        <div className="field">
          <label className="label">Phone</label>
          <div className="control">
            <input
              required
              className="input"
              ref={phoneField}
              type="tel"
              placeholder="Phone"
            />
          </div>
        </div>

        <div className="field is-grouped">
          <div className="control">
            <button type="submit" className="button is-link">
              Submit
            </button>
          </div>
        </div>
      </form>

      {students.map((item) => {
        return <p key={item.id}>{item.name}</p>;
      })}
    </div>
  );
};

export default AddNewStudentPage;
