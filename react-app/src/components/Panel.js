
import React from 'react';
import { NavLink } from 'react-router-dom';
import LogoutButton from './auth/LogoutButton';

const Panel = () => {
    return (
        <div className='pan'>
            
                    <NavLink className='panlink' to='/' exact={true} activeClassName='active'>
                        Home
                    </NavLink>
                
                    <NavLink className='panlink' to='/login' exact={true} activeClassName='active'>
                        Login
                    </NavLink>
                
                    <NavLink className='panlink' to='/sign-up' exact={true} activeClassName='active'>
                        Sign Up
                    </NavLink>
                
                    <NavLink className='panlink' to='/users' exact={true} activeClassName='active'>
                        Users
                    </NavLink>
                
                    <LogoutButton />
               
        </div>
    );
}

export default Panel;
