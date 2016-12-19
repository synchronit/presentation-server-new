import React from 'react'
import ItemLine from '../components/ItemLine.js'

class ItemsLineListComponent extends React.Component {
    render() {
        var items = [];
        var key = 0;
        var name = '';
        var filteredList = this.props.forms

        filteredList.forEach((form) => {
            if (form[0] !== name) {
                items.push(<ItemLine form={form} key={key++} />)
            }
            name = form[0]
        })

        return (
            <section className = "container">{items}</section>
        );
    }
}

export default ItemsLineListComponent
