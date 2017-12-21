import React, {Component} from 'react';
//components
import Carousel from './Carousel';
import SingleItemCarousel from './SingleItem/SingleItemCarousel';
import GoogleCarousel from './Google/GoogleCarousel';
import YoutubeCarousel from './Youtube/YoutubeCarousel';
import ImageCarousel from './ImageCarousel/ImageCarousel';
import ImageCarouselAutoplay from './ImageCarouselAutoplay/ImageCarouselAutoplay';
import LazyLoadImageCarousel from './LazyLoadImageCarousel/LazyLoadImageCarousel';
import LazyLoadCarousel from './LazyLoadCarousel/LazyLoadCarousel';
import LazyLoadImageCarouselAutoplay from './LazyLoadImageCarouselAutoplay/LazyLoadImageCarouselAutoplay';

class CarouselShowcase extends Component {
    render() {
        return(
            <div>
                <h2 style={{textAlign: 'center'}}>Default carousel</h2>
                <Carousel />
                <br/>

                <h2 style={{textAlign: 'center'}}>Google carousel</h2>
                <GoogleCarousel />
                <br/>

                <h2 style={{textAlign: 'center'}}>Youtube carousel</h2>
                <YoutubeCarousel />
                <br/>

                <h2 style={{textAlign: 'center'}}>Single item carousel</h2>
                <SingleItemCarousel />
                <br/>

                <h2 style={{textAlign: 'center'}}>Image carousel</h2>
                <ImageCarousel />
                <br/>

                <h2 style={{textAlign: 'center'}}>Image carousel (autoplay)</h2>
                <ImageCarouselAutoplay />
                <br/>

                <h2 style={{textAlign: 'center'}}>Lazy load carousel</h2>
                <LazyLoadCarousel />
                <br/>

                <h2 style={{textAlign: 'center'}}>Lazy Image carousel</h2>
                <LazyLoadImageCarousel />
                <br/>

                <h2 style={{textAlign: 'center'}}>Lazy Image carousel (autoplay)</h2>
                <LazyLoadImageCarouselAutoplay />
                <br/>

            </div>
        )
    }
}
export default CarouselShowcase;