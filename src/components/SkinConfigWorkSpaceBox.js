import React from 'react'

class SkinConfigWorkSpaceBoxComponent extends React.Component {

    render() {

        return (
            <div className="config-box col-xs-12 col-lg-6">
                <div className="item config-colors">
                    <h3>BACKGROUND:</h3>
                    <div className="left">
                        <label>Workspace Color</label>
                        <div className={"color workspace-color1" + (this.props.value == 'workspace-color1' ? " selected" : "")}>
                            <input type="radio" value="workspace-color1" name="workspace-color" onChange={this.props.handleChangeWorkspace}/>
                            <span></span>
                        </div>
                        <div className={"color workspace-color2" + (this.props.value == 'workspace-color2' ? " selected" : "")}>
                            <input type="radio" value="workspace-color2" name="workspace-color" onChange={this.props.handleChangeWorkspace}/>
                            <span></span>
                        </div>
                        <div className={"color workspace-color3" + (this.props.value == 'workspace-color3' ? " selected" : "")}>
                            <input type="radio" value="workspace-color3" name="workspace-color" onChange={this.props.handleChangeWorkspace}/>
                            <span></span>
                        </div>
                        <div className={"color workspace-color4" + (this.props.value == 'workspace-color4' ? " selected" : "")}>
                            <input type="radio" value="workspace-color4" name="workspace-color" onChange={this.props.handleChangeWorkspace}/>
                            <span></span>
                        </div>
                        <div className={"color workspace-color5" + (this.props.value == 'workspace-color5' ? " selected" : "")}>
                            <input type="radio" value="workspace-color5" name="workspace-color" onChange={this.props.handleChangeWorkspace}/>
                            <span></span>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default SkinConfigWorkSpaceBoxComponent
