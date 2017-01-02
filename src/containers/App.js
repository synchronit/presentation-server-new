import React from 'react'
import TopBar from '../components/TopBar'
import BottomBar from './BottomBar.js'
import Content from './Content.js'
import Modal from '../components/Modal.js'

class AppComponent extends React.Component {
    render() {
        return <div>
                <TopBar />
                <Content />
                <BottomBar />
                <Modal id="modal-notifications" title="NOTIFICATIONS" icon="icon-notification"/>
                <Modal id="modal-delete" title="Do you really want to delete this form?" icon="icon-delete"/>
                <Modal id="modal-mass-delete" title="Do you really want to delete all this forms?" icon="icon-delete"/>
               </div>
    }
}

export default AppComponent
