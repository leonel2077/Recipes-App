import React, { useContext } from 'react';
import { RecipeContext } from '../contexts/RecipeContext';
import RecipeItem from './RecipeItem';
import { Grid } from '@mui/material';

const RecipeList = () => {
  const { recipes } = useContext(RecipeContext);

  return (
    <>
      <Grid container spacing={3}>
        {recipes.map((recipe, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <RecipeItem recipe={recipe} index={index} />
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default RecipeList;
