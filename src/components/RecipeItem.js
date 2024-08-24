import React, { useContext } from 'react';
import { RecipeContext } from '../contexts/RecipeContext';
import { Card, CardContent, Typography, IconButton, Box} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';


const RecipeItem = ({ recipe, index }) => {
  const { dispatch } = useContext(RecipeContext);

  const handleDelete = () => {
    dispatch({ type: 'REMOVE_RECIPE', payload: index });
  };

  return (
    <Card 
      variant="outlined" 
      style={{ 
        boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)', 
        position: 'relative', 
        marginBottom: '16px',
        maxHeight: '300px',
        overflow: 'auto',   
      }}
    >
      <Box style={{ position: 'absolute', top: 8, right: 8 }}>
        <IconButton onClick={handleDelete} aria-label="delete">
          <CloseIcon />
        </IconButton>
      </Box>
      <CardContent>
        <Typography variant="h5" gutterBottom>
          {recipe.name}
        </Typography>
        <Typography 
          variant="body1" 
          color="textPrimary" 
          style={{ 
            whiteSpace: 'pre-wrap', 
            wordWrap: 'break-word' 
          }}
        >
          {recipe.description}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default RecipeItem;
