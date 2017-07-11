import React from 'react';
import { Link } from 'react-router';

const App = (props) => {
    return (
        <div>
            <div><div className="logo"></div> <span className="app-name">BBQ App</span></div>
            { props.children }
        </div>
    )
}

export default App;
