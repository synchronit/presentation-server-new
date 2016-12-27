import React from 'react'

class ModalDeleteComponent extends React.Component {

    render() {
        return (
            <div>
                <button type="button" className="btn btn-secundary" data-dismiss="modal">CANCEL</button>
                <button type="button" className="btn btn-primary-2">ACCEPT</button>
            </div>
        )
    }
}

export default ModalDeleteComponent
