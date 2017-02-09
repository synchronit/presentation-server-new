import React from 'react'
import { connect } from 'react-redux'

import ItemOptions from './ItemOptions.js'
import { addFormToSelection, deleteFormToSelection } from '../actions'

class ItemCarouselComponent extends React.Component {

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
            $(this.carouselElement).addClass('selected')
        } else {
            $(this.carouselElement).removeClass('selected')
        }

        return (
            <div className={"item-carousel" + classes} ref={carouselElement=>this.carouselElement = carouselElement}>
                <div className="item">
                    <header>
                        <span className="name">{this.props.form[0]}</span>
                    </header>
                    <div className="row">
                        <div className="stats col-xs-4">
                            <div><span className="icon-date"></span>13/06/2017</div>
                        </div>
                        <div className="stats col-xs-4">
                            <div><span className="icon-user"></span>31 CASES</div>
                        </div>
                        <div className="stats col-xs-4">
                            <div><span className="icon-fields"></span>15 FIELDS</div>
                        </div>
                    </div>
                    <img src={"images/" + this.props.skin + "/form.png"} alt="" />
                    <ItemOptions form={this.props.form[0]}/>
                </div>
                <div className="selection-mask" onClick={this.handleOnClick}></div>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    formSelection: state.formSelection,
    massFormsSelection: state.massFormsSelection,
    skin: state.skinSettings.skin
})

const ItemCarousel = connect(mapStateToProps)(ItemCarouselComponent)

export default ItemCarousel
