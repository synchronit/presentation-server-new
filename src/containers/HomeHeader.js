import React from 'react'
import { connect } from 'react-redux'
import Heading from '../components/Heading'
import OrderForms from '../components/OrderForms.js'
import SearchField from '../components/SearchField'
import { orderForms } from '../actions'

class HomeHeaderComponent extends React.Component {

    orderAZ = (e) => {
        this.props.dispatch(orderForms('A-Z'))
    }

    orderZA = (e) => {
        this.props.dispatch(orderForms('Z-A'))
    }

    orderRecent = (e) => {
        this.props.dispatch(orderForms('Recent'))
    }

    orderOlder = (e) => {
        this.props.dispatch(orderForms('Older'))
    }

    render() {
        return (
            <header className="container">
                <Heading title="MY FORMS" subtitle={"(" + this.props.message + ")"} />
                <SearchField />
                <OrderForms
                    orderForms={this.props.orderForms}
                    orderAZ={this.orderAZ}
                    orderZA={this.orderZA}
                    orderRecent={this.orderRecent}
                    orderOlder={this.orderOlder}
                />
            </header>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        message: state.fetchForms.request.message,
        orderForms: state.orderForms
    }
}

const HomeHeader = connect(mapStateToProps)(HomeHeaderComponent)

export default HomeHeader
