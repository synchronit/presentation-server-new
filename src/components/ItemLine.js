import React from 'react'
import ItemOptions from './ItemOptions.js'

class ItemLineComponent extends React.Component {
    render() {
        return (
            <div className="item-line">
                <div className="left">
                    <span className="name">{this.props.form[0]}</span>
                </div>
                <div className="right hidden-sm-down">
                    <span><i className="icon-date"></i> 13/6/2017</span>
                    <span><i className="icon-user"></i> 57 CASES</span>
                </div>
                <ItemOptions/>
            </div>
        );
    }
}

export default ItemLineComponent
