function setup()
{
    canvas = createCanvas(550, 500);
    canvas.position(560, 160);

    video = createCapture(VIDEO);
    video.size(550, 500);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function draw()
{
    background('#38fa07');
}

function modelLoaded()
{
    console.log("Model is initialized");
}

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
    }
}