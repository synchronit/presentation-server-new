import React from 'react'
import { connect } from 'react-redux'

class HeadingComponent extends React.Component {

    render() {
        return (
            <h1>MY FORMS <small>({this.props.message})</small></h1>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        message: state.fetchForms.request.message
    }
}

const Heading = connect(
    mapStateToProps
)(HeadingComponent)

export default Heading
