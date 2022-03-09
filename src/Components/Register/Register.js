import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div>
        <h2>Please Register</h2>
        <input type="text" placeholder='Email' />
        <br />
        <input type="password"  placeholder='Password'/>
        <br />
        <input type="submit" value="submit" />
        <br />
        <Link to='/login'>Already Registered?</Link>
    </div>
    );
};

export default Register;