import { useState } from 'react';
//import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.scss';
import Header from "./components/Header/Header.jsx";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Header />
      </div>
    </>
  )
}

export default App
