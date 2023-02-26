import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addStudent, addStudentToDB } from "../../store/studentsSlice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDroplet,
  faDropletSlash,
  faWandSparkles,
  faRectangleXmark,
  faFileArrowUp,
} from "@fortawesome/free-solid-svg-icons";

const AddNewStudent = () => {
  /*  const allStudents = useSelector((state) => state.students.allStudents);*/
  const dispatch = useDispatch();

  const subjectsArray = [
    "Potions",
    "Defence Against the Dark Arts",
    "Charms",
    "Transfiguration",
    "Divination",
    "History of Magic",
    "Herbology",
    "Apparition",
    "Care of Magical Creatures",
    "Astronomy",
    "Arithmancy",
    "Ancient Runes",
    "Muggle Studies",
  ];

  const marks = [
    "Outstanding",
    "Exceeds Expectations",
    "Acceptable",
    "Poor",
    "Dreadful",
    "Troll",
  ];
  const d = new Date();
  let subjectPostfix = d.getTime();
  const [subjectsAndMarksList, setSubjectsAndMarksList] = useState([
    `subject_${subjectPostfix}`,
  ]);

  const deleteSubject = (row) => {
    const filteredArray = subjectsAndMarksList.filter(
      (element) => element !== row
    );
    console.log(filteredArray, row);
    setSubjectsAndMarksList(filteredArray);
  };
  const addSubject = (e) => {
    e.stopPropagation();
    const newItem = `subject_${subjectPostfix}`;
    setSubjectsAndMarksList([...subjectsAndMarksList, newItem]);
  };

  const onSubmitStudentInfo = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const fileInput = document.querySelector(".input-portrait");

    formData.append("portrait", fileInput);

    dispatch(addStudentToDB(formData));

    /*    const [subjectsArray, setSubjectsArray] = useState([
      "Potions",
      "Defence Against the Dark Arts",
      "Charms",
      "Transfiguration",
      "Divination",
      "History of Magic",
      "Herbology",
      "Apparition",
      "Care of Magical Creatures",
      "Astronomy",
      "Arithmancy",
      "Ancient Runes",
      "Muggle Studies",
    ]);*/
  };
  return (
    <form onSubmit={onSubmitStudentInfo} className="form">
      <div className="columns is-variable is-1-mobile form__row">
        <div className="column  columns is-flex-direction-column">
          <div className="field column form__block ">
            <label className="label">Name</label>
            <div className="control">
              <input
                required
                className="input"
                type="text"
                placeholder="Name"
                name="name"
              />
            </div>
          </div>
          <div className="field column form__block  ">
            <label className="label">Phone</label>
            <div className="control">
              <input
                required
                className="input"
                type="tel"
                placeholder="Phone"
                name="phone"
              />
            </div>
          </div>
          <div className="field column form__block">
            <label className="label">Patronus</label>
            <div className="control">
              <label className="text is-size-3">
                <input
                  className="input"
                  type="text"
                  name="patronus"
                  placeholder="Patronus"
                />
              </label>
            </div>
          </div>
        </div>
        <div className="column   columns is-flex-direction-column">
          <div className="field column form__block">
            <label className="label">Address</label>
            <div className="control">
              <input
                required
                className="input"
                type="text"
                placeholder="Address"
                name="address"
              />
            </div>
          </div>
          <div className="field column form__block">
            <label className="label">Birth date</label>
            <div className="control">
              <input
                className="input"
                type="date"
                name="dateOfBirth"
                placeholder="Birth date"
              />
            </div>
          </div>
          <div className="field column form__block">
            <label className="label">Grade</label>
            <input
              className="input"
              type="number"
              name="grade"
              placeholder="Grade"
              min="1"
              max="7"
            />
          </div>
        </div>

        <div className="column  columns is-flex-direction-column">
          <div className="field column form__block">
            <label className="label">Gender</label>
            <div className="control">
              <label className="radio is-size-3">
                <input type="radio" name="gender" value="male" />
                🧙‍♂️
              </label>
              <label className="radio is-size-3">
                <input type="radio" name="gender" value="female" />
                🧙‍♀️
              </label>
            </div>
          </div>
          <div className="field column form__block">
            <label className="label">House</label>
            <div className="control">
              <label className="radio is-size-3">
                <input type="radio" name="house" value="Griffindor" />
                🦁
              </label>
              <label className="radio is-size-3">
                <input type="radio" name="house" value="Ravenclaw" />
                🦅
              </label>
              <label className="radio is-size-3">
                <input type="radio" name="house" value="Huffelpuff" />
                🦡
              </label>
              <label className="radio is-size-3">
                <input type="radio" name="house" value="Slythrien" />
                🐍
              </label>
            </div>
          </div>
          <div className="field column form__block">
            <label className="label">Ancestry</label>
            <div className="control">
              <label className="radio is-size-3">
                <input type="radio" name="ancestry" value="pure-blood" />
                <svg
                  width="30px"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill="red"
                    d="M12.61 2.21C12.25 1.93 11.75 1.93 11.39 2.21C9.49004 3.66 3.88003 8.39 3.91003 13.9C3.91003 18.36 7.54004 22 12.01 22C16.48 22 20.11 18.37 20.11 13.91C20.12 8.48 14.5 3.67 12.61 2.21Z"
                    stroke="#292D32"
                    stroke-width="1.5"
                    stroke-miterlimit="10"
                  />
                </svg>
              </label>
              <label className="radio is-size-3">
                <input type="radio" name="ancestry" value="half-blood" />
                <svg
                  width="30px"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke="#292D32"
                    stroke-width="1.5"
                    stroke-miterlimit="10"
                    d="M16.5885 7.41L6.30849 17.69C5.82849 18.17 5.00849 18.06 4.71849 17.45C4.19849 16.38 3.89849 15.17 3.89849 13.9C3.87849 8.38 9.47849 3.66 11.3785 2.21C11.7485 1.93 12.2485 1.93 12.6085 2.21C13.4785 2.87 15.1085 4.24 16.6385 6.04C16.9785 6.44 16.9585 7.04 16.5885 7.41Z"
                    fill="red"
                  />
                  <path
                    stroke="#292D32"
                    stroke-width="1.5"
                    stroke-miterlimit="10"
                    d="M20.1 13.9103C20.1 18.3703 16.47 22.0003 12 22.0003C10.21 22.0003 8.53996 21.4203 7.18996 20.4203C6.69996 20.0603 6.65996 19.3403 7.08996 18.9103L17.16 8.84026C17.63 8.37026 18.42 8.47026 18.74 9.05026C19.56 10.5603 20.11 12.2003 20.1 13.9103Z"
                    fill="transparent"
                  />
                </svg>
              </label>
              <label className="radio is-size-3">
                <input type="radio" name="ancestry" value="muggleborn" />
                <svg
                  width="30px"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12.61 2.21C12.25 1.93 11.75 1.93 11.39 2.21C9.49004 3.66 3.88003 8.39 3.91003 13.9C3.91003 18.36 7.54004 22 12.01 22C16.48 22 20.11 18.37 20.11 13.91C20.12 8.48 14.5 3.67 12.61 2.21Z"
                    stroke="#292D32"
                    stroke-width="1.5"
                    stroke-miterlimit="10"
                  />
                </svg>
              </label>
            </div>
          </div>
        </div>
      </div>
      <div className="columns is-variable is-1-mobile form__row">
        <div className="field column form__block">
          <label className="label">Portrait</label>
          <div className="file has-name is-boxed">
            <label className="file-label">
              <input className="file-input" type="file" name="portrait" />
              <span className="file-cta">
                <span className="file-icon">
                  <FontAwesomeIcon icon={faFileArrowUp} />
                </span>
                <span className="file-label">Choose a file…</span>
              </span>
              <span className="file-name">
                Screen Shot 2017-07-29 at 15.54.25.png
              </span>
            </label>
          </div>
        </div>
      </div>
      <div className="columns is-variable is-1-mobile form__row">
        <fieldset className="columns is-variable is-1-mobile form__fieldset">
          <legend className="form__fieldset-legend">Wand</legend>

          <div className="field column form__block">
            <label className="label">Wood</label>
            <div className="select">
              <select name="wandWood">
                <option value="vine1" selected>
                  vine1
                </option>
                <option value="vine2">vine2</option>
              </select>
            </div>
          </div>
          <div className="field column form__block">
            <label className="label">Core</label>
            <div className="select">
              <select name="wandCore">
                <option value="dragon heartstring1" selected>
                  dragon heartstring1
                </option>
                <option value="dragon heartstring2">dragon heartstring2</option>
              </select>
            </div>
          </div>
          <div className="field column form__block">
            <label className="label">Length</label>
            <div className="select">
              <select name="wandLength">
                <option value="14.1" selected>
                  14.1"
                </option>
                <option value="14.2">14.2</option>
              </select>
            </div>
          </div>
        </fieldset>
        <fieldset className="columns is-variable is-1-mobile form__fieldset p-4">
          <legend className="form__fieldset-legend">Marks</legend>

          <div className="  is-variable is-1-mobile">
            {subjectsAndMarksList?.map((rows) => {
              return (
                <div key={rows} className="subjects-row   columns">
                  <div className="field column">
                    <label className="label">Subject</label>
                    <div className="select">
                      <select name={rows}>
                        {subjectsArray.map((item) => {
                          return (
                            <option value={item} selected>
                              {item}
                            </option>
                          );
                        })}
                      </select>
                    </div>
                  </div>
                  <div className="field column">
                    <label className="label">Marks</label>
                    <div className="select">
                      <select name={rows}>
                        {marks.map((item) => {
                          return (
                            <option value={item} selected>
                              {item}
                            </option>
                          );
                        })}
                      </select>
                    </div>
                  </div>
                  <div className="field column">
                    <label className="label">Remove</label>

                    <button
                      type="button"
                      onClick={() => deleteSubject(rows)}
                      className="button is-danger is-light"
                    >
                      {" "}
                      <FontAwesomeIcon icon={faRectangleXmark} />
                    </button>
                  </div>
                </div>
              );
            })}

            <div className="field column">
              <button
                onClick={addSubject}
                type="button"
                className="button is-link"
              >
                Add New Subject
              </button>
            </div>
          </div>
        </fieldset>
      </div>

      <div className="field is-grouped">
        <div className="control">
          <button type="submit" className="button is-link">
            Submit
          </button>
        </div>
      </div>
    </form>
  );
};

export default AddNewStudent;
