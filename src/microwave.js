function microwave(input){
    if( input=== "" || input === undefined ){
        return "beep!";
    }

    return display(input);
}

function display(num) {
    let minutes;
    let seconds;

    minutes = num / 60;
}

module.exports = {
    microwave
};