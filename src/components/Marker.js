import React from 'react'

class MarkerComponent extends React.Component {


    render() {

        return (
            <div className={"marker " + this.props.className}
                style={{height: (38 * this.props.count) + (10 * (this.props.count - 1)) + 'px'}}>
                <p><span>{this.props.char}</span></p>
            </div>
        );
    }
}

export default MarkerComponent
