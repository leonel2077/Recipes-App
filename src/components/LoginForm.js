import React, { useState } from 'react';
import { Box, Button, Card, CardContent, TextField, Typography } from '@mui/material';

const LoginForm = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();

    const users = JSON.parse(localStorage.getItem('users')) || [];
    const user = users.find(user => user.username === username && user.password === password);

    if (user) {
      sessionStorage.setItem('loggedInUser', username);
      onLogin(username);
    } else {
      alert('Credenciales incorrectas');
    }
  };

  return (
    <Box display="flex" justifyContent="center" marginTop={4}>
      <Card variant="outlined" style={{ width: '100%', maxWidth: '600px', boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)' }}>
        <CardContent>
          <Typography variant="h5" component="div" gutterBottom>
            Iniciar Sesión
          </Typography>
          <form onSubmit={handleLogin}>
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
                Iniciar sesión
              </Button>
            </Box>
          </form>
        </CardContent>
      </Card>
    </Box>
  );
};

export default LoginForm;
