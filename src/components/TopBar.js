import React from 'react'

class TopBarComponent extends React.Component {
    render() {
        return (
            <nav className="topbar boxed">
                <div className="container">
                    <a className="logo" href="" title=""><img src="images/logo.svg" alt=""/></a>
                    <a className="user" href="" title="">
                        <span className="hidden-xs-down">Hi, Jhon Doe</span>
                        <img src="images/test/1.png" alt=""/>
                    </a>
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