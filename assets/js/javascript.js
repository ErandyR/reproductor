var audio = document.getElementById("miAudio");
function audioPlay() {
    audio.play();
};

function audioPause() {
  audio.pause();
};

function audioStop(){
  audio.currentTime=0;
}

function subirVolumen(){
  audio.volume += 0.2;
};

function bajarVolumen(){
  audio.volume -= 0.2;
};
function avanzarAudio(){
  audio.currentTime += 1;
};

function retrocederAudio(){
  audio.currentTime -= 1;
};
