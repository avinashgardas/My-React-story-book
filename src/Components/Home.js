import React, {Component} from 'react';
//components
import BlurImage from './Media/LazyLoad/BlurImage';
import HorizontalScroll from './Carousel/Horizontal/HorizontalScroll';
import CarouselShowcase from './Carousel/Slider/CarouselShowcase';
import SendNotification from './APIs/Firebase/FCM/SendNotification';
import JsonToHTML from './APIs/Parsing/JsonToHTML';
import ShineGradientAnimation from './Loader/ShineGradientAnimation';

class Home extends Component {
    render() {
        return(
            <div>

                <div>
                    {/* <BlurImage /> */}
                </div>
                
                {/* <HorizontalScroll /> */}

                <CarouselShowcase/>

                {/* <SendNotification /> */}

                {/* <JsonToHTML /> */}

                {/* <ShineGradientAnimation /> */}
            </div>
        )
    }
}
export default Home;