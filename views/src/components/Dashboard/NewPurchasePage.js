import React from 'react'
import { connect } from 'react-redux'
import MenuComponent from './MenuComponent'
import {default as UUID} from "node-uuid"
import * as companyActions from '../../actions/companyActions'
import * as itemActions from '../../actions/itemActions'
import * as cartActions from '../../actions/cartActions'

class NewPurchasePage extends React.Component{
    constructor(props){
        super(props)
        this.props.actions.createCart()
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
    generateProductsOptions(products){
        if(!products){
            return
        }
        return products.map(product => {
            return <option key={ product } value={ product }>{ product }</option>
        })
    }

    generateRows() {
        console.log(this.props.companies)
        if(!this.props.items[0]){
            return <tr><td></td><td>nothing to show yet.</td><td></td></tr>
        }

        var data = this.props.items;

        return data.map(item => {
            var itemKey = UUID.v4()
            return <tr key={ itemKey }>
                        <td>{ item.name }</td>
                        <td>{ item.quantity }</td>
                        <td><button>Remove</button></td>
                    </tr>});
    }

    handleCompanyChange(e){
        console.log(e.target.value)
        this.props.actions.updateCartCompany(e.target.value)
    }

    handleAddItem(name, quantity){
        var item = { name: name, quantity: quantity }
        this.props.actions.addItem(item)
    }

    render(){
        var companyInput = null
        let products = [ 'Bread', 'Beer', 'Meat', 'Chocolate', 'Tomatoes', 'Sausage' ]
        // var itemsTable = [];
        var nameInput = null;
        var quantityInput = 1;

        return (
            <div>
                <MenuComponent />
                <h1>New Purchase</h1>

                <form onSubmit={ e =>{
                    e.preventDefault();

                    this.handleAddPurchandeToCompany(companyInput)

                    e.target.reset();
                 }}>
                    <select ref={ node => companyInput = node } onChange={this.handleCompanyChange}>
                        { this.generateCompanyOptions() }
                    </select>

                    {/*
                            Add Items
                    */}

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

            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
                companies: state.company.list,
                items: state.item.list,
                cart: state.cart
            }
}

const mapDispatchToProps = (dispatch) =>{
    return{
        actions: {
            addPurchaseToSelectedCompany: updatedCompany => dispatch(companyActions.addPurchaseToCompany(updatedCompany)),
            addItem: item => dispatch(itemActions.addItem(item)),
            createCart: () => dispatch(cartActions.createCart()),
            updateCartCompany: companyId => dispatch(cartActions.updateCartCompany(companyId))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NewPurchasePage);
