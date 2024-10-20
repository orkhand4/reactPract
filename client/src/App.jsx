import React, { useState } from "react";
import "./style.scss";

const App = () => {
  const students = [
    { name: "Yasaman", surname: "Mammadova", age: 22, isWorking: true, hasVisa: false },
    { name: "Jabbar", surname: "Jabbarli", age: 23, isWorking: false, hasVisa: true },
    { name: "Fatima", surname: "Ahmadova", age: 22, isWorking: true, hasVisa: true },
    { name: "Fuad", surname: "Mikayilzada", age: 18, isWorking: false, hasVisa: false },
    { name: "Orkhan", surname: "Aliyev", age: 28, isWorking: false, hasVisa: true },
    { name: "Elkhan", surname: "Maharramli", age: 19, isWorking: true, hasVisa: true },
  ];

  const [search, setSearch] = useState({ name: "", surname: "", age: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSearch(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const filteredStudents = students.filter(student => 
    student.name.toUpperCase().includes(search.name.toUpperCase()) &&
    student.surname.toUpperCase().includes(search.surname.toUpperCase()) &&
    student.age.toString().includes(search.age)
  );

  return (
    <div className="page">
      <input
        name="name"
        onChange={handleChange}
        type="text"
        placeholder="Search by name..."
      />
      <input
        name="surname"
        onChange={handleChange}
        type="text"
        placeholder="Search by surname..."
      />
      <input
        name="age"
        onChange={handleChange}
        type="text"
        placeholder="Search by age..."
      />
      <section className="demo">
        <div className="calculator-wrapper">
          {filteredStudents.map((item, index) => (
            <div className="workerCard" key={index}>
              <h2>Full Name: {item.name} {item.surname}</h2>
              <h2>Is Working: {item.isWorking ? "Yes" : "No"}</h2>
              <h2>Has Visa: {item.hasVisa ? "Yes" : "No"}</h2>
              <h2>Age: {item.age}</h2>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default App;
