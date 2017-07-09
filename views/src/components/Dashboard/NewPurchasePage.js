import React from 'react'
import { connect } from 'react-redux'
import MenuComponent from './MenuComponent'
import ItemListComponent from './ItemListComponent'

class NewPurchasePage extends React.Component{
    constructor(props){
        super(props)
    }

    handleSettings(){
    }

    render(){

        let items = [
            { name: 'Cerveja', quantity: 20 },
            { name: 'Carne', quantity: 38 },
            { name: 'Chocolate', quantity: 10 }
        ]

        return (
            <div>
                <MenuComponent />
                <h1>New Purchase</h1>
                <form onSubmit={ e =>{
                    e.preventDefault();

                    e.target.reset();
                }}>
                    <select>
                        <option value="grapefruit">Grapefruit</option>
                        <option value="lime">Lime</option>
                        <option defaultValue="coconut">Coconut</option>
                        <option value="mango">Mango</option>
                    </select>

                    <select>
                        <option value="grapefruit">Grapefruit</option>
                        <option value="lime">Lime</option>
                        <option defaultValue="coconut">Coconut</option>
                        <option value="mango">Mango</option>
                    </select>

                    <label htmlFor="email">Qtd:</label>
                    <input type="text"
                           name="email" />

                    <button type="submit">Adicionar</button>
                </form>
                <ItemListComponent items={ items } />
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return state
}

const mapDispatchToProps = (dispatch) =>{
    return{

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NewPurchasePage);
