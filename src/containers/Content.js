import React from 'react'
import Header from './Header.js'
import ItemList from './ItemList.js'

import jQuery from 'jquery';
import $ from 'jquery';
import nicescroll from '../../node_modules/jquery.nicescroll/jquery.nicescroll.js'

class ContentComponent extends React.Component {

    componentDidMount() {
        $(this.workZoneElement).niceScroll({
                cursorcolor:'rgba(255,255,255,.05)',
                cursorborder: 'none'
            })
    }

    render() {
        return (
            <article className="content boxed">
                <div className="work-zone" ref={workZoneElement=>this.workZoneElement=workZoneElement}>
                    <Header />
                    <ItemList />
                </div>
            </article>
        );
    }
}

export default ContentComponent
