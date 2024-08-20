import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from "./components/Navbar";
import CreateRecipe from './pages/CreateRecipe';
import ViewRecipes from './pages/ViewRecipes';

function App() {
  const [recipes, setRecipes] = useState([]);

  const handleAddRecipe = (recipe) => {
    setRecipes([...recipes, recipe]);
  };

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/create-recipe" element={<CreateRecipe onAddRecipe={handleAddRecipe} />} />
        <Route path="/view-recipes" element={<ViewRecipes recipes={recipes} />} />
      </Routes>
    </Router>      
  );
}

export default App;
