import React from 'react';
import { Link } from 'react-router-dom';
import useFirebase from '../../hooks/useFirebase';
import './Header.css';

const Header = () => {
    const {user,logOut} = useFirebase();
    return (
        <div className='header'>
           <Link to='/home' className='link'>Home</Link>
           <Link to='/login' className='link'>Login</Link>
           <Link to='/register' className='link'>Registration</Link>
            <h2 className='user-name'> {user.email}</h2>
           {user.email && <button onClick={logOut}>Log Out</button>}
        </div>
    );
};

export default Header;