noseX = 0;
noseY = 0;
clown_nose = "";

function preload(){
 clown_nose = loadImage("https://i.postimg.cc/pLH3pKzD/image-removebg-preview-16.png");
}

function setup(){
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded(){
    console.log('PoseNet Is Intitialized');
}

function draw(){
   image(video, 0, 0, 300, 300);
   image(clown_nose, noseX-10, noseY-10, 20, 20);
}

function take_snapshot(){
    save("myFilterImage.png");
}

function gotPoses(results){
    if(results.length > 0){
        console.log(results);
        console.log("nose x = " + results[0].pose.nose.x);
        console.log("nose y = " + results[0].pose.nose.y);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
    }
}