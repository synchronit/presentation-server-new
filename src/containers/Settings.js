import React from 'react'
import { connect } from 'react-redux'

class SettingsComponent extends React.Component {

    render() {
        return (
            <div className="work-zone">
                {this.props.children}
            </div>
        );
    }

}

const mapStateToProps = (state) => ({
    layout: state.skinSettings.layout,
    background: state.skinSettings.background
})

const Settings = connect(mapStateToProps)(SettingsComponent)

export default Settings