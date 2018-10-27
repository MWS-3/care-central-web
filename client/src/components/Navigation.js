import React from 'react';
import {NavLink} from 'react-router-dom';

const Navigation = () => {
  return (
    <div>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/results">Results</NavLink>
    </div>
  )
}

export default Navigation;