import React, { useState } from 'react';
import { Form, Button, Container, Image } from 'semantic-ui-react';

const RecipeForm = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ name, description, image });
    setName('');
    setDescription('');
    setImage(null);
    setImagePreview(null);
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
    setImagePreview(URL.createObjectURL(file));
  };

  return (
    <Container textAlign="center" style={{ marginTop: '2em' }}>
      <Form onSubmit={handleSubmit} style={{ maxWidth: '500px', margin: '0 auto' }}>
        <Form.Input
          label="Nombre de la Receta"
          placeholder="Nombre"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          width={16}
        />
        <Form.TextArea
          label="Descripción"
          placeholder="Describe los detalles de la receta..."
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
        <Form.Input
          type="file"
          label="Imagen de la Receta"
          accept="image/*"
          onChange={handleImageChange}
        />
        
        {imagePreview && (
          <Image src={imagePreview} size="medium" centered style={{ marginTop: '1em' }} />
        )}

        <Button type="submit" primary centered style={{ marginTop: '1em'}}>
          Crear Receta
        </Button>
      </Form>
    </Container>
  );
};

export default RecipeForm;
