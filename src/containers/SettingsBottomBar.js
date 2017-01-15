import React from 'react'
import { Link } from 'react-router'

class SettingsBottomBarComponent extends React.Component {

    render() {
        return (
            <div className="container">
                <Link to="/" className="go-back"><span className="icon-chevron-left"></span> <span>GO BACK</span></Link>
            </div>
        );
    }
}

export default SettingsBottomBarComponent