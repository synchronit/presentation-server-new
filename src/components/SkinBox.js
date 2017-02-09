import React from 'react'
import { Link } from 'react-router'

class SkinsComponent extends React.Component {

    componentDidMount() {
        $('.edit-configurations').hover(function() {
            $(this).parent().parent().addClass('config')
        }, function() {
            $(this).parent().parent().removeClass('config')
        })
    }

    componentDidUpdate() {
        $('.edit-configurations').hover(function() {
            $(this).parent().parent().addClass('config')
        }, function() {
            $(this).parent().parent().removeClass('config')
        })
    }

    render() {

        return (
            <div className="col-xs-12 col-sm-6 col-lg-4">
                <div className={"skin-box" + (this.props.active ? " active" : "")}>
                    <div className="skin-box-header">
                        <h4>{this.props.title}</h4>
                        <button className="btn btn-icon" onClick={this.props.changeSkin}>
                            <span className="icon-selected"></span>
                            { this.props.active ? <i>Selected</i> : "" }
                        </button>
                        {
                            this.props.active
                            ? <Link to={"/settings/skins/" + this.props.skin} className="btn btn-icon edit-configurations"><span className="icon-config"></span></Link>
                            : ""
                        }
                    </div>
                    <div className="skin-box-body">
                        <img src={"images/skin-" + this.props.skin + ".jpg"} alt={this.props.title} />
                        <span className="edit-config-details"><i>Edit details of the Skin</i></span>
                    </div>
                </div>
            </div>
        )
    }
}

export default SkinsComponent