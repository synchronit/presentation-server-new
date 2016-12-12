import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { searchForm } from '../actions'

class SearchField extends React.Component {

    render() {
        return (
            <div className="input-group search-field">
                <input
                className="form-control"
                type="search"
                ref="input"
                placeholder="Search..."
                onChange={()=> {
                    this.props.dispatch(searchForm(this.refs.input.value))
                }}
                />
                <button className="input-group-addon">
                    <span className="icon-search"></span>
                </button>
            </div>
        );
    }
}

const searchField = connect()(SearchField)

export default searchField