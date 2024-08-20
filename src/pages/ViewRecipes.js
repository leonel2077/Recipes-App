import React, { useState } from 'react';
import RecipeList from '../components/RecipeList';
import { Container, Typography } from '@mui/material';

const ViewRecipes = () => {
  const [recipes, setRecipes] = useState([
    { id: 1, name: 'Receta 1', description: 'Descripción de la Receta 1' },
    { id: 2, name: 'Receta 2', description: 'Descripción de la Receta 2' },
  ]);

  const handleDelete = (id) => {
    setRecipes((prevRecipes) => prevRecipes.filter((recipe) => recipe.id !== id));
  };

  return (
    <Container sx={{ marginTop: '2em' }}>
      <Typography variant="h4" align="center" gutterBottom>
        Lista de Recetas
      </Typography>
      <RecipeList recipes={recipes} onDelete={handleDelete} />
    </Container>
  );
};

export default ViewRecipes;
