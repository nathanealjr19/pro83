var mouseEvent=""

canvas=
         document.getElementById("myCanvas");
        ctx=canvas.getContext("2d");

var Color="black";
var Width_of_the_line=2;

canvas.addEventListener("mousedown", my_mousedown);
function my_mousedown(e)
{
    Color=document.getElementById("Color").value;
    Width_of_the_line=document.getElementById("Width_of_the_line").value;
    mouseEvent="mousedown";
}

canvas.addEventListener("mouseup", my_mouseup);
function my_mouseup(e)
{
    mouseEvent="mouseup";
}

canvas.addEventListener("mousemove", my_mousemove);
function my_mousemove(e)
{
    current_position_of_X =e.clientX-canvas.offsetLeft;
    current_position_of_Y =e.clientY-canvas.offsetTop;

    if (mouseEvent=="mousedown"){
        Color=canvas
        Width_of_the_line=canvas
        ctx.beginPath();
        ctx.strokeStyle= Color;
        ctx.lineWidth=Width_of_the_line;
        ctx.moveTo(lastpositionofX, lastpositionofY);
        ctx.lineTo(current_position_of_X, current_position_of_Y);
        ctx.stroke();
   }
    lastpositionofX=current_position_of_X
    lastpositionofY=current_position_of_Y
}

canvas.addEventListener("touchstart", my_touchstart);
    
    function my_touchstart(e)
    {
        color = document.getElementById("Color").value;
        width_of_line = document.getElementById("Width_of_line").value;
        last_position_of_x= e.touches[0].clientX-canvas.offsetLeft
        last_position_of_y= e.touches[0].clientY-canvas.offsetTop

        
    }

    canvas.addEventListener("touchmove", my_touchmove);
    function my_touchmove(e)
    {

         current_position_of_touch_x = e.touches[0].clientX - canvas.offsetLeft;
         current_position_of_touch_y = e.touches[0].clientY - canvas.offsetTop;

        
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = width_of_line;

        console.log("Last position of x and y coordinates = ");
        console.log("x = " + last_position_of_x + "y = " + last_position_of_y);
        ctx.moveTo(last_position_of_x, last_position_of_y);

        console.log("Current position of x and y coordinates = ");
        console.log("x  = " + current_position_of_touch_x + "y = " + current_position_of_touch_y);
        ctx.lineTo(current_position_of_touch_x, current_position_of_touch_y);
        ctx.stroke();
       

        last_position_of_x = current_position_of_touch_x; 
        last_position_of_y = current_position_of_touch_y;
    }