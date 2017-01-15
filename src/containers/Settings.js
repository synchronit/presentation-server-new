import React from 'react'
import { connect } from 'react-redux'

class SettingsComponent extends React.Component {

    render() {
        return (
            <article className={"content " + this.props.layout}>
                <div className="background"></div>
                <div className="work-zone">
                    {this.props.children}
                </div>
            </article>
        );
    }

}

const mapStateToProps = (state) => ({
    layout: state.skinSettings.layout
})

const Settings = connect(mapStateToProps)(SettingsComponent)

export default Settings