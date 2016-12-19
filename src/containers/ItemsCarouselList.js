import React from 'react'
import ItemCarousel from '../components/ItemCarousel.js'

import 'slick-carousel'

class ItemsCarouselListComponent extends React.Component {

    componentDidMount() {
        this.carousel = $(this.carouselElement).slick({
            slidesToShow: 1,
            centerMode: true,
            arrows: true,
            waitForAnimate: false,
            mobileFirst: true,
            responsive: [
                {
                    breakpoint: 543,
                    settings: {
                        slidesToShow: 3
                    }
                }
            ]
        })
    }

    componentWillUnmount() {
        this.carousel.slick('unslick')
    }

    render() {
        var items = [];
        var key = 0;
        var name = '';
        var filteredList = this.props.forms

        filteredList.forEach((form) => {
            if (form[0] !== name) {
                items.push(<ItemCarousel form={form} key={key++} />)
            }
            name = form[0]
        })

        return (
            <section className="items-carousel-list"
                     ref={carouselElement=>this.carouselElement = carouselElement}>{items}
            </section>
        );
    }
}

export default ItemsCarouselListComponent
