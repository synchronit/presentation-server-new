import React from 'react'
import { Link } from 'react-router'

import SettingsHeader from '../containers/SettingsHeader.js'

class SkinsComponent extends React.Component {

    //<Link to="/settings/skins/futurist">FUTURIST SKIN</Link>

    render() {
        return (
            <div>
                <SettingsHeader title="CONFIGURATION OF APPEARANCE" subtitle="" />
                <section className = "container">
                    <div className="row">
                        <div className="col-xs-12 col-sm-4">
                            <div className="skin-box">
                                <div className="skin-box-header"></div>
                                <div className="skin-box-body">
                                    <img src="images/skin-futurist.jpg" alt="Futurist Skin" />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}

export default SkinsComponent