import React from 'react'

class ItemOptionsComponent extends React.Component {
    render() {
        return (
            <ul className="options">
                <li><a href="#"><span className="icon-build"></span> <i><span>Form</span> Builder</i></a></li>
                <li><a href="#"><span className="icon-edit"></span> <i>Edit <span>Form</span></i></a></li>
                <li><a href="#"><span className="icon-copy"></span> <i>Duplicate <span>Form</span></i></a></li>
                <li><a href="#"><span className="icon-delete"></span> <i>Delete <span>Form</span></i></a></li>
            </ul>
        );
    }
}

export default ItemOptionsComponent
