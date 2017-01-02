import React from 'react'
import { connect } from 'react-redux'
import ItemOptions from './ItemOptions.js'
import { addFormToSelection, deleteFormToSelection } from '../actions'

class ItemLineComponent extends React.Component {

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
        var classes = ''
        if(this.props.massFormsSelection) {
            classes += ' selectable'
        }
        if(this.isSelected()) {
            classes += ' selected'
        }

        return (
            <div className={"item-line" + classes}>
                <div className="left">
                    <span className="name">{this.props.form[0]}</span>
                </div>
                <div className="right hidden-sm-down">
                    <span><i className="icon-date"></i> 13/6/2017</span>
                    <span><i className="icon-user"></i> 57 CASES</span>
                </div>
                <ItemOptions form={this.props.form[0]} />
                <div className="selection-mask" onClick={this.handleOnClick}></div>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    formSelection: state.formSelection
})

const ItemLine = connect(mapStateToProps)(ItemLineComponent)

export default ItemLine
