import React, { useState } from 'react'

const App = () => {

  const [name, setName] = useState('Fuad Mikayilzade');
  // getValue, setName, initialName

  const demo = () => {
    setName('Fatya Ahmedova')
  }

  return (

    <div>
      <h1>Fuadin aci hekayesi</h1>
      <h2>Rollarda: {name}</h2>
      <button onClick={demo}>Rollari deyish</button>
    </div>
  )
}

export default App
