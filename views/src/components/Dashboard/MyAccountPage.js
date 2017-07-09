import React from 'react'
import { connect } from 'react-redux'
import MenuComponent from './MenuComponent'
import * as loginActions from '../../actions/loginActions'

class MyAccountPage extends React.Component{
    constructor(props){
        super(props)
    }

    handleSettings(input){
        let userInput = {
            id: this.props.userId,
            params: input
        }
        this.props.changeAccountSettings(userInput)
    }

    render(){
        let emailInput, passwordInput = null
        return (
            <div>
                <MenuComponent />
                <h1>My Account</h1>
                <form onSubmit={ e =>{
                    e.preventDefault();

                    var input = {
                        email: emailInput.value,
                        password: passwordInput.value
                    }

                    this.handleSettings(input)

                    e.target.reset();
                }}>
                    <label htmlFor="email">Email</label>
                    <input type="text"
                           ref={ node => emailInput = node }
                           name="email" />

                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        ref={ node => passwordInput = node}
                        name="password" />

                    <button type="submit">Submit</button>
                </form>
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return { userId: state.login.AUTHENTICATED._id }
}

const mapDispatchToProps = (dispatch) =>{
    return{
        changeAccountSettings: userInput => dispatch(loginActions.changeAccountSettings(userInput))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MyAccountPage);
