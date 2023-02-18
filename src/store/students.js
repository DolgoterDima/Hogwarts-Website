const fakeStudents = [
  {
    id: 1,
    name: "Leanne Graham",
    email: "Sincere@april.biz",
    address: "Kulas Light",
    phone: "1-770-736-8031 x56442",
  },
  {
    id: 2,
    name: "Ervin Howell",
    username: "Antonette",
    email: "Shanna@melissa.tv",
    address: "Kulas Light",
    phone: "1-770-736-8031 x56442",
  },
];

/*https://jsonplaceholder.typicode.com/users*/

const studentsActions = {
  ADD_STUDENT: "ADD_STUDENT",
};
const studentsReducer = (state = fakeStudents, action) => {
  /* set state arg by default*/

  switch (action.type) {
    case studentsActions.ADD_STUDENT: {
      return [...state, action.payload];
    }

    default:
      return state;
  }
};

export { studentsActions, studentsReducer };
