import React from 'react'

class SkinConfigHeaderBoxComponent extends React.Component {

    render() {

        return (
            <div className="config-box col-xs-12 col-lg-6">
                <div className="item config-header">
                    <h3>HEADER:</h3>
                    <div className="left">
                        <label>
                            <input
                            type="radio"
                            name="header"
                            value="dark"
                            checked={this.props.value == 'dark'}
                            onChange={this.props.handleChangeHeader}
                            />
                        Dark
                        </label>
                        <img
                        src={"images/" + this.props.skin + "/header-dark.png"}
                        className={(this.props.value == 'dark') ? "selected" : ""}
                        />
                    </div>
                    <span className="or">OR</span>
                    <div className="right">
                        <label>
                            <input
                            type="radio"
                            name="header"
                            value="light"
                            checked={this.props.value == 'light'}
                            onChange={this.props.handleChangeHeader}
                            />
                        Light
                        </label>
                        <img
                        src={"images/" + this.props.skin + "/header-light.png"}
                        className={(this.props.value == 'light') ? "selected" : ""}
                        />
                    </div>
                </div>
            </div>
        )
    }
}

export default SkinConfigHeaderBoxComponent
