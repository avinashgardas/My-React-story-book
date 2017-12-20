import React, {Component} from 'react';
//consts
import Constants from './Constants';

const transitionDuration = 2000;
const base64 = 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAYABgAAD//gA7Q1JFQVRPUjogZ2QtanBlZyB2MS4wICh1c2luZyBJSkcgSlBFRyB2NjIpLCBxdWFsaXR5ID0gNzAK/9sAQwAKBwcIBwYKCAgICwoKCw4YEA4NDQ4dFRYRGCMfJSQiHyIhJis3LyYpNCkhIjBBMTQ5Oz4+PiUuRElDPEg3PT47/9sAQwEKCwsODQ4cEBAcOygiKDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7/8AAEQgABQAUAwEiAAIRAQMRAf/EAB8AAAEFAQEBAQEBAAAAAAAAAAABAgMEBQYHCAkKC//EALUQAAIBAwMCBAMFBQQEAAABfQECAwAEEQUSITFBBhNRYQcicRQygZGhCCNCscEVUtHwJDNicoIJChYXGBkaJSYnKCkqNDU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6g4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2drh4uPk5ebn6Onq8fLz9PX29/j5+v/EAB8BAAMBAQEBAQEBAQEAAAAAAAABAgMEBQYHCAkKC//EALURAAIBAgQEAwQHBQQEAAECdwABAgMRBAUhMQYSQVEHYXETIjKBCBRCkaGxwQkjM1LwFWJy0QoWJDThJfEXGBkaJicoKSo1Njc4OTpDREVGR0hJSlNUVVZXWFlaY2RlZmdoaWpzdHV2d3h5eoKDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uLj5OXm5+jp6vLz9PX29/j5+v/aAAwDAQACEQMRAD8A5yC3e2S3gM7OEQHdgA57VTuLAPqUoaUk7yM7R2BPSiivS5VN8stjmk2ldGVM3lyshG7bxk0UUV4skk2jdN2P/9k=';


class BlurImage extends Component {
    componentDidMount() {
        console.log('cdm')
        this.getDataUri(Constants.DEFAULT_IMAGE_URL,function(dataUri) {
            //console.log('uri',dataUri);
            //console.log(Constants.EXAMPLE_DATA_URI)
        });
    }

    getReference = (ref)=>{
        this.reference = ref;
        setTimeout(()=>{
            this.reference.setAttribute('src','https://firebasestorage.googleapis.com/v0/b/epicbase-7a998.appspot.com/o/default%2Fno-image.png?alt=media&token=c05cf7d7-52b5-4e6f-8231-8317fb7c0b0f');            
        },transitionDuration)
    }

    getDataUri(url, callback, outputFormat) {
        var image = new Image();
        image.crossOrigin = 'Anonymous';

        image.onload = function() {
            var canvas = document.createElement('canvas');
            var dataURL;

            canvas.width = this.naturalWidth;
            canvas.height = this.naturalHeight;
            canvas.getContext('2d').drawImage(this,0,0);
            dataURL = canvas.toDataURL(outputFormat);

            callback(dataURL);
        };

        image.src = url;
    }

    render() {
        const style={'animationDuration':transitionDuration+'ms'};
        return(
            <div>
                <img className='blur-image-src' style={style} ref={this.getReference} src={Constants.DEFAULT_DATA_URI}/>
            </div>
        )
    }
}
export default BlurImage;