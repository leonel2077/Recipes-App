import React, { useState } from 'react';
import { Box, Button, Card, CardContent, TextField, Typography } from '@mui/material';

const RegisterForm = ({ onRegister }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = (e) => {
    e.preventDefault();

    const users = JSON.parse(localStorage.getItem('users')) || [];
    const userExists = users.some(user => user.username === username);

    if (userExists) {
      alert('El usuario ya existe');
    } else {
      const newUser = { username, password };
      users.push(newUser);
      localStorage.setItem('users', JSON.stringify(users));
      alert('Usuario registrado con éxito');
      onRegister(username);
    }
  };

  return (
    <Box display="flex" justifyContent="center" marginTop={4}>
      <Card variant="outlined" style={{ width: '100%', maxWidth: '600px', boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)' }}>
        <CardContent>
          <Typography variant="h5" component="div" gutterBottom>
            Crear usuario
          </Typography>
          <form onSubmit={handleRegister}>
            <TextField
              fullWidth
              label="Nombre de usuario"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              margin="normal"
              required
            />
            <TextField
              fullWidth
              label="Contraseña"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              margin="normal"
              required
            />
            <Box display="flex" justifyContent="center" marginTop={2}>
              <Button type="submit" variant="contained" style={{ backgroundColor: '#808000', color: 'white' }}>
                Registrarse
              </Button>
            </Box>
          </form>
        </CardContent>
      </Card>
    </Box>
  );
};

export default RegisterForm;
