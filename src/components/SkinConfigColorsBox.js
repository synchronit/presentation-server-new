import React from 'react'

class SkinConfigColorsBoxComponent extends React.Component {

    render() {

        return (
            <div className="config-box col-xs-12 col-lg-6">
                <div className="item config-colors">
                    <h3>ELEMENTS COLORS:</h3>
                    <div className="left">
                        <label>Main</label>
                        <div className={"color main-color1 " + (this.props.mainColor == 'main-color1' ? " selected" : "")}>
                            <input
                                type="radio"
                                value="main-color1"
                                name="main-color"
                                checked={this.props.mainColor == 'main-color1'}
                                onChange={this.props.handleChangeMainColor}
                            />
                            <span></span>
                        </div>
                        <div className={"color main-color2 " + (this.props.mainColor == 'main-color2' ? " selected" : "")}>
                            <input
                                type="radio"
                                value="main-color2"
                                name="main-color"
                                checked={this.props.mainColor == 'main-color2'}
                                onChange={this.props.handleChangeMainColor}
                            />
                            <span></span>
                        </div>
                        <div className={"color main-color3 " + (this.props.mainColor == 'main-color3' ? " selected" : "")}>
                            <input
                                type="radio"
                                value="main-color3"
                                name="main-color"
                                checked={this.props.mainColor == 'main-color3'}
                                onChange={this.props.handleChangeMainColor}
                            />
                            <span></span>
                        </div>
                        <div className={"color main-color4 " + (this.props.mainColor == 'main-color4' ? " selected" : "")}>
                            <input
                                type="radio"
                                value="main-color4"
                                name="main-color"
                                checked={this.props.mainColor == 'main-color4'}
                                onChange={this.props.handleChangeMainColor}
                            />
                            <span></span>
                        </div>
                        <div className={"color main-color5 " + (this.props.mainColor == 'main-color5' ? " selected" : "")}>
                            <input
                                type="radio"
                                value="main-color5"
                                name="main-color"
                                checked={this.props.mainColor == 'main-color5'}
                                onChange={this.props.handleChangeMainColor}
                            />
                            <span></span>
                        </div>
                    </div>
                    <div className="right">
                        <label>Secundary</label>
                        <div className={"color secundary-color1 " + (this.props.secundaryColor == 'secundary-color1' ? " selected" : "")}>
                            <input
                                type="radio"
                                value="secundary-color1"
                                name="secundary-color"
                                checked={this.props.secundaryColor == 'secundary-color1'}
                                onChange={this.props.handleChangeSecundaryColor}
                            />
                            <span></span>
                        </div>
                        <div className={"color secundary-color2 " + (this.props.secundaryColor == 'secundary-color2' ? " selected" : "")}>
                            <input
                                type="radio"
                                value="secundary-color2"
                                name="secundary-color"
                                checked={this.props.secundaryColor == 'secundary-color2'}
                                onChange={this.props.handleChangeSecundaryColor}
                            />
                            <span></span>
                        </div>
                        <div className={"color secundary-color3 " + (this.props.secundaryColor == 'secundary-color3' ? " selected" : "")}>
                            <input
                                type="radio"
                                value="secundary-color3"
                                name="secundary-color"
                                checked={this.props.secundaryColor == 'secundary-color3'}
                                onChange={this.props.handleChangeSecundaryColor}
                            />
                            <span></span>
                        </div>
                        <div className={"color secundary-color4 " + (this.props.secundaryColor == 'secundary-color4' ? " selected" : "")}>
                            <input
                                type="radio"
                                value="secundary-color4"
                                name="secundary-color"
                                checked={this.props.secundaryColor == 'secundary-color4'}
                                onChange={this.props.handleChangeSecundaryColor}
                            />
                            <span></span>
                        </div>
                        <div className={"color secundary-color5 " + (this.props.secundaryColor == 'secundary-color5' ? " selected" : "")}>
                            <input
                                type="radio"
                                value="secundary-color5"
                                name="secundary-color"
                                checked={this.props.secundaryColor == 'secundary-color5'}
                                onChange={this.props.handleChangeSecundaryColor}
                            />
                            <span></span>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default SkinConfigColorsBoxComponent
