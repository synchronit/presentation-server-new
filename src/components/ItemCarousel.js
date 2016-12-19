import React from 'react'

class ItemCarouselComponent extends React.Component {

    render() {
        return (
            <div className="item-carousel">
                <div className="item">
                    <header>
                        <span className="name">{this.props.form[0]}</span>
                    </header>
                    <div className="row">
                        <div className="stats col-xs-4">
                            <div><span className="icon-date"></span>13/06/2017</div>
                        </div>
                        <div className="stats col-xs-4">
                            <div><span className="icon-user"></span>31 CASES</div>
                        </div>
                        <div className="stats col-xs-4">
                            <div><span className="icon-fields"></span>15 FIELDS</div>
                        </div>
                    </div>
                    <img src="images/form.png" alt="" />
                </div>
            </div>
        );
    }
}

export default ItemCarouselComponent
