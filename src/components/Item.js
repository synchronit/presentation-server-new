import React from 'react'

class ItemComponent extends React.Component {
    render() {
        return (
            <div className="item-box">
                <div className="item">
                    <div className="body">
                        <span className="icon-empty-form"></span>
                        <span className="name">{this.props.form[0]}</span>
                    </div>
                    <div className="footer">
                        <span><i className="icon-date"></i> 13/6/2017</span>
                        <span><i className="icon-user"></i> 57 CASES</span>
                    </div>
                </div>
            </div>
        );
    }
}

export default ItemComponent
