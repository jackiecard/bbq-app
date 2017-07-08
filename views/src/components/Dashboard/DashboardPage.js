import React from 'react'
import { connect } from 'react-redux'
import MenuComponent from './MenuComponent'

class DashboardPage extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return (
            <div>
                <h1>Dashboard</h1>
                <MenuComponent />
            </div>
        )
    }
}

const mapStateRoProps = (state, ownProps) => {
    return state
}

const mapDispatchToProps = (dispatch) =>{
    return{

    }
}

export default connect(null, mapDispatchToProps)(DashboardPage);
