import React from 'react'
import { connect } from 'react-redux'
import { changeView } from '../actions'

class ViewsComponent extends React.Component {

    changeViewToList = (e) => {
        e.preventDefault()
        this.props.dispatch(changeView('LIST_VIEW'))
    }

    changeViewToBoxes = (e) => {
        e.preventDefault()
        this.props.dispatch(changeView('BOXES_VIEW'))
    }

    changeViewToCarousel = (e) => {
        e.preventDefault()
        this.props.dispatch(changeView('CAROUSEL_VIEW'))
    }

    render() {
        return (
            <ul className="views">
                <li>
                    <a className={"icon-list " + (this.props.view == 'LIST_VIEW' ? 'active' : '')}
                       href="#"
                       title=""
                       onClick={this.changeViewToList}>
                    </a>
                </li>
                <li>
                    <a className={"icon-boxes " + (this.props.view == 'BOXES_VIEW' ? 'active' : '')}
                       href="#"
                       title=""
                       onClick={this.changeViewToBoxes}>
                    </a>
                </li>
                <li>
                    <a className={"icon-carousel " + (this.props.view == 'CAROUSEL_VIEW' ? 'active' : '')}
                       href="#"
                       title=""
                       onClick={this.changeViewToCarousel}>
                    </a>
                </li>
            </ul>
        );
    }
}

const mapStateToProps = (state) => ({
    view: state.view
})

const Views = connect(mapStateToProps)(ViewsComponent)

export default Views