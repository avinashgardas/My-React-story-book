import React, {Component} from 'react';
import './Carousel.css';
import data from './data.json';

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

        // this.handleLeftNav = this.handleLeftNav.bind(this);
        // this.handleRightNav = this.handleRightNav.bind(this);
    }

    renderSlides() {
        return data.map((country, index)=>{
            return(
                <Slide country={country} key={index}/>
            )
        });
    }

    handleLeftNav = (e) => {
        console.log(this.refs.carouselViewport.scrollLeft);
        //take this.refs into a const/var
        const {carouselViewport} = this.refs;

        let numberOfSlidesToScroll = 6;
        let widthOfEachSlide = 100;
        let length = numberOfSlidesToScroll * widthOfEachSlide;

        carouselViewport.scrollLeft -= length; /* short hand notofication */
    }

    handleRightNav = (e) => {
        console.log(this.refs.carouselViewport.scrollLeft);
        //take this.refs into a const/var
        const {carouselViewport} = this.refs;

        let numberOfSlidesToScroll = 6;
        let widthOfEachSlide = 100;
        let length = numberOfSlidesToScroll * widthOfEachSlide;

        carouselViewport.scrollLeft += length; /* short hand notofication */
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