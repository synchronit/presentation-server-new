import React from 'react'
import TopBar from './TopBar'
import BottomBar from './BottomBar.js'
import Content from '../containers/Content.js'

class AppComponent extends React.Component {
    render() {
        return <div>
                <TopBar />
                <Content />
                <BottomBar />
               </div>
    }
}

export default AppComponent
