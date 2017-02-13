import React from 'react'

class SkinConfigBackgroudBoxComponent extends React.Component {

    render() {

        return (
            <div className="config-box col-xs-12 col-lg-6">
                <div className="item config-background">
                    <h3>BACKGROUND:</h3>
                    <div className="left">
                        <label>
                            <input
                            type="radio"
                            name="background"
                            value="degraded"
                            checked={this.props.value == 'degraded'}
                            onChange={this.props.handleChangeBackground}
                            />
                        Degraded
                        </label>
                        <img
                        src={"images/" + this.props.skin + "/background-degraded.png"}
                        className={(this.props.value == 'degraded') ? "selected" : ""}
                        />
                    </div>
                    <span className="or">OR</span>
                    <div className="right">
                        <label>
                            <input
                            type="radio"
                            name="background"
                            value="plain"
                            checked={this.props.value == 'plain'}
                            onChange={this.props.handleChangeBackground}
                            />
                        Plain
                        </label>
                        <img
                        src={"images/" + this.props.skin + "/background-plain.png"}
                        className={(this.props.value == 'plain') ? "selected" : ""}
                        />
                    </div>
                </div>
            </div>
        )
    }
}

export default SkinConfigBackgroudBoxComponent
