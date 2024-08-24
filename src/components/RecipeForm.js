import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Button, Card, CardContent, TextField, Typography, TextareaAutosize } from '@mui/material';
import { RecipeContext } from '../contexts/RecipeContext';

const RecipeForm = () => {
  const { dispatch } = useContext(RecipeContext);
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: 'ADD_RECIPE', payload: { name, description } });
    setName('');
    setDescription('');
    navigate('/view-recipes');
  };

  return (
    <Box display="flex" justifyContent="center" marginTop={4}>
      <Card variant="outlined" style={{ width: '100%', maxWidth: '600px', boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)' }}>
        <CardContent>
          <Typography variant="h5" component="div" gutterBottom>
            Crear Receta
          </Typography>
          <form onSubmit={handleSubmit}>
            <TextField
              fullWidth
              label="Nombre de la Receta"
              value={name}
              onChange={(e) => setName(e.target.value)}
              margin="normal"
              required
            />
            <TextareaAutosize
            minRows={4}
            placeholder="Descripción de la receta"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            style={{ width: '100%', margin: '16px 0', borderRadius: '4px', borderColor: 'rgba(0, 0, 0, 0.23)' }}
          />
            <Box display="flex" justifyContent="center" marginTop={2}>
              <Button type="submit" variant="contained" style={{ backgroundColor: '#808000', color: 'white' }}>
                Crear Receta
              </Button>
            </Box>
          </form>
        </CardContent>
      </Card>
    </Box>
  );
};

export default RecipeForm;
