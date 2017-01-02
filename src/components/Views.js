import React from 'react'

class ViewsComponent extends React.Component {

    render() {
        return (
            <ul className="views">
                <li>
                    <a className={"icon-list " + (this.props.view == 'LIST_VIEW' ? 'active' : '')}
                       href="#"
                       title=""
                       onClick={this.props.changeViewToList}>
                    </a>
                </li>
                <li>
                    <a className={"icon-boxes " + (this.props.view == 'BOXES_VIEW' ? 'active' : '')}
                       href="#"
                       title=""
                       onClick={this.props.changeViewToBoxes}>
                    </a>
                </li>
                <li>
                    <a className={"icon-carousel " + (this.props.view == 'CAROUSEL_VIEW' ? 'active' : '')}
                       href="#"
                       title=""
                       onClick={this.props.changeViewToCarousel}>
                    </a>
                </li>
            </ul>
        );
    }
}

export default ViewsComponent