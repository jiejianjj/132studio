var circles=[];
var keys;		// The text that responds to key events
var canvas;	// the canvas itself
var circleColor = 0;	// color of the circle
var button;	// the button element
var slider; // the slider element
var input;  // the input box
var typeTexts;  // the text that reflects the content inside the input box
var quantity;
var colors=['#9124FF','#FF9E45','#9124FF','#FF9E45','#FFC700','#FF14E8','#14D6FF','#F1EDF3']
// Set a random color for the circle
function change() {
  circleColor = color(random(255), random(255), random(255));
}

function draw() { 
  background(220);
  
  fill(circleColor);
  ellipse(width/2, height/2, slider.value(), slider.value());
  fill(0);
  textSize(20);
  // display the text from the input box
  text(input.value(), 100, 300);
  typeTexts.html(input.value());
  
  msgY += random(-4,5);
  msgX += random(-4,5);
  msg.position(msgX, msgY);
}

function setup() {
    createCanvas(1280,720);
	background(255);
    // create a slider with a range of (20, 300) and 
    // the starting value at 100
    slider = createSlider(1,3,2);
    slider.size(200);
    
   var button = createButton('reset');
   button.mousePressed(refreshPage);
   var saveCanvas=createButton('save');
   saveCanvas.mousePressed(save);
}
function refreshPage(){
    window.location.reload();
} 
function save(){
    saveCanvas('myCanvas', 'png');
}
var size = [233, 377, 610]
function draw(){
    quantity = slider.value();
    var overlapping= false;
    var protection= 0;
    console.log(quantity)
    console.log("circles"+circles.length)
        while (circles.length<quantity){
            var circle={
                r: random(size),
                x: random(width),
                y: random(height),
                
                
        };
        
    var overlapping = false;
        for (var j = 0; j<circles.length; j++){
            var other = circles[j];
            var d = dist(circle.x,circle.y, other.x, other.y)
            if (d < circle.r + other.r){
                overlapping = true;
                break;
            }
            
        }
        if (!overlapping){
            circles.push(circle); 
             
        }
    
        protection++;
        if (protection>2000){
            break;
        }
        
    }
    
    for (var i = 0; i < circles.length; i++){
        fill(colors[i % colors.length]);
        console.log(i % colors.length)
        noStroke();
        ellipse(circles[i].x,circles[i].y, circles[i].r*2, circles[i].r*2)
    }
}