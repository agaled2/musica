volumen = 0.3;
velocidad = 0.5;
var manoDerX = 0;
var manoDerY = 0;
var puntosManoDer = 0;
var manoIzqX = 0;
var manoIzqY = 0;
var puntosManoIzq = 0;

function setup() {
    canvas = createCanvas(640, 480);//360,270
    background("green");
    video = createCapture(VIDEO);
    video.hide();
    posnet = ml5.poseNet(video, listo);
    posnet.on("pose", respuesta)
}
function draw() {
    translate(width, 0);
    scale(-1, 1)
    image(video, 0, 0, 640, 480);
    if (puntosManoDer > 0.2) {
        fill("red")
        circle(manoDerX, manoDerY, 20);
        ;
    }
    if (puntosManoIzq > 0.2) {
        fill("blue")
        circle(manoIzqX, manoDerY, 20);
        ;
    }

}

function preload() {
    cancion
        = loadSound("MyOrdinaryLife_TheLivingTombstone.mp3")
}

function reproducir() {
    if (!cancion.isPlaying()) {
        cancion.play();
        cancion.setVolume(volumen)
        cancion.rate(velocidad);
    }
}

function stop() {
    cancion.stop();
}

function listo() {
    console.log("poseNet esta lista")
}

function respuesta(resultados) {
    if (resultados && resultados.length > 0) {
        manoDerX = resultados[0].pose.rigthWrist.x;
        manoDerY = resultados[0].pose.rigthWrist.y;
        puntosManoDer = resultados[0].pose.keypoints[10].score;
        manoIzqX = resultados[0].pose.leftWrist.x;
        manoIzqY = resultados[0].pose.leftWrist.y;
        puntosManoIzq = resultados[0].pose.keypoints[9].score;
    }
}