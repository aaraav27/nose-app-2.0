function setup(){
    canvas = createCanvas(350 , 350);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();

    poseNet=ml5.poseNet(video , modelloaded);

    poseNet.on('pose' , gotPoses);
}

function gotPoses(results)
    {
if(results.length > 0){
console.log(results);
}
    }



function modelloaded(){
    console.log("model is intialized");
}

function draw(){
image(video, 0 ,0, 350, 350);
}

function take_snapshot(){
    save("photo.png");
}

