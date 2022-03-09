import React from 'react';
import useFirebase from '../../hooks/useFirebase';

const Home = () => {
    const {user} =useFirebase();
    return (
        <div>
            <h1>This is {user.displayName}</h1>
        </div>
    );
};

export default Home;