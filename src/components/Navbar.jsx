import React, { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

const Navbar = () => {
  const { toggleTheme } = useContext(ThemeContext);
  return (
    <div style={{ padding: '10px', background: '#ddd' }}>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  );
};

export default Navbar;
