import React from 'react'
import { connect } from 'react-redux'

import { fetchForms, loading } from '../actions'
import HomeHeader from './HomeHeader.js'
import ItemsLineList from './ItemsLineList.js'
import ItemsBoxList from './ItemsBoxList.js'
import ItemsCarouselList from './ItemsCarouselList.js'

import 'jquery.nicescroll/jquery.nicescroll.js'

class HomeComponent extends React.Component {

    componentDidMount() {
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
                    skin={this.props.skin}
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
            <div className="work-zone">
                <HomeHeader />
                {component}
                <span className={"up icon-chevron-up" + (this.props.view == 'CAROUSEL_VIEW' ? ' invisible' : '')}></span>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        formList: state.fetchForms.request.resultSet.rows,
        searchQuery: state.searchQuery,
        view: state.view,
        form: state.confirmDeleteForm,
        isFetching: state.fetchForms.isFetching,
        massFormsSelection: state.massFormsSelection,
        orderForms: state.orderForms,
        loading: state.loading,
        skin: state.skinSettings.skin
    }
}

const Home = connect(mapStateToProps)(HomeComponent)

export default Home
