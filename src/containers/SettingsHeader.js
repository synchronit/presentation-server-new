import React from 'react'
import Heading from '../components/Heading.js'

class SettingsHeaderComponent extends React.Component {

    render() {
        return (
            <header className="container">
                <Heading title={this.props.title} subtitle={this.props.subtitle} />
                <button id="reset-styles" className="btn btn-secundary" data-toggle="modal" data-target="#modal-reset-styles">
                    RESET TO DEFAULT STYLES
                </button>
            </header>
        );
    }
}

export default SettingsHeaderComponent
