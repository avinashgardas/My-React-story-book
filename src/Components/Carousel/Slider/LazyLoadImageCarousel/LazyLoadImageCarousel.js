import React, {Component} from 'react';
import './ImageCarousel.css';
import data from './data.json';
import scrollTo from './../scrollToAnimate';
import throttle from 'lodash.throttle';
import classnames from 'classnames';
import Constants from './../../../Media/LazyLoad/Constants';
import './shineGradientAnimation.css';

function Slide(props) {
    const {url,alpha3,file_url,name,license,image} = props.country;
    return(
        <div id="#image-carousel" className="slide image-slide boxshadow " style={{height: 300, width: `100%`}}>
            <div 
            className="slide-div-background-image-full lazyload-slide lazyload-image-carousel-container"
            style={{width: `100%`, height: `100%`, backgroundImage: `url('${image}')`}}>
                {/* shine div */}
                <div className="show-off" />
            </div>
            
        </div>
    )
}

class LazyLoadImageCarousel extends Component {
    constructor(props) {
        super(props);
        this.animatingLeft = false;
        this.animatingRight = false;

        this.state = {
            numberOfSlidesToScroll: 'full',
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
        //this.checkNumberOfSlidesToScroll();

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
            numberOfSlidesToScroll = 'full';
        }

        if(this.state.numberOfSlidesToScroll !== numberOfSlidesToScroll) {
            // single object in set state, skip writing {numberOfSlidesToScroll: numberOfSlidesToScroll}
            this.setState({numberOfSlidesToScroll});
        }
    }

    widthAndTimeToScroll = () => {
        const {carouselViewport} = this.refs;
        
        return {
            widthToScroll: carouselViewport.offsetWidth,
            timeToScroll: 400
        }
    }

    renderSlides() {
        return data.map((country, index)=>{
            return(
                <Slide country={country} key={index}/>
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
            'image-carousel-nav': true,
            'ic-btn-round': true,
            'display-flex-center': true
        });
        const leftNavClasses = classnames({
            'carousel-left-nav': true,
            'image-carousel-left-nav': true,
            'carousel-nav-disabled': allTheWayLeft
        }, navClasses);
        const rightNavClasses = classnames({
            'carousel-right-nav': true,
            'image-carousel-right-nav': true,
            'carousel-nav-disabled': allTheWayRight
        }, navClasses);

        return(
            <div className="display-flex-center">
                <div className="carousel-container image-carousel-container" style={{width: `100%`}}>
                    <div className={leftNavClasses} onClick={this.handleLeftClick}>
                        <span><i className="fas fa-chevron-left fa-sm"></i></span>
                    </div>

                    {/* disabling horizontal scroll */}
                    <div
                    style={{overflowX: 'hidden'}}
                    className="carousel-viewport" 
                    ref="carouselViewport"
                    onScroll={throttle(this.onScrollCarousel, 250)}>
                        {this.renderSlides()}
                    </div>

                    <div className={rightNavClasses} onClick={this.handleRightClick}>
                        <span><i className="fas fa-chevron-right fa-sm"></i></span>
                    </div>
                </div>
            </div>
        )
    }
}
export default LazyLoadImageCarousel;