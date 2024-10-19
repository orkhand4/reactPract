import React, { useState } from "react";

const App = () => {
  const [debt, setDebt] = useState(0);

  function demo(e) {
    let num = e.target.value 
    setDebt(num)
  }

  return (
    <div>
      <h1>Fuadin aci Sigorta hekayesi</h1>

      <input onChange={demo} placeholder="debt" />

      <h2>Borc: {debt}</h2>
    </div>
  );
};

export default App;
