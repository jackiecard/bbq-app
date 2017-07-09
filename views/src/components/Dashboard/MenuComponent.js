import React from 'react';
import {Link} from 'react-router';

const MenuComponent = (props) => {

    return (
        <div>
            <ul>
                <li><Link to="/dashboard">Dashboard</Link></li>
                <li><Link to="/register">Register new company</Link></li>
                <li>New purchase</li>
                <li><Link to="/myaccount">My account</Link></li>
                <li>Logout</li>
            </ul>
        </div>
    );
};

export default MenuComponent;
