import React from 'react'
import ItemLine from '../components/ItemLine.js'

class ItemsLineListComponent extends React.Component {

    render() {
        var items = [];

        this.props.forms.forEach((form, index) => {
            items.push(
                <ItemLine form={form} key={index} id={index} massFormsSelection={this.props.massFormsSelection} />
            )
        })

        return (
            <section className = "container">{items}</section>
        );
    }
}

export default ItemsLineListComponent
