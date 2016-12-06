import React from 'react'
import { connect } from 'react-redux'
import Item from '../components/Item.js'

class ItemListComponent extends React.Component {
    render() {
        var items = [];
        var name = '';
        var key = 0;
        this.props.forms.forEach((form) => {
            if(form[0] !== name) {
                items.push(<Item form={form} key={key++} />);
            }
            name = form[0];
        });

        return (
            <section className="item-list container">
                <div className="row">
                {items}
                </div>
            </section>
        );
    }
}

const mapStateToProps = (state) => ({
    forms: state
})

const ItemList = connect(
    mapStateToProps
)(ItemListComponent)

export default ItemList
