import React from 'react'
import { connect } from 'react-redux'
import {default as UUID} from "node-uuid"
import * as itemActions from '../../actions/itemActions'

class ItemPurchasePage extends React.Component{
    constructor(props){
        super(props)
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
        if(!this.props.items[0]){
            return <tr>
                        <td></td>
                        <td>nothing to show yet.</td>
                        <td></td>
                    </tr>
        }

        var data = this.props.items;

        return data.map(item => {
            var itemKey = UUID.v4()
            return <tr key={ itemKey }>
                        <td>{ item.name }</td>
                        <td>{ item.quantity }</td>
                        <td><button>Remove</button></td>
                    </tr>
        });
    }

    handleAddItem(itemInput){
        this.props.actions.addItem(itemInput)
    }

    render(){

        let products = [ 'Bread', 'Beer', 'Meat', 'Chocolate', 'Tomatoes', 'Sausage' ]

        var nameInput = null;
        var quantityInput = 1;

        return (

            <div>
                <form className="items-form" onSubmit={ e =>{
                    e.preventDefault();

                    var itemInput = {
                        name: nameInput.value,
                        quantity: quantityInput.value
                    }

                    this.handleAddItem(itemInput)

                    e.target.reset();
                }}>

                    <select ref={ node => nameInput = node }>
                        { this.generateProductsOptions(products) }
                    </select>

                    <label htmlFor="email">Qt:</label>
                    <input type="number"
                           min="1"
                           defaultValue="1"
                           ref={ node => quantityInput = node }
                           name="quantity" />

                    <button type="submit">Add</button>
                </form>

                <h4>List of Items</h4>
                <div>
                    <table className="items-table">
                        <tbody>
                            { this.generateRows() }
                        </tbody>
                    </table>
                </div>

            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return state
}

const mapDispatchToProps = (dispatch) =>{
    return{
        actions: {
         addItem: item => dispatch(itemActions.addItem(item)),
         removeItem: item => dispatch(itemActions.removeItem(item))
       }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ItemPurchasePage);
