import React from 'react'

class SkinConfigLayoutBoxComponent extends React.Component {

    render() {

        return (
            <div className="config-box col-xs-12 col-lg-6">
                <div className="item config-layout">
                    <h3>LAYOUT:</h3>
                    <div className="left">
                        <label>
                            <input
                            type="radio"
                            name="layout"
                            value="boxed"
                            checked={this.props.value == 'boxed'}
                            onChange={this.props.handleChangelayout}
                            />
                        Boxed
                        </label>
                        <img
                        src={"images/" + this.props.skin + "/layout-boxed.png"}
                        className={(this.props.value== 'boxed') ? "selected" : ""}
                        />
                    </div>
                    <span className="or">OR</span>
                    <div className="right">
                        <label>
                            <input
                            type="radio"
                            name="layout"
                            value="fluid"
                            checked={this.props.value == 'fluid'}
                            onChange={this.props.handleChangelayout}
                            />
                        Fluid
                        </label>
                        <img
                        src={"images/" + this.props.skin + "/layout-fluid.png"}
                        className={(this.props.value == 'fluid') ? "selected" : ""}
                        />
                    </div>
                </div>
            </div>
        )
    }
}

export default SkinConfigLayoutBoxComponent
