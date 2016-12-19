import React from 'react'
import ItemBox from '../components/ItemBox.js'

class ItemsBoxListComponent extends React.Component {
    render() {
        var items = [];
        var key = 0;
        var name = '';
        var filteredList = this.props.forms

        filteredList.forEach((form) => {
            if (form[0] !== name) {
                items.push(<ItemBox form={form} key={key++} />)
            }
            name = form[0]
        })

        return (
            <section className="container">
                <div className="row">
                    {items}
                </div>
            </section>
        );
    }
}

export default ItemsBoxListComponent
