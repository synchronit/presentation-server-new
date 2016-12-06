import React from 'react'
import Views from './Views.js'
import CreateNewForm from './CreateNewForm.js'

class BottomBarComponent extends React.Component {
    render() {
        return (
            <nav className="bottombar">
                <div className="container">
                    <Views />
                    <CreateNewForm />
                </div>
            </nav>
        );
    }
}

export default BottomBarComponent