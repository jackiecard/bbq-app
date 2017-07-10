import React from 'react'
import { connect } from 'react-redux'
import ItemListComponent from './ItemListComponent'
import * as itemActions from '../../actions/itemActions'

class ItemPurchasePage extends React.Component{
    constructor(props, currentItem){
        super(props)

        console.log('items-------', this.props.items)
    }

    generateProductsOptions(products){
        if(!products){
            return
        }
        return products.map(product => {
            return <option key={ product }
                           value={ product }>
                            { product }
                        </option>
        })
    }

    handleAddItem(itemInput){
        this.props.actions.addItem(itemInput)
    }

    render(){

        let items = this.props.items || [ { name: 'Beer', quantity: '2' } ]

        let products = [ 'Bread', 'Beer', 'Meat', 'Chocolate', 'Tomatoes', 'Sausage' ]

        var nameInput, quantityInput = null;

        return (

            <div>
                <form onSubmit={ e =>{
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
                           ref={ node => quantityInput = node }
                           name="quantity" />

                    <button type="submit">Add</button>
                </form>
                <ItemListComponent items={ items } />
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return { items: state.item.list }
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
