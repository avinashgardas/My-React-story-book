import React, {Component} from 'react';
import './css/shineGradientAnimation.css';
import './css/smallDivShine.css';

class ShineGradientAnimation extends Component {
    render() {
        return(
            <div>
                <div className="demo" style={{height: 200}}>
                    <p>http://www.webtutorialplus.com/css-image-shine-glow-effect/</p>
                    <div className="show-off" />
                </div>

                <div>
                    <div href="#" className="icon">one</div>
                    <div href="#" className="icon">two</div>
                    <div href="#" className="icon">three</div>
                    <div href="#" className="icon">four</div>
                </div>

                <div className="display-flex-center" style={{flexDirection: 'row'}}>
                    <div className="demo" style={{height: 150, width: 150, margin: 8}}>
                        <h1></h1>
                        <div className="show-off" />
                    </div>

                    <div className="demo" style={{height: 150, width: 150, margin: 8}}>
                        <h1></h1>
                        <div className="show-off" />
                    </div>

                    <div className="demo" style={{height: 150, width: 150, margin: 8}}>
                        <h1></h1>
                        <div className="show-off" />
                    </div>

                    <div className="demo" style={{height: 150, width: 150, margin: 8}}>
                        <h1></h1>
                        <div className="show-off" />
                    </div>
                </div>

                

            </div>
        )
    }
}
export default ShineGradientAnimation;