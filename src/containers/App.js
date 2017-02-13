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
        return <div id="base" className={
                    "base " + this.props.skin +
                    " " + this.props.layout +
                    " " + this.props.header +
                    " " + this.props.background +
                    " " + this.props.workspace +
                    " " + this.props.mainColor +
                    " " + this.props.secundaryColor }>
                    <Loader />
                    <TopBar />
                    <article className="content">
                        <div className="background"></div>
                        {this.props.children}
                    </article>
                    <BottomBar path={this.props.location.pathname} />
                    <Modal id="modal-notifications" title="NOTIFICATIONS" icon="icon-notification"/>
                    <Modal id="modal-delete" title="Do you really want to delete this form?" icon="icon-delete"/>
                    <Modal id="modal-mass-delete" title="Do you really want to delete all this forms?" icon="icon-delete"/>
                    <Modal id="modal-reset-styles" title="Do you really want to reset to default styles?" icon="icon-reset"/>
               </div>
    }
}

const mapStateToProps = (state) => ({
    skin: state.skinSettings.skin,
    layout: state.skinSettings.layout,
    background: state.skinSettings.background,
    workspace: state.skinSettings.workspace,
    header: state.skinSettings.header,
    mainColor: state.skinSettings.mainColor,
    secundaryColor: state.skinSettings.secundaryColor
})

const App = connect(mapStateToProps)(AppComponent)

export default App
