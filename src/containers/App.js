import React from 'react'
import TopBar from '../components/TopBar'
import BottomBar from '../components/BottomBar.js'
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
               </div>
    }
}

export default AppComponent
