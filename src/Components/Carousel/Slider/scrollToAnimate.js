function scrollTo(params) {
    const {
        element,
        to,
        duration,
        scrollDirection
    } = params;

    var start = element[scrollDirection],
    change = to - start,
    increment = (1000 / 60); //60fps

    var animateScroll = function(elapsedTime) {        
        elapsedTime += increment;
        var position = easeInOut(elapsedTime, start, change, duration);                        
        element[scrollDirection] = position;

        if (elapsedTime < duration) {
            window.requestAnimationFrame(animateScroll.bind(null, elapsedTime));
        }
    };

    //The window.requestAnimationFrame() method tells the browser that you wish to perform an animation and requests 
    //that the browser call a specified function to update an animation before the next repaint. (like thread)
    window.requestAnimationFrame(animateScroll.bind(null, 0));
}

function easeInOut(currentTime, start, change, duration) {
    currentTime /= duration / 2;
    if (currentTime < 1) {
        return change / 2 * currentTime * currentTime + start;
    }
    currentTime -= 1;
    return -change / 2 * (currentTime * (currentTime - 2) - 1) + start;
}

export default scrollTo;