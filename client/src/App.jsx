import React, { useState } from 'react';
import './style.scss'

const App = () => {

  const students = [
    {
      name: 'Yasemen',
      surname: 'Memmedova',
      age: 22,
      isWorking: true,
      hasVisa: false,
    },
    {
      name: 'Jabbar',
      surname: 'Jabbarli',
      age: 23,
      isWorking: false,
      hasVisa: true,
    },
    {
      name: 'Fatime',
      surname: 'Ehmedova',
      age: 21,
      isWorking: true,
      hasVisa: true,
    },
    {
      name: 'Fuad',
      surname: 'Mikayilzade',
      age: 18,
      isWorking: false,
      hasVisa: false,
    },
    {
      name: 'Orxan',
      surname: 'Eliyev',
      age: 28,
      isWorking: false,
      hasVisa: true,
    },
    {
      name: 'Elxan',
      surname: 'Meherremli',
      age: 19,
      isWorking: true,
      hasVisa: true,
    },
  ];

  const [search, setSearch] = useState('')
  
  const inptChange = (e) => {
    setSearch(e.target.value)
  };

  return (
    <div className="page">

      
      <input
        onChange={inptChange}
        type="text"
        placeholder="Find..."
      />


      <section className="demo">
        <div className="calculator-wrapper">
          {students.filter(item=> item.name.toUpperCase().includes(search.toUpperCase())).map((item, index) => {
            return (
              <div className="workerCard">
                <h2>
                  FulName: {item.name} {item.surname}
                </h2>
                <h2>Is working: {item.isWorking} </h2>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default App;