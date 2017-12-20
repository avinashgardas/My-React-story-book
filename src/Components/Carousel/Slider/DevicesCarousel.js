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

    const {deviceId,deviceName,deviceOs,deviceToken,deviceVersion} = props.device;

    let imageURL;
    if (deviceOs.includes("Android")) {
        imageURL = "http://envyandroid.com/content/images/2015/03/android3.png"
    } else {
        imageURL = "http://icons.iconarchive.com/icons/uiconstock/socialmedia/512/Apple-icon.png"
    }

    return(
        <div className="slide boxshadow" style={{height: 200, width: 100}}>
            <div className="slide-div-background-image-full" style={{width: `100%`, height: 70, backgroundImage: `url(${imageURL})`}}></div>

            <div className="slide-div-title display-flex-center" style={{width: `100%`, height: 50, padding: 0, marginTop: 4, marginBottom: 4}}>
                <span >{deviceName}</span>
            </div>

            <div className="slide-div-code display-flex-center" style={{width: `100%`, height: 30, padding: 0, marginTop: 0, marginBottom: 4}}>
                {deviceVersion}
            </div>

            <button onClick={()=>{props.sendNotificationToOneDevice(deviceToken)}}>Send</button>
        </div>
    )
}

class Carousel extends Component {
    constructor(props) {
        super(props);

        // this.handleLeftNav = this.handleLeftNav.bind(this);
        // this.handleRightNav = this.handleRightNav.bind(this);
        this.state = {
            data: this.props.data
        }
    }

    componentDidMount() {
        console.log(this.props.data);
    }

    handleLeftNav = (e) => {
        //console.log(this);
        //take this.refs into a const/var
        const {carouselViewport} = this.refs;

        let numberOfSlidesToScroll = 6;
        let widthOfEachSlide = 100;
        let length = numberOfSlidesToScroll * widthOfEachSlide;

        carouselViewport.scrollLeft -= length; /* short hand notofication */
    }

    handleRightNav = (e) => {
        //console.log(this);
        //take this.refs into a const/var
        const {carouselViewport} = this.refs;

        let numberOfSlidesToScroll = 6;
        let widthOfEachSlide = 100;
        let length = numberOfSlidesToScroll * widthOfEachSlide;

        carouselViewport.scrollLeft += length; /* short hand notofication */
    }
    

    render() {
        let usersData = this.props.data;

        return(
            <div className="carousel-container">
                <button className="carousel-nav carousel-left-nav" onClick={this.handleLeftNav}>&#60;</button>

                <div className="carousel-viewport" ref="carouselViewport">
                    {
                        usersData !== null ?
                        Object.keys(usersData).map((key,index) => {
                            return(
                                <Slide device={usersData[key]} key={key} sendNotificationToOneDevice={this.props.sendNotificationToOneDevice}/>
                            )
                        })
                        :
                        <div style={{display: 'flex', justifyContent: 'center'}}> <p>No devices found</p> </div>
                    }
                </div>

                <button className="carousel-nav carousel-right-nav" onClick={this.handleRightNav}>&#62;</button>
            </div>
        )
    }
}
export default Carousel;