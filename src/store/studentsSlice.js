import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import Parse from "parse/dist/parse.min";

//for async  createAsyncThunk

export const addStudentToDB = createAsyncThunk(
  "students/addStudentToDB",
  async (formData) => {
    const student = new Parse.Object("students");

    //add all inputs to object to send
    let subjectsObj = {};
    for (const [key, value] of formData.entries()) {
      if (key.startsWith("subject_")) {
        subjectsObj[value] = formData.get(key);
      } else {
        student.set(key, value);
      }
    }

    //rewrite to actual formats
    const file = formData.get("portrait");
    const name = file.name;
    student.set("portrait", new Parse.File(name, file));

    student.set("wand", {
      wood: formData.get("wandWood"),
      core: formData.get("wandCore"),
      length: formData.get("wandLength"),
    });

    student.set("marks", subjectsObj);

    try {
      const newStudent = await student.save();
      console.log("Новая запись добавлена в базу данных:", student);
    } catch (error) {
      console.error("Ошибка при добавлении новой записи:", error);
    }
  }
);

export const fetchStudents = createAsyncThunk(
  "students/fetchStudents",
  async () => {
    const query = new Parse.Query("students");
    //query.equalTo("make", "Ponty"); // exact search
    return await query.find();
    /*   .then((results) => {
        console.log("Результаты запроса:", results);
      })
      .catch((error) => {
        console.error("Ошибка при выполнении запроса:", error);
      });*/
  }
);

const studentsSlice = createSlice({
  name: "students",
  initialState: {
    allStudents: [],
    fetchStudentsStatus: null,
  },

  reducers: {
    deleteStudent(state, action) {},
    addStudent({ allStudents }, { payload }) {
      allStudents.push(payload);
    },
  },
  extraReducers: {
    //for async
    [addStudentToDB.fulfilled]: (state, action) => {
      console.log("setCars action", action);
    },
    [fetchStudents.pending]: (state) => {
      state.fetchStudentsStatus = "loading";
    },
    [fetchStudents.fulfilled]: (state, { payload }) => {
      state.fetchStudentsStatus = "resolved";
      /*  const fillEmptyImages = payload.map((item) => {
        return {
          ...item,
          image:
            item.image ||
            "https://i.pinimg.com/originals/6f/e6/83/6fe683d1b0c6d53cef3f4377e3a3f520.jpg",
        };
      });*/
      console.log("payloadpayload", payload);
      /*  state.allStudents = payload;*/
    },
    [fetchStudents.rejected]: (state, action) => {},
  },
});

export const { fetchAllStudents, deleteStudent, addStudent } =
  studentsSlice.actions;

export default studentsSlice.reducer;
