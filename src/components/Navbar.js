import React, { useState } from 'react';
import { Menu } from 'semantic-ui-react';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [activeItem, setActiveItem] = useState('view_recipes');
  const navigate = useNavigate();

  const handleItemClick = (e, { name }) => {
    setActiveItem(name);
    navigate(name === 'create_recipe' ? '/create-recipe' : '/view-recipes');
  };

  return (
    <Menu 
      secondary
      attached="top"
      style={{
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', 
        position: 'sticky', 
        top: 0, 
        zIndex: 1000,
        backgroundColor: '#fff' 
      }}
    >
      <Menu.Item
        name='create_recipe'
        active={activeItem === 'create_recipe'}
        onClick={handleItemClick}
      >
        Crear Receta
      </Menu.Item>

      <Menu.Item
        name='view_recipes'
        active={activeItem === 'view_recipes'}
        onClick={handleItemClick}
      >
        Ver Recetas
      </Menu.Item>
    </Menu>
  );
};

export default Navbar;