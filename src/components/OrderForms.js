import React from 'react'

class OrderFormsComponent extends React.Component {

    render() {
        return (
            <div className="order-forms dropdown">
                <span className="">ORDER: </span>
                <a className="dropdown-toggle" href="#" title="" data-toggle="dropdown">
                    {this.props.orderForms}
                </a>
                <ul className="dropdown-menu">
                    <li onClick={this.props.orderAZ}>A-Z</li>
                    <li onClick={this.props.orderZA}>Z-A</li>
                    <li onClick={this.props.orderRecent}>Recent</li>
                    <li onClick={this.props.orderOlder}>Older</li>
                </ul>
            </div>
        );
    }
}

export default OrderFormsComponent

