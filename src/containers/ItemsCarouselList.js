import React from 'react'
import ItemCarousel from '../components/ItemCarousel.js'

import 'slick-carousel'

class ItemsCarouselListComponent extends React.Component {

    componentDidMount() {
        this.initCarousel()
    }

    componentWillUpdate() {
        this.destroyCarousel()
    }

    componentDidUpdate() {
        this.initCarousel()
    }

    componentWillUnmount() {
        this.destroyCarousel()
    }

    initCarousel() {

        this.carousel = $(this.carouselElement).slick({
            slidesToShow: 1,
            centerMode: true,
            arrows: true,
            waitForAnimate: false,
            mobileFirst: true,
            prevArrow: '<button type="button" class="arrow prev"><span class="icon-chevron-left"></span></button>',
            nextArrow: '<button type="button" class="arrow next"><span class="icon-chevron-right"></span></button>',
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

    destroyCarousel() {
        this.carousel.slick('unslick')
    }

    render() {
        var items = [];
        var key = 0;
        var name = '';
        var filteredList = this.props.forms

        this.newlist = filteredList.filter((form) => {
            var result = false
            if (form[0] !== name) {
                items.push(<ItemCarousel form={form} key={key++} />)
                result = true
            }
            name = form[0]
            return result
        })

        return (
            <section className="items-carousel-list"
                     ref={carouselElement=>this.carouselElement = carouselElement}>{items}
            </section>
        );
    }
}

export default ItemsCarouselListComponent
