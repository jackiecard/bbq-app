import React from 'react';
import { connect } from 'react-redux';
import {Link} from 'react-router';
import * as loginActions from '../../actions/loginActions';

class LoginPage extends React.Component{
    constructor(props){
        super(props)
    }

    handleLogin(input){
        this.props.login(input)
    }

    render() {
        let loginInput, passwordInput = null;
        return (
            <div>
                <h1>Login</h1>
                <form onSubmit={ e =>{
                    e.preventDefault();

                    var input = {
                        email: loginInput.value,
                        password: passwordInput.value
                    }

                    this.handleLogin(input)

                    e.target.reset();
                }}>
                    <label htmlFor="login">Login</label>
                    <input type="text"
                           ref={ node => loginInput = node }
                           name="login" />

                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        ref={ node => passwordInput = node}
                        name="password" />

                    <Link to="/signup">Nova Conta</Link>
                    <button type="submit">Login</button>
                </form>
            </div>
        )
    }
}


const mapStateToProps = (state, ownProps) => {
    return state
}

const mapDispatchToProps = (dispatch) =>{
    return{
        login: loginInput => dispatch(loginActions.login(loginInput))
    }
}

export default connect(null, mapDispatchToProps)(LoginPage);
