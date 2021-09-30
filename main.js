noseX=0;
noseY=0;
difference=0;
rightWristX=0;
leftWristY=0;
function setup(){
    video= createCapture(VIDEO)
    video.size(550,500)
    canvas= createCanvas(550,430)
    canvas.position(560,150);
    poseNet= ml5.poseNet(video, modelLoaded);
    poseNet.on('pose',gotPoses);
}
function modelLoaded(){
    console.log("poseNet is initiated!!")

}
function gotPoses(results){
    if(results.lenght > 0){
        console.log(results);
        noseX=results[0].pose.nose.x;
        noseY=results[0].pose.nose.y;
        console.log("noseX = "+noseX+"noseY = "+noseY);
        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;
        difference = floor(leftWristX-rightWristX);
        console.log("leftWristX = "+leftWristX+"rightWristX = "+rightWristX+"difference = "+difference);

    }

}
function draw(){
    background('#FFC0CB');
    document.getElementById("square_sides").innerHTML="Width and the height of the square will be"+difference+"px";
    stroke('#FFFF00');
    fill('#FFFF00');
    square(noseX,noseY,100);

}