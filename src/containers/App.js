import React from 'react'
import TopBar from '../components/TopBar'
import BottomBar from '../components/BottomBar.js'
import Content from './Content.js'

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
