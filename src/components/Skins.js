import React from 'react'
import { connect } from 'react-redux'

import SettingsHeader from '../containers/SettingsHeader.js'
import SkinBox from './SkinBox.js'
import { changeSkin } from '../actions'

class SkinsComponent extends React.Component {

    changeSkinToFuturist = (e) => {
        this.props.dispatch(changeSkin('futurist'))
    }

    changeSkinToClear = (e) => {
        this.props.dispatch(changeSkin('clear'))
    }

    changeSkinToVintage = (e) => {
        this.props.dispatch(changeSkin('vintage'))
    }

    render() {
        return (
            <div>
                <SettingsHeader title="CONFIGURATION OF APPEARANCE" subtitle="" />
                <section className="container">
                    <h3>SELECT THE SKIN OF YOUR PREFERENCE:</h3>
                    <div className="row skin-boxes">
                        <SkinBox title="“Futurist” Skin" skin="futurist"
                            changeSkin={this.changeSkinToFuturist}
                            active={this.props.skin == 'futurist' ? true : false}
                        />
                        <SkinBox title="“Clear” Skin" skin="clear"
                            changeSkin={this.changeSkinToClear}
                            active={this.props.skin == 'clear' ? true : false}
                        />
                        <SkinBox title="“Vintage” Skin" skin="vintage"
                            changeSkin={this.changeSkinToVintage}
                            active={this.props.skin == 'vintage' ? true : false}
                        />
                    </div>
                </section>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    skin: state.skinSettings.skin
})

const Skins= connect(mapStateToProps)(SkinsComponent)

export default Skins