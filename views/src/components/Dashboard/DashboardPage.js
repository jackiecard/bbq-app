import React from 'react'
import { connect } from 'react-redux'
import MenuComponent from './MenuComponent'

class DashboardPage extends React.Component{
    constructor(props){
        super(props)
    }

    generateRows() {
        if(this.props.companyList.length === 0){
            return <tr>
                        <td></td>
                        <td>nothing</td>
                        <td></td>
                    </tr>
        }

        var data = this.props.companyList;

        return data.map(company => {
            return <tr key={ company.SUCCESS.cnpj }>
                        <td>{ company.SUCCESS.cnpj }</td>
                        <td>{ company.SUCCESS.name }</td>
                        <td>50</td>
                    </tr>
        });
    }

    render(){
        return (
            <div>
                <MenuComponent />
                <h1>Dashboard</h1>
                <table>
                    <tbody>
                        { this.generateRows() }
                    </tbody>
                </table>
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return { companyList: state.company.list }
}

const mapDispatchToProps = (dispatch) =>{
    return{

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DashboardPage);
