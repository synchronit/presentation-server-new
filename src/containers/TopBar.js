import React from 'react'
import { Link } from 'react-router'
import { connect } from 'react-redux'

class TopBarComponent extends React.Component {

    render() {
        return (
            <nav className={"topbar " + this.props.layout}>
                <div className="container">
                    <Link to="/" className="logo"><img src="images/logo.svg" alt=""/></Link>
                    <div className="user dropdown">
                        <a className="dropdown-toggle" href="#" title="" data-toggle="dropdown">
                            <span className="hidden-xs-down">Hi, Jhon Doe</span>
                            <div className="image-container">
                                <img src="images/test/1.png" alt=""/>
                            </div>
                        </a>
                        <div className="dropdown-menu">
                            <div className="dropdown-menu-body">
                                <img src="images/test/1.png" alt=""/>
                                <p>Jhon Doe <small>jhondoe@gmail.com</small></p>
                            </div>
                            <div className="dropdown-menu-footer">
                                <button className="btn">LOGOUT</button>
                                <Link to="/settings/skins" className="btn btn-primary">SETTINGS</Link>
                            </div>
                        </div>
                    </div>
                    <a className="btn btn-icon btn-badge" href="" title="" data-toggle="modal" data-target="#modal-notifications">
                        <span className="icon-notification"></span>
                        <span className="hidden-sm-down">NOTIFICATIONS</span>
                        <span className="badge">3</span>
                    </a>
                    <Link to="/" className="btn btn-icon"><span className="icon-home"></span></Link>
                </div>
            </nav>
        )
    }
}

const mapStateToProps = (state) => ({
    layout: state.skinSettings.layout
})

const TopBar = connect(mapStateToProps)(TopBarComponent)

export default TopBar