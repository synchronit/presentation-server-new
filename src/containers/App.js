import React from 'react'
import { connect } from 'react-redux'

import TopBar from './TopBar.js'
import Loader from './Loader.js'
import BottomBar from './BottomBar.js'
import Modal from './Modal.js'

class AppComponent extends React.Component {

    componentDidMount() {
        $('body').niceScroll({
            cursorcolor: 'rgba(255,255,255,.05)',
            cursorborder: 'none',
            zindex: 9999
        })

        this.initPlugins()
    }

    componentDidUpdate() {
        this.initPlugins()
    }

    initPlugins() {
        $('[data-toggle="tooltip"]').tooltip({
            trigger: 'hover',
            template: '<div class="tooltip '+ this.props.skin +'-tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>'
        })

        $('.up').click(() => {
            $('body').getNiceScroll(0).doScrollTop(0, 1000)
        })
    }

    render() {
        return <div id="base" className={"base " + this.props.skin}>
                    <Loader />
                    <TopBar />
                    {this.props.children}
                    <BottomBar path={this.props.location.pathname} />
                    <Modal id="modal-notifications" title="NOTIFICATIONS" icon="icon-notification"/>
                    <Modal id="modal-delete" title="Do you really want to delete this form?" icon="icon-delete"/>
                    <Modal id="modal-mass-delete" title="Do you really want to delete all this forms?" icon="icon-delete"/>
                    <Modal id="modal-reset-styles" title="Do you really want to reset to default styles?" icon="icon-delete"/>
               </div>
    }
}

const mapStateToProps = (state) => ({
    skin: state.skinSettings.skin
})

const App = connect(mapStateToProps)(AppComponent)

export default App
