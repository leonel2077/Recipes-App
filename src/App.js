import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Navbar from "./components/Navbar";
import CreateRecipe from './pages/CreateRecipe';
import ViewRecipes from './pages/ViewRecipes';
import RegisterForm from './components/RegisterForm';
import LoginForm from './components/LoginForm';

function App() {
  const [recipes, setRecipes] = useState([]);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const loggedInUser = sessionStorage.getItem('loggedInUser');
    if (loggedInUser) {
      setUser(loggedInUser);
    }
  }, []);

  const handleAddRecipe = (recipe) => {
    setRecipes([...recipes, recipe]);
  };

  const handleRegister = (username) => {
    setUser(username);
  };

  const handleLogin = (username) => {
    setUser(username);
  };

  const handleLogout = () => {
    sessionStorage.removeItem('loggedInUser');
    setUser(null);
  };

  return (
    <Router>
      <Navbar user={user} onLogout={handleLogout} />

      {!user ? (
        <Routes>
          <Route path="/register" element={<RegisterForm onRegister={handleRegister} />} />
          <Route path="/login" element={<LoginForm onLogin={handleLogin} />} />
          <Route path="*" element={<Navigate to="/login" />} />
        </Routes>
      ) : (
        <>
          <Routes>
            <Route path="/create-recipe" element={<CreateRecipe onAddRecipe={handleAddRecipe} />} />
            <Route path="/view-recipes" element={<ViewRecipes recipes={recipes} />} />
            <Route path="*" element={<Navigate to="/view-recipes" />} />
          </Routes>
        </>
      )}
    </Router>
  );
}

export default App;
