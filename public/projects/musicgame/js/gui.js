//make sure to remove pointer events non from canvas style


var canvas = document.createElement('canvas');
canvas.id = "gui";
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
canvas.style = "position: absolute; left: 0; top: 0; z-index: 1; pointer-events: none;";
var context = canvas.getContext("2d");
//context.fillStyle = "#00FFFF";
//context.fillRect(0,0,150,75);

// sets the canvas size to the size of the window
// add canvas to the document
document.body.appendChild(canvas);

// resize the canvas when the window size is changed
window.onresize = function() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
};








function drawableRectangle(x, y, width, height, color) {
  this.x = x;
  this.y = y;
  this.width = width;
  this.height = height;
  this.color = color;
  
  this.draw = function() {
    context.fillStyle = this.color;
    context.fillRect(this.x,this.y,this.width,this.height);
  };
}

//var leftCube = new drawableRectangle(0, window.innerHeight/2-50, 100, 100, "#00FFFF");
//var rightCube = new drawableRectangle(window.innerWidth-100, window.innerHeight/2-50, 100, 100, "#FFFFFF");



function draw() {
  //set objects variables
  var leftCube = new drawableRectangle(0, window.innerHeight/2-50, 100, 100, "#00FFFF");
  var rightCube = new drawableRectangle(window.innerWidth-100, window.innerHeight/2-50, 100, 100, "#FFFFFF");
	var topCube = new drawableRectangle(window.innerWidth/2-50, 0, 100, 100, "#00FFFF");
  var bottomCube = new drawableRectangle(window.innerWidth/2-50, window.innerHeight-100, 100, 100, "#FFFFFF");
	//places objects on canvas
  leftCube.draw();
	rightCube.draw();
	topCube.draw();
	bottomCube.draw();
  
  context.fillStyle = "#000000";
	context.globalAlpha=0.2;
  context.font="200px Avant Garde";
	var textWidth = context.measureText(score).width;
	var x = (window.innerWidth/2)-(textWidth/2);
  context.fillText("" + score,x,window.innerHeight/2+150);//(text,space from left, space from top)
	context.globalAlpha=1;
	
	
  //var left = 0;
  //var x = window.innerWidth-100;
  //var y = window.innerHeight/2;
  //context.fillRect(x,y,100,100);
  
  //x = 5;
  
  
  //x += 1;
  //context.fillStyle = "#00FFFF";
  //context.fillRect(x,25,100,100);
  //context.clearRect(45,45,60,60);
  //context.strokeRect(50,50,50,50);
}





function render() {
  window.requestAnimFrame(render);
  context.clearRect(0, 0, canvas.width, canvas.height);
  draw();
}
render();




