import React from 'react';
import {Link} from 'react-router';

class LoginPage extends React.Component{
    constructor(props){
        super(props)
    }

    render() {
        return (
            <div>
                <h1>Login</h1>
                <form>
                    <label htmlFor="login">Login</label>
                    <input type="text" name="login" />

                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" />

                    <Link to="/signup">Nova Conta</Link>
                    <button type="submit">Login</button>
                </form>
            </div>
        )
    }
}

export default LoginPage;
