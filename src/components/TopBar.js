import React from 'react'

class TopBarComponent extends React.Component {
    render() {
        return (
            <nav className="topbar boxed">
                <div className="container">
                    <a className="logo" href="" title=""><img src="images/logo.svg" alt=""/></a>
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
                                <button className="btn btn-primary">MY ACCOUNT</button>
                            </div>
                        </div>
                    </div>
                    <a className="btn btn-icon btn-badge" href="" title="">
                        <span className="icon-notification"></span>
                        <span className="hidden-sm-down">NOTIFICATIONS</span>
                        <span className="badge">3</span>
                    </a>
                    <a className="btn btn-icon" href="" title=""><span className="icon-home"></span></a>
                </div>
            </nav>
        );
    }
}

export default TopBarComponent