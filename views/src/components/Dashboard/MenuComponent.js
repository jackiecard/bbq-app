import React from 'react';
import {Link} from 'react-router';

const MenuComponent = (props) => {

    return (
        <div className="menu-wrapper">
            <ul className="menu">
                <li><Link to="/dashboard">Dashboard</Link></li>
                <li><Link to="/register">Register new company</Link></li>
                <li><Link to="/purchase">New purchase</Link></li>
                <li><Link to="/myaccount">My account</Link></li>
                <li>Logout</li>
            </ul>
        </div>
    );
};

export default MenuComponent;
