import React from 'react'
import { Link } from 'react-router'
import { connect } from 'react-redux'

import SettingsHeader from '../containers/SettingsHeader.js'
import { changeSkinLayout } from '../actions'

class SkinConfigurationsComponent extends React.Component {

    changeSkinLayoutToBoxed = (e) => {
        e.preventDefault()
        this.props.dispatch(changeSkinLayout('boxed'))
    }

    changeSkinLayoutToFluid = (e) => {
        e.preventDefault()
        this.props.dispatch(changeSkinLayout('fluid'))
    }

    render() {
        return (
            <div>
                <SettingsHeader className="" title={this.props.params.skin + ' skin'} subtitle="(EDIT DETAILS)" />
                <section className = "container">
                    <h2>LAYOUT</h2>
                    <a href="#" onClick={this.changeSkinLayoutToBoxed}>Boxed</a>
                    <a href="#" onClick={this.changeSkinLayoutToFluid}> Fluid</a>
                    <h2>BACKGROUND</h2>
                    <a href="">Degraded</a> <a href="">Plain</a>
                    <h2>HEADER</h2>
                    <a href="">Dark</a> <a href="">Light</a>
                </section>
            </div>
        )
    }
}

const SkinConfigurations = connect()(SkinConfigurationsComponent)

export default SkinConfigurations