import React from 'react'
import { connect } from 'react-redux'
import MenuComponent from './MenuComponent'
import * as companyActions from '../../actions/companyActions'

class RegisterPage extends React.Component{
    constructor(props){
        super(props)
    }

    handleRegister(input){
        this.props.registerCompany(input)
    }

    render(){
        let cnpjInput, nameInput = null
        return (
            <div>
                <MenuComponent />
                <h1>Register New Company</h1>
                <form onSubmit={ e =>{
                    e.preventDefault();

                    var input = {
                        cnpj: cnpjInput.value,
                        name: nameInput.value
                    }

                    this.handleRegister(input)

                    e.target.reset();
                }}>
                    <label htmlFor="cnpj">CNPJ</label>
                    <input type="text"
                           ref={ node => cnpjInput = node }
                           name="cnpj" />

                    <label htmlFor="name">Name</label>
                    <input
                        type="name"
                        ref={ node => nameInput = node}
                        name="name" />

                    <button type="submit">Register</button>
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
        registerCompany: companyInput => dispatch(companyActions.registerCompany(companyInput))
    }
}

export default connect(null, mapDispatchToProps)(RegisterPage);
