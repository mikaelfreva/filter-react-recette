import React from 'react';
import './App.css'
import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home/Home"
import Button from "./Components/Button/Button"
import ShowRecipe from "./Components/ShowRecipe/ShowRecipe"

function App() {
  return (
    <>

      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/recette/:id" element={<ShowRecipe/>} />
      </Routes>
    </>
  );
}

export default App;
