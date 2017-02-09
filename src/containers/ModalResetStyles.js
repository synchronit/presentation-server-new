import React from 'react'
import { connect } from 'react-redux'
import { resetDefaultStyles } from '../actions'

class ModalResetStylesComponent extends React.Component {

    reset = (e) => {
        e.preventDefault()
        this.props.dispatch(resetDefaultStyles())
    }

    render() {
        return (
            <div>
                <button type="button" className="btn btn-secundary" data-dismiss="modal">CANCEL</button>
                <button
                type="button"
                className="btn btn-primary-2"
                data-dismiss="modal"
                onClick={this.reset}>
                ACCEPT
                </button>
            </div>
        )
    }
}

const ModalResetStyles = connect()(ModalResetStylesComponent)

export default ModalResetStyles
