import React, { createContext, useReducer, useEffect } from 'react';

export const RecipeContext = createContext();

const recipeReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_RECIPE':
      return [...state, action.payload];
    case 'REMOVE_RECIPE':
      return state.filter((recipe, index) => index !== action.payload);
    default:
      return state;
  }
};

export const RecipeProvider = ({ children }) => {
  const [recipes, dispatch] = useReducer(recipeReducer, [], () => {
    const localData = localStorage.getItem('recipes');
    return localData ? JSON.parse(localData) : [];
  });

  useEffect(() => {
    localStorage.setItem('recipes', JSON.stringify(recipes));
  }, [recipes]);

  return (
    <RecipeContext.Provider value={{ recipes, dispatch }}>
      {children}
    </RecipeContext.Provider>
  );
};
