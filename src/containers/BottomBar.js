import React from 'react'
import { connect } from 'react-redux'

import Views from '../components/Views.js'
import DeleteForm from '../components/DeleteForm.js'
import CreateNewForm from '../components/CreateNewForm.js'
import { changeView, massFormsSelection } from '../actions'

class BottomBarComponent extends React.Component {

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

    selectForms = (e) => {
        if(this.props.amount  == 0) {
            this.props.dispatch(massFormsSelection())
        } else {
            $('#modal-mass-delete').modal('show')
        }
    }

    render() {
        return (
            <nav className="bottombar boxed">
                <div className="container">
                    <Views
                        view={this.props.view}
                        changeViewToList={this.changeViewToList}
                        changeViewToBoxes={this.changeViewToBoxes}
                        changeViewToCarousel={this.changeViewToCarousel}
                    />
                    <DeleteForm
                        massFormsSelection={this.props.massFormsSelection}
                        amount={this.props.amount}
                        selectForms={this.selectForms}
                    />
                    <CreateNewForm />
                </div>
            </nav>
        );
    }
}

const mapStateToProps = (state) => ({
    view: state.view,
    massFormsSelection: state.massFormsSelection,
    amount: state.formSelection.amount
})

const BottomBar = connect(mapStateToProps)(BottomBarComponent)

export default BottomBar