import React, {Component} from 'react';
import './Carousel.css';
import data from './data.json';
import scrollTo from './scrollToAnimate';

function Slide(props) {
    // {
    // "url": "/wiki/Zambia",
    // "alpha3": "ZMB",
    // "file_url": "//upload.wikimedia.org/wikipedia/commons/0/06/Flag_of_Zambia.svg",
    // "name": "Zambia",
    // "license": "Public domain"
    // }

    const {url,alpha3,file_url,name,license} = props.country;
    return(
        <div className="slide boxshadow" style={{height: 160, width: 100}}>
            <div className="slide-div-background-image-full" style={{width: `100%`, height: 70, backgroundImage: `url('https:${file_url}')`}}></div>

            <div className="slide-div-title display-flex-center" style={{width: `100%`, height: 50, padding: 0, marginTop: 4, marginBottom: 4}}>
                <span >{name}</span>
            </div>

            <div className="slide-div-code display-flex-center" style={{width: `100%`, height: 30, padding: 0, marginTop: 0, marginBottom: 4}}>
                {alpha3}
            </div>
        </div>
    )
}

class Carousel extends Component {
    constructor(props) {
        super(props);

        this.state = {
            numberOfSlidesToScroll: 6
        }
    }

    onResize = () => {
        this.checkNumberOfSlidesToScroll();
    }

    componentDidMount() {
        window.addEventListener("resize", this.onResize);
    }

    componentWillUnmount() {
        window.removeEventListener("resize", this.onResize);
    }

    checkNumberOfSlidesToScroll = () => {
        var numberOfSlidesToScroll;

        if(window.innerWidth <= 900) {
            numberOfSlidesToScroll = 'full';
        }
        else {
            numberOfSlidesToScroll = 6;
        }

        if(this.state.numberOfSlidesToScroll !== numberOfSlidesToScroll) {
            console.log('im here', numberOfSlidesToScroll);
            this.setState({numberOfSlidesToScroll: numberOfSlidesToScroll});
        }
    }

    widthAndTimeToScroll = () => {
        const {carouselViewport} = this.refs;
        let numberOfSlidesToScroll = this.state.numberOfSlidesToScroll;

        if(numberOfSlidesToScroll === 'full') {
            //widthToScroll: total width of carousel view port for mobile
            return {
                widthToScroll: carouselViewport.offsetWidth,
                timeToScroll: 400
            }
        }
        else {
            let widthOfEachSlide = 100;
            let timeToMoveOneSlide = 200;
            
            return {
                //widthToScroll: dynamic width
                widthToScroll: numberOfSlidesToScroll * widthOfEachSlide,
                timeToScroll:  Math.min( (numberOfSlidesToScroll * timeToMoveOneSlide), 400)
            }
        }
    }

    renderSlides() {
        return data.map((country, index)=>{
            return(
                <Slide country={country} key={index}/>
            )
        });
    }

    handleLeftNav = (e) => {
        //take this.refs into a const/var
        const {carouselViewport} = this.refs;

        let { widthToScroll, timeToScroll } = this.widthAndTimeToScroll();

        let newPosition = carouselViewport.scrollLeft - widthToScroll;

        //scroll with animation
        scrollTo({
            element: carouselViewport, 
            to: newPosition, 
            duration: timeToScroll, 
            scrollDirection: 'scrollLeft'
        });
    }

    handleRightNav = (e) => {
        //take this.refs into a const/var
        const {carouselViewport} = this.refs;

        let {widthToScroll, timeToScroll} = this.widthAndTimeToScroll();

        let newPosition = carouselViewport.scrollLeft + widthToScroll;

        //scroll with animation
        scrollTo({
            element: carouselViewport, 
            to: newPosition, 
            duration: timeToScroll, 
            scrollDirection: 'scrollLeft'
        });
    }

    render() {
        return(
            <div className="carousel-container">
                <button className="carousel-nav carousel-left-nav" onClick={this.handleLeftNav}>&#60;</button>

                <div className="carousel-viewport" ref="carouselViewport">
                    {this.renderSlides()}
                </div>

                <button className="carousel-nav carousel-right-nav" onClick={this.handleRightNav}>&#62;</button>
            </div>
        )
    }
}
export default Carousel;