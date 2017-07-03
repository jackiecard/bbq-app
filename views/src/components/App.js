import React from 'react';
import { Link } from 'react-router';

const App = (props) => {
    return (
        <div>
            <h1>BBQ App</h1>
            { props.children }
        </div>
    )
}

export default App;
