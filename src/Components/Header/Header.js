import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <div className='header'>
           <Link to='/home' className='link'>Home</Link>
           <Link to='/login' className='link'>Login</Link>
           <Link to='/register' className='link'>Registration</Link>
        </div>
    );
};

export default Header;