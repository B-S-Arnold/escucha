
import React from 'react';
import { NavLink } from 'react-router-dom';
import LogoutButton from './auth/LogoutButton';

const NavBar = () => {
  return (
    <nav className='nav'>
      
          <NavLink className='navlink' to='/' exact={true} activeClassName='active'>
            Home
          </NavLink>
        
          <NavLink className='navlink' to='/login' exact={true} activeClassName='active'>
            Login
          </NavLink>
        
          <NavLink className='navlink' to='/sign-up' exact={true} activeClassName='active'>
            Sign Up
          </NavLink>
        
          <NavLink className='navlink' to='/users' exact={true} activeClassName='active'>
            Users
          </NavLink>
       
          <LogoutButton />
        
    </nav>
  );
}

export default NavBar;
