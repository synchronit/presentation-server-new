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
            focusOnSelect: true,
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

        this.props.forms.forEach((form, index) => {
            items.push(<ItemCarousel form={form} key={index}/>)
        })

        return (
            <section className="items-carousel-list" ref={carouselElement=>this.carouselElement = carouselElement}>
                {items}
            </section>
        );
    }
}

export default ItemsCarouselListComponent
