import React from 'react'
import Heading from '../components/Heading.js'

class SettingsHeaderComponent extends React.Component {

    render() {
        return (
            <header className="container">
                <Heading title={this.props.title} subtitle={this.props.subtitle} />
            </header>
        );
    }
}

export default SettingsHeaderComponent
