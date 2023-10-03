function setup() {
    canvas = createCanvas(640, 480);//360,270
    background("green");
    video = createCapture(VIDEO);
    video.hide();
}
function draw() {
    translate(width, 0);
    scale(-1, 1)
    image(video, 0, 0, 640, 480);
}

function preload() {
    cancion
        = loadSound("MyOrdinaryLife_TheLivingTombstone.mp3")
}

function reproducir() {
   cancion.play(); 
}

function detener() {
    cancion.stop(); 
}