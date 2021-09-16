var Touch_Event= "empty";
var last_position_of_x, last_position_of_y ;
var line_width=7.659
var canvas= document.getElementById("Canvas1");
var ctx= canvas.getContext("2d");
var color = "red";
var width_of_screen = screen.width;
var New_width_of_canvas= screen.width - 100;
var new_height_of_canvas = screen.height - 300;

if (width_of_screen<992){
    canvas.width = New_width_of_canvas;
    canvas.height= new_height_of_canvas;
    document.body.style.overflow="hidden";
}
canvas.addEventListener("touchstart", My_touchstart);
function My_touchstart(e){
    Touch_Event="touchstart";
    last_position_of_x= e.touches[0].clientX - canvas.offsetLeft;
    last_position_of_y = e.touches[0].clientY - canvas. offsetTop;
}
canvas.addEventListener("touchmove", My_touchmove);
function My_touchmove(e){
    var current_position_of_x= e.touches[0].clientX - canvas.offsetLeft;
    var current_position_of_y= e.touches[0].clientY - canvas.offsetTop;
       
        ctx.beginPath();
        ctx.strokeStyle= color;
        ctx.lineWidth=line_width;
        ctx.moveTo(last_position_of_x, last_position_of_y);
        ctx.lineTo(current_position_of_x, current_position_of_y);
        ctx.stroke();
    last_position_of_y=current_position_of_y;
    last_position_of_x=current_position_of_x;
}

function ds(){
    ctx.clearRect(0,0, canvas.width,  canvas.height);
}