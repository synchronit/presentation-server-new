import React from 'react'

class TopBarComponent extends React.Component {
    render() {
        return (
            <nav className="topbar">
                <div className="container">
                    <a className="logo" href="" title=""><img src="images/logo.svg" alt=""/></a>
                    <a className="user" href="" title="">
                        <span>Hi, Jhon Doe</span>
                        <img src="images/test/1.png" alt=""/>
                    </a>
                </div>
            </nav>
        );
    }
}

export default TopBarComponent