import React from 'react'
import { connect } from 'react-redux'
import MenuComponent from './MenuComponent'
import {default as UUID} from "node-uuid"
import * as companyActions from '../../actions/companyActions'
import * as cartActions from '../../actions/cartActions'

class NewPurchasePage extends React.Component{
    constructor(props){
        super(props)
    }

    generateCompanyOptions(){
        if(!this.props.companies.length){
            return
        }
        var data = this.props.companies;

        return data.map(company => {
            return <option key={ company.SUCCESS.cnpj } value={ company.SUCCESS.cnpj }>{ company.SUCCESS.name }</option>
        })
    }
    generateProductsOptions(products){
        if(!products){
            return
        }
        return products.map(product => {
            return <option key={ product } value={ product }>{ product }</option>
        })
    }

    generateRows() {
        if(!this.props.cart.itemsList[0]){
            return <tr><td></td><td>nothing to show yet.</td><td></td></tr>
        }

        var data = this.props.cart.itemsList;

        return data.map(item => {
            var itemKey = UUID.v4()
            return <tr key={ itemKey }>
                        <td>{ item.name }</td>
                        <td>{ item.quantity }</td>
                        <td><button onClick={(e) => {
                                e.preventDefault();
                                this.handleRemoveItem(item.name, item.quantity)
                            }}>Remove</button></td>
                    </tr>});
    }

    handleAddPurchandeToCompany(companyId){
        this.props.actions.updateCartCompany(companyId)
    }

    handleAddItem(name, quantity){
        var item = { name: name, quantity: quantity }
        this.props.actions.addItemToCart(item)
    }

    handleRemoveItem(name, quantity){
        var item = { name: name, quantity: quantity }
        this.props.actions.removeItemToCart(item)
    }

    render(){
        var companyInput = null
        let products = [ 'Bread', 'Beer', 'Meat', 'Chocolate', 'Tomatoes', 'Sausage' ]

        var nameInput = null
        var quantityInput = 1
        let partial;

        if(!this.props.companies.length){
            partial = <div>Better register a company first ;)</div>
        }
        else{
            partial =

                <form onSubmit={ e =>{
                    e.preventDefault();
                    console.log(companyInput.value)

                    this.handleAddPurchandeToCompany(companyInput.value)

                    e.target.reset();
                 }}>
                    <select ref={ node => companyInput = node }>
                        { this.generateCompanyOptions() }
                    </select>

                    {/*
                            Add Items
                    */}
                    <div className="add-item">
                        <select ref={ node => nameInput = node }>
                            { this.generateProductsOptions(products) }
                        </select>

                        <label htmlFor="email">Qt:</label>
                        <input type="number"
                               min="1"
                               defaultValue="1"
                               ref={ node => quantityInput = node }
                               name="quantity" />

                        <button onClick={(e) => {
                                e.preventDefault();
                                this.handleAddItem(nameInput.value, quantityInput.value)
                            }}>Add</button>
                    </div>

                    {/*
                            List of Added Items
                    */}

                    <h4>List of Items</h4>
                    <div>
                        <table className="items-table">
                            <tbody>
                                { this.generateRows() }
                            </tbody>
                        </table>
                    </div>

                    <button type="submit">Purchase</button>
                </form>

        }

        return (
            <div>
                <MenuComponent />
                <h1>New Purchase</h1>

                { partial }


            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
                companies: state.company.list,
                cart: state.cart
            }
}

const mapDispatchToProps = (dispatch) =>{
    return{
        actions: {
            addItemToCart: item => dispatch(cartActions.addItemToCart(item)),
            removeItemToCart: item => dispatch(cartActions.removeItemFromCart(item)),
            updateCartCompany: companyId => dispatch(cartActions.updateCartCompany(companyId))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NewPurchasePage);
