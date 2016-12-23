import React from 'react'

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
                <ul className="options">
                    <li><a href="#"><span className="icon-build"></span> <i><span>Form</span> Builder</i></a></li>
                    <li><a href="#"><span className="icon-edit"></span> <i>Edit <span>Form</span></i></a></li>
                    <li><a href="#"><span className="icon-copy"></span> <i>Duplicate <span>Form</span></i></a></li>
                    <li><a href="#"><span className="icon-delete"></span> <i>Delete <span>Form</span></i></a></li>
                </ul>
            </div>
        );
    }
}

export default ItemLineComponent
