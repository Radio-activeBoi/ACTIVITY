    const sectionA = ["Anna", "Brian", "Charlie"];
const sectionB = ["Diana", "Ethan"];

const car = {
  brand: "Toyota",
  model: "Corolla",
  year: 2020,
  owner: {
    name: "Alex",
    age: 30,
  },
};

const grades = [75, 80, 90];

  const  allStudents = [...sectionA, ...sectionB, "Faith"];
  console.log("All Students:" , allStudents);

  
const { brand, model, year, owner: { name, age } } = car;
console.log("Car: " + brand + " " + model + " (" + year + ")");
console.log("Owner: " + name + ", Age: " + age);

const updatedGrades = grades.map(grade => grade + 5);
console.log("Updated Grades:", updatedGrades);