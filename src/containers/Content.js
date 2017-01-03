import React from 'react'
import { connect } from 'react-redux'

import { fetchForms } from '../actions'
import Header from './Header.js'
import ItemsLineList from './ItemsLineList.js'
import ItemsBoxList from './ItemsBoxList.js'
import ItemsCarouselList from './ItemsCarouselList.js'

import '../../node_modules/jquery.nicescroll/jquery.nicescroll.js'

class ContentComponent extends React.Component {

    componentDidMount() {
        $(this.workZoneElement).niceScroll({
            cursorcolor:'rgba(255,255,255,.05)',
            cursorborder: 'none'
        })

        this.props.dispatch(fetchForms())
    }

    filterList() {
        var name = '';

        var filteredList = this.props.formList.filter((item) => {
            var patt = new RegExp(this.props.searchQuery, 'i')
            var result = (item[0] !== name && patt.test(item[0]))
            name = item[0]
            return result
        })

        switch (this.props.orderForms) {
            case 'A-Z':
                filteredList = filteredList.sort((a, b) => {
                    var x = a[0].toLowerCase(), y = b[0].toLowerCase();
                    return x < y ? -1 : x > y ? 1 : 0;
                })
                break
            case 'Z-A':
                filteredList = filteredList.sort((a, b) => {
                    var x = a[0].toLowerCase(), y = b[0].toLowerCase();
                    return x > y ? -1 : x < y ? 1 : 0;
                })
                break
            case 'Recent':
                filteredList = filteredList.sort((a, b) => { return a-b })
                break
        }

        return filteredList
    }

    render() {
        var component = null

        switch (this.props.view) {
            case 'LIST_VIEW':
                component = <ItemsLineList
                    forms={this.filterList()}
                    massFormsSelection={this.props.massFormsSelection}
                    orderForms={this.props.orderForms}
                />
                break
            case 'BOXES_VIEW':
                component = <ItemsBoxList forms={this.filterList()} massFormsSelection={this.props.massFormsSelection}/>
                break
            case 'CAROUSEL_VIEW':
                component = <ItemsCarouselList forms={this.filterList()} massFormsSelection={this.props.massFormsSelection}/>
                break
            default:
                component = <ItemsLineList forms={this.filterList()} massFormsSelection={this.props.massFormsSelection}/>
        }

        return (
            <article className="content boxed">
                <div className="work-zone" ref={workZoneElement=>this.workZoneElement=workZoneElement}>
                    <Header />
                    {component}
                </div>
            </article>
        );
    }
}

const mapStateToProps = (state) => {
    console.log(state)
    return {
        formList: state.fetchForms.request.resultSet.rows,
        searchQuery: state.searchQuery,
        view: state.view,
        form: state.confirmDeleteForm,
        isFetching: state.fetchForms.isFetching,
        massFormsSelection: state.massFormsSelection,
        orderForms: state.orderForms
    }
}

const Content = connect(
    mapStateToProps
)(ContentComponent)

export default Content
