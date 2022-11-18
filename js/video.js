// Add js here.

var vid = document.getElementById("videoplayer")

// play ok
function playVid(){
    vid.play()
}

var btn_play = document.getElementById("play")
btn_play.addEventListener("click", function(){
    playVid()
});

// pause ok
function pauseVid(){
    vid.pause()
}

var btn_pause = document.getElementById("pause")
btn_pause.addEventListener("click", function(){
    pauseVid()
});

// mute ok
function muteVid(){
    if (vid.muted === false) {
        vid.muted = true;
    } else {
        vid.muted = false;
    }
 };

var btn_mute = document.getElementById("mute")
btn_mute.addEventListener("click", function(){
    muteVid()
});

// page load 
document.addEventListener("DOMContentLoaded", function(){
    vid.preload = 'auto'
    vid.autoplay = false;
    vid.loop = false;
    // initialize
    vid.defaultPlaybackRate = 1;
    vid.volume = 1;
})


// skip 
function skipVid(){
    vid.currentTime += 15;
}

var btn_skip = document.getElementById("skip")
btn_skip.addEventListener("click", function(){
    if (skipVid() >= vid.duration){
        vid.currentTime = 0;
        vid.load(); // why not working
    } else{
        skipVid()
    }
})


// speed
function speed(n){
    vid.playbackRate = n
}

function get_speed(){
    return vid.playbackRate
}

var faster = document.getElementById("faster")
faster.addEventListener("click", function(){
    if (get_speed() === 0.5) {
        speed(1);
    } else if (get_speed() === 1){
        speed(2);
    } else {
        window.alert("Video is at fastest speed!")
    }
    
})


var slower = document.getElementById("slower")
slower.addEventListener("click", function(){
    if (get_speed() === 2){
        speed(1);
    } else if (get_speed()=== 1){
        speed(0.5);
    } else{
        window.alert("Video is at slowest speed!")
    }
    
})






// slider
// function setVolume(){
//     document.getElementById("slider").innerHTML = volume_value;
//     vid.volume = volume_value / 100;

// var btn_slider = document.getElementById("slider")
// btn_slider.addEventListener("click", function(){
//     sliderVid()
// });


//volume slider
document.querySelector('#slider').addEventListener('change', function() {
    vid.volume = (document.querySelector('#slider').value / 100);
    volume.textContent = (document.querySelector('#slider').value);
    muteVid();
})