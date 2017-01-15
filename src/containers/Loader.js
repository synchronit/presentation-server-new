import React from 'react'
import { connect } from 'react-redux'

class LoaderComponent extends React.Component {

    render() {
        return <div className={"loader" + (!this.props.isFetching ? " invisible" : "")}></div>
    }
}

const mapStateToProps = (state) => {
    //console.log(state)
    return {
        isFetching: state.fetchForms.isFetching
    }
}

const Loader = connect(mapStateToProps)(LoaderComponent)

export default Loader
