import React from 'react';
import { connect } from 'react-redux';
import * as signupActions from '../../actions/signupActions';

class SignupPage extends React.Component{
    constructor(props){
        super(props)
    }

    handleSignup(input){
        this.props.signupUser(input)
    }

    render(){
        let loginInput, passwordInput, confirmInput = null;

        return (
            <div>
                <h1>Sign Up</h1>
                <form onSubmit={ e =>{
                    e.preventDefault();

                    var input = {
                        email: loginInput.value,
                        password: passwordInput.value,
                        confirm: confirmInput.value
                    }

                    this.handleSignup(input)

                    e.target.reset();
                }}>
                    <label htmlFor="login">Login</label>
                    <input
                        type="text"
                        ref={ node => loginInput = node }
                        name="login" />

                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        ref={ node => passwordInput = node}
                        name="password" />

                    <label htmlFor="confirm-password">Confirm password</label>
                    <input
                        type="password"
                        ref={ node => confirmInput = node }
                        name="confirm-password" />

                    <button type="submit">Sign Up</button>
                </form>
            </div>
        )
    }
}

const mapStateRoProps = (state, ownProps) => {
    return state
}

const mapDispatchToProps = (dispatch) =>{
    return{
        signupUser: signupInput => dispatch(signupActions.signupUser(signupInput))
    }
}

export default connect(null, mapDispatchToProps)(SignupPage);
