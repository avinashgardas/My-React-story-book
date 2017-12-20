import React, {Component} from 'react';

class HorizontalScroll extends Component {
    constructor(props) {
        super(props);
        this.state = {
            carouselData: [1,2,3,4,5,6,7,8,9,10,1,2,3,4,5,6,7,8,9,10],
            change: false
        }
    }
    
    componentDidMount() {
        console.log(document.getElementById('card-0').getBoundingClientRect().left)

        //Thankfully got :)
        const horizontalScrollDiv = document.getElementById('horizontal-scroll-wrapper');
        horizontalScrollDiv.addEventListener('scroll',this.handleHorizontalScroll);

        
    }

    handleHorizontalScroll = () => {
        console.log(document.getElementById('card-0').getBoundingClientRect().left)
    }

    scrollRight = () => {
        this.state.carouselData.map(function(item,index) {
            const a = document.getElementById('card-'+index).getBoundingClientRect().left - 100+'px';
            document.getElementById('card-'+index).setAttribute('style','left: '+a)
        });
    }

    render() {
        return(
            <div>
                <div className='horizontal-scroll-wrapper' id='horizontal-scroll-wrapper'>
                {
                    this.state.carouselData.map(function(item,index) {
                        return(
                            <div className='boxshadow horizontal-scroll-item' 
                            id={`card-${index}`} 
                            key={index}
                            >
                                <div className='display-flex-center'>{item}</div>
                            </div>
                        )
                    }.bind(this))
                }
                </div>

                <button onClick={this.scrollLeft} id='button-scroll-left'>Left</button>
                <button onClick={this.scrollRight} >Right</button>

            </div>
        )
    }
}
export default HorizontalScroll;