import React from 'react'
import ModalNotifications from './ModalNotifications.js'
import ModalDelete from './ModalDelete.js'

class ModalComponent extends React.Component {

    render() {
        var content = null

        switch (this.props.id) {
            case 'modal-notifications':
                content = <ModalNotifications/>
                break
            case 'modal-delete':
                content = <ModalDelete/>
                break
        }

        return (
            <div className="modal fade" id={this.props.id}>
                <button type="button" className="icon-close" data-dismiss="modal"></button>
                <div className="modal-dialog">
                    <div className="modal-content">
                        <span className={this.props.icon}></span>
                        <div className="modal-header">
                            <h4 className="modal-title">{this.props.title}</h4>
                        </div>
                        <div className="modal-body">
                            {content}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ModalComponent