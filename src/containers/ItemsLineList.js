import React from 'react'
import ItemLine from '../components/ItemLine.js'
import Marker from '../components/Marker.js'

class ItemsLineListComponent extends React.Component {

    render() {
        var items = []
        var markers = []
        var char = ""
        var count = 1
        var first = true
        var filteredList = this.props.forms

        this.props.forms.forEach((form, index) => {
            items.push(
                <ItemLine form={form} key={index} id={index} massFormsSelection={this.props.massFormsSelection} />
            )
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
        }

        filteredList.forEach((form, index) => {
            var temp = form[0].charAt(0)
            if (this.props.orderForms == "Recent" || this.props.orderForms == "Older") {
                markers.push(<Marker className=" marker-date" char="JAN, 2017" count={1} key={index} />)
            } else if(char.toLowerCase() != temp.toLowerCase()) {
                if (!first) {
                    markers.push(<Marker char={char.toUpperCase()} count={count} key={index - 1} />)
                    count = 1
                }
                if (char == "") {
                    first = false
                }
                char = temp
            }
            else
            {
                count++
            }
            if (index == filteredList.length - 1 && this.props.orderForms != "Recent" && this.props.orderForms != "Older") {
                markers.push(<Marker char={temp.toUpperCase()} count={count} key={index} />)
            }
        })

        return (
            <section className = "container">
                <div className="items-container">
                    <div className="markers">{markers}</div>
                    {items}
                </div>
            </section>
        );
    }
}

export default ItemsLineListComponent
