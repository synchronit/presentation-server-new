import React from 'react'

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
            <nav className="bottombar">
                {component}
            </nav>
        );
    }
}

export default BottomBarComponent