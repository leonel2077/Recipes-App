import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from "./components/Navbar";
import CreateRecipe from './pages/CreateRecipe';
import ViewRecipes from './pages/ViewRecipes';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/create-recipe" element={<CreateRecipe />} />
        <Route path="/view-recipes" element={<ViewRecipes />} />
      </Routes>
    </Router>      
  );
}

export default App;
