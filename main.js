function preload(){

}
function setup(){
    canvas= createCanvas(500, 400);
    canvas.position(500, 200);
    video=createCapture(VIDEO);
    video.hide();

    tint_color="";

}

function draw(){
    image(video, 100, 50, 300, 300);
    tint(tint_color);

    fill("yellow");
    stroke("black");
    circle(45, 28, 50 );

    circle(450, 28, 50 );

    circle(45, 365, 50 );

    circle(450, 365, 50 );

    fill("black");
    stroke("yellow");
    rect(28, 55, 35, 284 );

    rect(434, 55, 35, 284 );

    rect(72, 10, 351, 38)

    rect(72, 350, 351, 38)

}

function apply_filter(){
    tint_color= document.getElementById("filter_color").value;
}

function take_snapshot(){
    save('louis_vaton.png');
}