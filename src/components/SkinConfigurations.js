import React from 'react'
import { Link } from 'react-router'
import { connect } from 'react-redux'

import SettingsHeader from '../containers/SettingsHeader.js'

import SkinConfigColorsBox from './SkinConfigColorsBox.js'
import SkinConfigWorkSpaceBox from './SkinConfigWorkSpaceBox.js'
import SkinConfigHeaderBox from './SkinConfigHeaderBox.js'
import SkinConfigBackgroudBox from './SkinConfigBackgroudBox.js'
import SkinConfigLayoutBox from './SkinConfigLayoutBox.js'

import {
    changeSkinLayout,
    changeSkinBackground,
    changeSkinHeader,
    changeSkinWorkspace,
    changeMainColor,
    changeSecundaryColor
} from '../actions'

class SkinConfigurationsComponent extends React.Component {

    handleChangeMainColor = (e) => {
        this.props.dispatch(changeMainColor(e.target.value))
    }

    handleChangeSecundaryColor = (e) => {
        this.props.dispatch(changeSecundaryColor(e.target.value))
    }

    handleChangelayout = (e) => {
        this.props.dispatch(changeSkinLayout(e.target.value))
    }

    handleChangeBackground = (e) => {
        this.props.dispatch(changeSkinBackground(e.target.value))
    }

    handleChangeHeader = (e) => {
        this.props.dispatch(changeSkinHeader(e.target.value))
    }

    handleChangeWorkspace = (e) => {
        this.props.dispatch(changeSkinWorkspace(e.target.value))
    }

    render() {
        return (
            <div>
                <SettingsHeader className="" title={this.props.params.skin + ' skin'} subtitle="(EDIT DETAILS)" />
                <section className = "container">
                    <SkinConfigColorsBox
                        mainColor={this.props.skinSettings.mainColor}
                        secundaryColor={this.props.skinSettings.secundaryColor}
                        handleChangeMainColor={this.handleChangeMainColor}
                        handleChangeSecundaryColor={this.handleChangeSecundaryColor}
                    />
                    { this.props.skinSettings.skin == 'vintage' &&
                        <SkinConfigWorkSpaceBox
                            value={this.props.skinSettings.workspace}
                            handleChangeWorkspace={this.handleChangeWorkspace}
                        />
                    }
                    { this.props.skinSettings.skin != 'vintage' &&
                        <SkinConfigHeaderBox
                            skin={this.props.skinSettings.skin}
                            value={this.props.skinSettings.header}
                            handleChangeHeader={this.handleChangeHeader}
                        />
                    }
                    { this.props.skinSettings.skin != 'vintage' &&
                        <SkinConfigBackgroudBox
                            skin={this.props.skinSettings.skin}
                            value={this.props.skinSettings.background}
                            handleChangeBackground={this.handleChangeBackground}
                        />
                    }
                    <SkinConfigLayoutBox
                        skin={this.props.skinSettings.skin}
                        value={this.props.skinSettings.layout}
                        handleChangelayout={this.handleChangelayout}
                    />
                </section>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    skinSettings: state.skinSettings
})

const SkinConfigurations = connect(mapStateToProps)(SkinConfigurationsComponent)

export default SkinConfigurations