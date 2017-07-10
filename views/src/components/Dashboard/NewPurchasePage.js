import React from 'react'
import { connect } from 'react-redux'
import MenuComponent from './MenuComponent'
import ItemPurchasePage from './ItemPurchasePage'

class NewPurchasePage extends React.Component{
    constructor(props){
        super(props)
    }

    handleCompanyChange(e){

        console.log(e.target.value)
    }

    generateCompanyOptions(){
        if(!this.props.companies){
            return
        }

        var data = this.props.companies;

        return data.map(company => {
            return <option key={ company.SUCCESS.cnpj } value={ company.SUCCESS.cnpj }>{ company.SUCCESS.name }</option>
        })

    }

    render(){

        return (
            <div>
                <MenuComponent />
                <h1>New Purchase</h1>

                <ItemPurchasePage />

                <form onSubmit={ e =>{
                    e.preventDefault();

                    e.target.reset();
                }}>
                    <select onChange={this.handleCompanyChange}>
                        { this.generateCompanyOptions() }
                    </select>

                    <button type="submit">Purchase</button>
                </form>
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return { companies: state.company.list}
}

const mapDispatchToProps = (dispatch) =>{
    return{
        // addItemName: userInput => dispatch(loginActions.addItemName(userInput))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NewPurchasePage);
