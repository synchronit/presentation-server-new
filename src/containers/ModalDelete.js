import React from 'react'
import { connect } from 'react-redux'
import { deleteForm } from '../actions'

class ModalDeleteComponent extends React.Component {

    deleteItem = (e) => {
        e.preventDefault()
        this.props.dispatch(deleteForm(this.props.form))
    }

    render() {
        return (
            <div>
                <button type="button" className="btn btn-secundary" data-dismiss="modal">CANCEL</button>
                <button
                    type="button"
                    className="btn btn-primary-2"
                    data-dismiss="modal"
                    onClick={this.deleteItem}>
                    ACCEPT
                </button>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    form: state.confirmDeleteForm
})

const ModalDelete = connect(
    mapStateToProps
)(ModalDeleteComponent)

export default ModalDelete
