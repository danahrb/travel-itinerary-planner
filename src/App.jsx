import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// src/App.jsx
import './App.css';

const App = () => {
  const travels = [
    { name: 'Reef Island', visited: true },
    { name: 'Arad Fort', visited: false },
    { name: 'Bahrain Fort', visited: true },
  ];

  return (
    <>
      <h1>Places List</h1>
      <ul>
        {travels.map((item, index) => (
          <li key={index} className={item.visited ? 'completed' : 'not-completed'}>
            {item.name}
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;