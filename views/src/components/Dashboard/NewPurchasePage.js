import React from 'react'
import { connect } from 'react-redux'
import MenuComponent from './MenuComponent'
import ItemListComponent from './ItemListComponent'

class NewPurchasePage extends React.Component{
    constructor(props){
        super(props)
    }

    handleItemList(){

    }

    handleCompanyChange(e){
        console.log(e.target.value)
    }

    handleProductChange(e){
        // this.props.item.name = e.target.value
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

    generateProductsOptions(products){
        if(!products){
            return
        }
        return products.map(product => {
            return <option key={ product } value={ product }>{ product }</option>
        })

    }

    render(){

        let items = [
            { name: 'Cerveja', quantity: 20 },
            { name: 'Carne', quantity: 38 },
            { name: 'Chocolate', quantity: 10 }
        ]

        let products = [ 'Bread', 'Beer', 'Meat', 'Chocolate', 'Tomatoes', 'Sausage' ]

        return (
            <div>
                <MenuComponent />
                <h1>New Purchase</h1>
                <form onSubmit={ e =>{
                    e.preventDefault();

                    e.target.reset();
                }}>
                    <select onChange={this.handleCompanyChange}>
                        { this.generateCompanyOptions() }
                    </select>

                    <select onChange={this.handleProductChange}>
                        { this.generateProductsOptions(products) }
                    </select>

                    <label htmlFor="email">Qtd:</label>
                    <input type="number"
                           name="quantity" />

                    <button type="submit">Adicionar</button>
                </form>
                <ItemListComponent items={ items } />
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return { companies: state.company.list, item: state.item }
}

const mapDispatchToProps = (dispatch) =>{
    return{
        // addItemName: userInput => dispatch(loginActions.addItemName(userInput))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NewPurchasePage);
