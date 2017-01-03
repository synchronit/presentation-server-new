import React from 'react'
import { connect } from 'react-redux'
import Loader from '../components/Loader'
import TopBar from '../components/TopBar'
import BottomBar from './BottomBar.js'
import Content from './Content.js'
import Modal from '../components/Modal.js'

class AppComponent extends React.Component {

    componentDidMount() {
        $('body').niceScroll({
            cursorcolor: 'rgba(255,255,255,.05)',
            cursorborder: 'none',
            zindex: 9999
        })
    }

    render() {
        return <div>
                <Loader loading={this.props.loading}/>
                <TopBar />
                <Content />
                <BottomBar />
                <Modal id="modal-notifications" title="NOTIFICATIONS" icon="icon-notification"/>
                <Modal id="modal-delete" title="Do you really want to delete this form?" icon="icon-delete"/>
                <Modal id="modal-mass-delete" title="Do you really want to delete all this forms?" icon="icon-delete"/>
               </div>
    }
}

const mapStateToProps = (state) => ({
    loading: state.loading
})

const App = connect(mapStateToProps)(AppComponent)

export default App
