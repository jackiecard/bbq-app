import React from 'react';
import {Link} from 'react-router';

class ItemListComponent extends React.Component {
    constructor(props) {
      super(props);
    }
    generateRows() {
        if(this.props.items === 0){
            return <tr>
                        <td></td>
                        <td>nothing</td>
                        <td></td>
                    </tr>
        }

        var data = this.props.items;

        return data.map(item => {

            return <tr key={ item.name }>
                        <td>{ item.name }</td>
                        <td>{ item.quantity }</td>
                        <td>X</td>
                    </tr>
        });
    }

    render(){
        console.log('--------- props item list', this.props)
        return (
            <div>
                <table>
                    <tbody>
                        { this.generateRows() }
                    </tbody>
                </table>
            </div>
        );
    }
};

export default ItemListComponent;
