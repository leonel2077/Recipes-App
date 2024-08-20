import React, { useContext } from 'react';
import { RecipeContext } from '../contexts/RecipeContext';
import { Card, CardContent, Typography, IconButton} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

const RecipeItem = ({ recipe, index }) => {
  const { dispatch } = useContext(RecipeContext);

  const handleDelete = () => {
    dispatch({ type: 'REMOVE_RECIPE', payload: index });
  };

  return (
    <Card variant="outlined" style={{ boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)', position: 'relative' }}>
      <IconButton
        onClick={handleDelete}
        style={{ position: 'absolute', top: 8, right: 8 }}
        aria-label="delete"
      >
        <CloseIcon />
      </IconButton>
      <CardContent>
        <Typography variant="h5">{recipe.name}</Typography>
        <Typography variant="body2" color="textSecondary">
          {recipe.description}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default RecipeItem;
