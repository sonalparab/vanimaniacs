var svg = document.getElementById("drawing");
var clear = document.getElementById("clear");

var stop = document.getElementById("stop");
var start = document.getElementById("start");
var animate = document.getElementById("animate");
var bounce = document.getElementById("bounce");
var cont = document.getElementById("continue");

var id;

//Circle
var r = 0;
var growing = true;

var animateCircle = function(){
    
    freeze();
    svg.innerHTML = "";
    
    r = 0;
    growing = true;
    id = setInterval(drawCircle,10); 
}

var continueCircle = function(){
    freeze();
    id = setInterval(drawCircle,10);
}

var drawCircle = function(){

    svg.innerHTML = "";
    
    var c = document.createElementNS('http://www.w3.org/2000/svg','circle');
    c.setAttribute('cx',250);
    c.setAttribute('cy',250);
    c.setAttribute('r',r);
    c.setAttribute('fill','green');
    svg.appendChild(c);
    //increase or decrease the radius
    if(growing)
	r++;
    else
	r--;
    //if touching edges switch to shrinking
    if(r === 250)
	growing = false;
    if(r === 0)
	growing = true;
    
}

var freeze = function(){
    clearInterval(id);
}

var clearing = function(){
    svg.innerHTML = "";
    drawLine = 0;
}

animate.addEventListener('click',animateCircle);
start.addEventListener('click',continueCircle);
stop.addEventListener('click',freeze);

//Rectangle Bouncing

//dimensions of rectangle
var width = 100;
var height = 50;
//top left corner
var xcor = 250;
var ycor = 250;
//bottom right corner
var xcorend = xcor + width;
var ycorend = ycor + height;
//incrementing
var xinc = 3;
var yinc = 2;

var bouncing = function(){

    freeze();
    svg.innerHTML = "";

    xcor = Math.floor(Math.random() * (500-width));;
    ycor = Math.floor(Math.random() * (500-height));
    xcorend = xcor + width;
    ycorend = ycor + height;
    
    id = setInterval(drawRect,10);
    
}

var continueRect = function(){
    freeze();
    id = setInterval(drawRect,10);
}

var drawRect = function(){

    svg.innerHTML = "";
    
    rect = document.createElementNS('http://www.w3.org/2000/svg','rect');
    console.log(xcor);
    rect.setAttribute('x',xcor);
    rect.setAttribute('y',ycor);
    rect.setAttribute('width',width);
    rect.setAttribute('height',height);
    rect.setAttribute('fill','blue');
    svg.appendChild(rect);

    //if rectangle is touching edges
    // change direction
    if(xcor <= 0 || xcorend >= 500)
	xinc *= -1;
    if(ycor <= 0 || ycorend >= 500)
	yinc *= -1;

    xcor += xinc;
    ycor += yinc;
    xcorend = xcor + width;
    ycorend = ycor + height;
    
}

bounce.addEventListener('click',bouncing);
cont.addEventListener('click',continueRect);
