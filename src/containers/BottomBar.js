import React from 'react'
import { connect } from 'react-redux'

import HomeBottomBar from './HomeBottomBar.js'
import SettingsBottomBar from './SettingsBottomBar.js'

class BottomBarComponent extends React.Component {

    render() {

        var component = ""

        switch(this.props.path) {
            case '/':
                component = <HomeBottomBar />
                break
            default:
                component = <SettingsBottomBar />
        }

        return (
            <nav className={"bottombar " + this.props.layout}>
                {component}
            </nav>
        );
    }
}

const mapStateToProps = (state) => ({
    layout: state.skinSettings.layout
})

const BottomBar = connect(mapStateToProps)(BottomBarComponent)

export default BottomBar