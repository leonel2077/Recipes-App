import React from 'react';
import { Container } from 'semantic-ui-react';
import RecipeForm from '../components/RecipeForm';

const CreateRecipe = () => {
  const handleRecipeSubmit = (recipe) => {
    // Aca va a ir la logica para guardarlo en el localstorage
    console.log(recipe);
  };

  return (
    <Container textAlign="center" style={{ marginTop: '2em' }}>
      <h1>Crear Nueva Receta</h1>
      <RecipeForm onSubmit={handleRecipeSubmit} />
    </Container>
  );
};

export default CreateRecipe;
