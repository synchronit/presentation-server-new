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
        var originalList = this.props.formList
        const searchQuery = this.props.searchQuery

        if(this.props.confirm == 'YES') {
            originalList = this.deleteForm(originalList, this.props.form)
        }

        var filteredList = originalList.filter(function(item){
            var patt = new RegExp(searchQuery, 'i')
            return patt.test(item[0])
        })

        return filteredList
    }

    deleteForm(originalList, form) {
        return originalList.filter(function(item){
            return item[0] != form
        })
    }

    render() {
        var component = null

        switch (this.props.view) {
            case 'LIST_VIEW':
                component = <ItemsLineList forms={this.filterList()} />
                break
            case 'BOXES_VIEW':
                component = <ItemsBoxList forms={this.filterList()} />
                break
            case 'CAROUSEL_VIEW':
                component = <ItemsCarouselList forms={this.filterList()} />
                break
            default:
                component = <ItemsLineList forms={this.filterList()} />
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
    return {
        formList: state.fetchForms.request.resultSet.rows,
        searchQuery: state.searchQuery,
        view: state.view,
        form: state.deleteForms.form,
        confirm: state.deleteForms.confirm
    }
}

const Content = connect(
    mapStateToProps
)(ContentComponent)

export default Content
