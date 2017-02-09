import React from 'react'

class MarkerComponent extends React.Component {


    render() {
        var height = 38;
        if(this.props.skin == 'vintage') {
            height = 52;
        }

        return (
            <div className={"marker " + this.props.className}
                style={{height: (height * this.props.count) + (10 * (this.props.count - 1)) + 'px'}}>
                <p><span>{this.props.char}</span></p>
            </div>
        );
    }
}

export default MarkerComponent
