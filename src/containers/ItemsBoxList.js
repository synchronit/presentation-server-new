import React from 'react'
import ItemBox from '../components/ItemBox.js'

class ItemsBoxListComponent extends React.Component {
    render() {
        var items = [];

        this.props.forms.forEach((form, index) => {
            items.push(
                <ItemBox form={form} key={index} id={index} massFormsSelection={this.props.massFormsSelection} />
            )
        })

        return (
            <section className="container">
                <div className="items-container row">
                    {items}
                </div>
            </section>
        );
    }
}

export default ItemsBoxListComponent
