import React from 'react';
import RecipeForm from '../components/RecipeForm';

const CreateRecipe = ({ onAddRecipe }) => {
  return (
    <div>
      <RecipeForm onSubmit={onAddRecipe} />
    </div>
  );
};

export default CreateRecipe;
