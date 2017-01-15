import React from 'react'

class ViewsComponent extends React.Component {

    render() {
        return (
            <ul className="views">
                <li>
                    <a className={"icon-list " + (this.props.view == 'LIST_VIEW' ? 'active' : '')}
                       href="#"
                       title="LIST VIEW"
                       onClick={this.props.changeViewToList}
                       data-toggle="tooltip"
                       data-placement="top">
                    </a>
                </li>
                <li>
                    <a className={"icon-boxes " + (this.props.view == 'BOXES_VIEW' ? 'active' : '')}
                       href="#"
                       title="BOX VIEW"
                       onClick={this.props.changeViewToBoxes}
                       data-toggle="tooltip"
                       data-placement="top">
                    </a>
                </li>
                <li>
                    <a className={"icon-carousel " + (this.props.view == 'CAROUSEL_VIEW' ? 'active' : '')}
                       href="#"
                       title="CAROUSEL VIEW"
                       onClick={this.props.changeViewToCarousel}
                       data-toggle="tooltip"
                       data-placement="top">
                    </a>
                </li>
            </ul>
        );
    }
}

export default ViewsComponent