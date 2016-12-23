import React from 'react'

class ItemBoxComponent extends React.Component {
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
                    <ul className="options">
                        <li><a href="#"><span className="icon-build"></span> <i><span>Form</span> Builder</i></a></li>
                        <li><a href="#"><span className="icon-edit"></span> <i>Edit <span>Form</span></i></a></li>
                        <li><a href="#"><span className="icon-copy"></span> <i>Duplicate <span>Form</span></i></a></li>
                        <li><a href="#"><span className="icon-delete"></span> <i>Delete <span>Form</span></i></a></li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default ItemBoxComponent
