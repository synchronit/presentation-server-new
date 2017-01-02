import React from 'react'
import { connect } from 'react-redux'

import ItemOptions from './ItemOptions.js'
import { addFormToSelection, deleteFormToSelection } from '../actions'

class ItemBoxComponent extends React.Component {

    handleOnClick = () => {
        this.isSelected()
            ? this.props.dispatch(deleteFormToSelection(this.props.form))
            : this.props.dispatch(addFormToSelection(this.props.form))
    }

    isSelected = () => {
        var result = this.props.formSelection.selectedForms.some((item) => {
            return item[0] == this.props.form[0]
        })
        return result
    }

    render() {
        return (
            <div className={"item-box" + (this.props.massFormsSelection ? " selectable" : "")}>
                <div className={"item" + (this.isSelected() ? " selected" : "")}>
                    <div className="body">
                        <span className="icon-empty-form"></span>
                        <span className="name">{this.props.form[0]}</span>
                    </div>
                    <div className="footer">
                        <span><i className="icon-date"></i> 13/6/2017</span>
                        <span><i className="icon-user"></i> 57 CASES</span>
                    </div>
                    <ItemOptions form={this.props.form[0]}/>
                    <div className="selection-mask" onClick={this.handleOnClick}></div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    formSelection: state.formSelection
})

const ItemBox = connect(mapStateToProps)(ItemBoxComponent)

export default ItemBox
