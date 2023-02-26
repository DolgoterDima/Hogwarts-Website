/*
import Parse from "parse/dist/parse.min";
const fetchAllCars = () => {
  const query = new Parse.Query("B4aVehicle");
  //query.equalTo("make", "Ponty"); // exact search
  return query
    .find()
    .then((results) => {
      console.log("Результаты запроса:", results);
      return results;
    })
    .catch((error) => {
      console.error("Ошибка при выполнении запроса:", error);
    });
};

const setAllCars = async () => {
  const Car = Parse.Object.extend("B4aVehicle");
  const car = new Car();
  car.set("make", "Toyota");
  car.set("model", "Corolla");
  car.set("year", 2021);

  try {
    const newCar = await car.save();
    console.log("Новая запись добавлена в базу данных:", newCar);
  } catch (error) {
    console.error("Ошибка при добавлении новой записи:", error);
  }
};

export { fetchAllCars, setAllCars };
*/
