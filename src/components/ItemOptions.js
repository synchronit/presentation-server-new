import React from 'react'
import { connect } from 'react-redux'
import { confirmDeleteForm } from '../actions'

class ItemOptionsComponent extends React.Component {

    deleteItem = (e) => {
        e.preventDefault()
        this.props.dispatch(confirmDeleteForm(this.props.form))
    }

    render() {
        return (
            <ul className="options">
                <li><a href="#"><span className="icon-build"></span> <i><span>Form</span> Builder</i></a></li>
                <li><a href="#"><span className="icon-edit"></span> <i>Edit <span>Form</span></i></a></li>
                <li><a href="#"><span className="icon-copy"></span> <i>Duplicate <span>Form</span></i></a></li>
                <li>
                    <a href="#"
                       data-toggle="modal"
                       data-target="#modal-delete"
                       onClick={this.deleteItem}>
                        <span className="icon-delete"></span>
                        <i>Delete <span>Form</span></i>
                    </a>
                </li>
            </ul>
        );
    }
}

const ItemOptions = connect()(ItemOptionsComponent)

export default ItemOptions
