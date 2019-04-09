function microwave(input){
    if( input=== "" || input === undefined ){
        return "beep!";
    }

    return display(input);
}

function display(num) {
    let minutes;
    let seconds;

    minutes = Math.floor(num / 60);

    seconds = num % 60;

    if (seconds < 10) {
        seconds = '0' + seconds;
    }
    
    return minutes + ':' + seconds;
}

module.exports = {
    microwave
};