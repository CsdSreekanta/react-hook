import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='bg-blue-500 p-3 font-bold text-xl text-white'>
            <nav>
                <Link className='mr-16' to="/"> Main</Link>
                <Link to="/volunteers">Volunteers</Link>
            </nav>
        </div>
    );
};

export default Header;