import React from 'react'
import ItemLine from '../components/ItemLine.js'

class ItemsLineListComponent extends React.Component {
    render() {
        var items = [];
        var name = '';
        var filteredList = this.props.forms

        filteredList.forEach((form, index) => {
            if (form[0] !== name) {
                items.push(<ItemLine form={form} key={index} id={index}/>)
            }
            name = form[0]
        })

        return (
            <section className = "container">{items}</section>
        );
    }
}

export default ItemsLineListComponent
