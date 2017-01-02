import React from 'react'
import { connect } from 'react-redux'
import { deleteForm } from '../actions'

class ModalMassDeleteComponent extends React.Component {

    deleteItem = (e) => {
        e.preventDefault()
        //this.props.dispatch(deleteForm(this.props.form))
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

const ModalMassDelete = connect(
    mapStateToProps
)(ModalMassDeleteComponent)

export default ModalMassDelete
