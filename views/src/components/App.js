import React from 'react';
import { Link } from 'react-router';

const App = (props) => {
    return (
        <div>
            <div className="logo"></div>
            { props.children }
        </div>
    )
}

export default App;
