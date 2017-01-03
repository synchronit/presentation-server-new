import React from 'react'

class HeadingComponent extends React.Component {

    render() {
        return (
            <h1>{this.props.title} <small>({this.props.subtitle})</small></h1>
        );
    }
}

export default HeadingComponent
