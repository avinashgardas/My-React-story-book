import React, {Component} from 'react';
import './GoogleCarousel.css';
import data from './../data.json';
import scrollTo from './../scrollToAnimate';
import throttle from 'lodash.throttle';
import classnames from 'classnames';

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
        <div id="#google-carousel" className="slide boxshadow" style={{height: 160, width: 100}}>
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

class GoogleCarousel extends Component {
    constructor(props) {
        super(props);
        this.animatingLeft = false;
        this.animatingRight = false;

        this.state = {
            numberOfSlidesToScroll: 6,
            allTheWayLeft: false,
            allTheWayRight: false
        }
    }

    onResize = () => {
        this.checkNumberOfSlidesToScroll();
    }

    componentDidMount() {
        //call this to determine carousel buttons state
        this.checkIfSlidesAllTheWayOver();

        //call this when component has mounted, inorder to determine innerWidth
        this.checkNumberOfSlidesToScroll();

        window.addEventListener("resize", throttle(this.onResize, 250));
        window.addEventListener("keydown", this.onKeydown);
    }

    componentWillUnmount() {
        window.removeEventListener("resize", throttle(this.onResize, 250));
    }

    onKeydown = (event) => {
        const {keyCode} = event;
        let leftArrow = keyCode === 37;
        let rightArrow = keyCode === 39;

        if(leftArrow && !this.state.allTheWayLeft) { //left-arrow && not all the way left
            if(!this.animatingLeft) {
                //helps to avoid listening more than 1 keyboard input till animatingLeft becomes false, when carousel is animating using Promise
                this.animatingLeft = true;
                this.handleLeftNav()
                    .then(()=>{
                        this.animatingLeft = false;
                    });
            }
            
        }
        else if(rightArrow) {
            if(!this.animatingRight && !this.state.allTheWayRight) { //right-arrow && not all the way right
                //helps to avoid listening more than 1 keyboard input till animatingLeft becomes false, when carousel is animating using Promise
                this.animatingRight = true;
                this.handleRightNav()
                    .then(()=>{
                        this.animatingRight = false;
                    })
            }
        }
    }

    onScrollCarousel = (event) => {
        this.checkIfSlidesAllTheWayOver();
    }

    checkIfSlidesAllTheWayOver = () => {
        const {carouselViewport} = this.refs;
        let allTheWayLeft = false, allTheWayRight = false; //default

        //allTheWayLeft
        if(carouselViewport.scrollLeft === 0) {
            allTheWayLeft = true;
        }

        //allTheWayRight: if scrollLeft + length Of ViewPort offsetWidth === real length of viewport
        //for 10 carousel-items each of width 100. 10 * 100 === real length of viewport
        let amountScrolled = carouselViewport.scrollLeft;
        let viewPortLength = carouselViewport.clientWidth; //or carouselViewport.offsetWidth
        let scrolled_plus_viewportlength = amountScrolled + viewPortLength;

        let totalWidthOfCarousel = carouselViewport.scrollWidth;
        
        if(scrolled_plus_viewportlength === totalWidthOfCarousel) {
            allTheWayRight = true;
        }

        if(this.state.allTheWayLeft !== allTheWayLeft || this.state.allTheWayRight !== allTheWayRight) {
            this.setState({allTheWayLeft, allTheWayRight});
        }
        
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
            // single object in set state, skip writing {numberOfSlidesToScroll: numberOfSlidesToScroll}
            this.setState({numberOfSlidesToScroll});
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
            let widthOfEachSlide = document.getElementById('#google-carousel').offsetWidth;
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
                <Slide country={country} 
                key={index}
                ref={compSlide => this.slide = compSlide}/>
            )
        });
    }

    handleLeftClick = () => {
        if(!this.animatingLeft && !this.state.allTheWayLeft) {
            //helps to avoid listening more than 1 keyboard input till animatingLeft becomes false, when carousel is animating using Promise
            this.animatingLeft = true;
            this.handleLeftNav()
                .then(()=>{
                    this.animatingLeft = false;
                });
        }
    }

    handleRightClick = () => {
        if(!this.animatingRight && !this.state.allTheWayRight) { //right-arrow && not all the way right
            //helps to avoid listening more than 1 keyboard input till animatingLeft becomes false, when carousel is animating using Promise
            this.animatingRight = true;
            this.handleRightNav()
                .then(()=>{
                    this.animatingRight = false;
                })
        }
    }

    handleLeftNav = () => {
        //take this.refs into a const/var
        const {carouselViewport} = this.refs;

        let { widthToScroll, timeToScroll } = this.widthAndTimeToScroll();

        let newPosition = carouselViewport.scrollLeft - widthToScroll;

        //scroll with animation
        let promise = scrollTo({
            element: carouselViewport, 
            to: newPosition, 
            duration: timeToScroll, 
            scrollDirection: 'scrollLeft',
            callback: this.checkIfSlidesAllTheWayOver,
            context: this
        });
        return promise;
    }

    handleRightNav = () => {
        //take this.refs into a const/var
        const {carouselViewport} = this.refs;

        let {widthToScroll, timeToScroll} = this.widthAndTimeToScroll();

        let newPosition = carouselViewport.scrollLeft + widthToScroll;

        //scroll with animation
        let promise = scrollTo({
            element: carouselViewport, 
            to: newPosition, 
            duration: timeToScroll, 
            scrollDirection: 'scrollLeft',
            callback: this.checkIfSlidesAllTheWayOver,
            context: this
        });
        return promise;
    }

    render() {
        const {allTheWayLeft, allTheWayRight} = this.state;
        const navClasses = classnames({
            'carousel-nav': true,
            'btn-round': true,
            'display-flex-center': true
        });
        const leftNavClasses = classnames({
            'carousel-left-nav': true,
            'google-carousel-left-nav': true,
            'carousel-nav-disabled': allTheWayLeft
        }, navClasses);
        const rightNavClasses = classnames({
            'carousel-right-nav': true,
            'google-carousel-right-nav': true,
            'carousel-nav-disabled': allTheWayRight
        }, navClasses);

        return(
            <div className="carousel-container">
                <div className={leftNavClasses} onClick={this.handleLeftClick}>
                    <span><i className="fas fa-chevron-left fa-sm"></i></span>
                </div>

                <div className="carousel-viewport google-viewport" 
                ref="carouselViewport"
                onScroll={throttle(this.onScrollCarousel, 250)}>
                    {this.renderSlides()}
                </div>

                <div className={rightNavClasses} onClick={this.handleRightClick}>
                    <span><i className="fas fa-chevron-right fa-sm"></i></span>
                </div>
            </div>
        )
    }
}
export default GoogleCarousel;