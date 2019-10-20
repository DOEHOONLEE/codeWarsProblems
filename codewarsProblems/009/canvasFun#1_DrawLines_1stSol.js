// Draw Lines

/*
Task
Given some points, your task is to draw lines between two adjacent points.

points is given by a 2D integer array.
Each subarray has two elements, means the x-coordinate, y-coordinate of
each point.

The basic canvas(width 100 x height 100), background color(white)
and pen's color(red) are already definedi nthe initial code
(please don't delete or modify them).

You just need to draw the lines, using the following two methods;

TESTS
- var points=[[0,0],[99,99]],
- var points=[[20,20],[80,20],[80,80],[20,80],[20,20]],

*/

function drawLines(points) {
  var canvas = new Canvas(100,100)  //Create a 100 x 100 canvas
  var ctx = canvas.getContext('2d'); 
  ctx.fillStyle="#ffffff"
  ctx.fillRect(0,0,100,100)  //Draw background
  ctx.strokeStyle="#ff0000"  //Set pen's color
  ctx.beginPath()
  //Don't delete or modify the code above
  //Your code starts here:
  
  ctx.moveTo(points[0][0],points[0][1]);
  
  for(let i=0;i<points.length-1;i++) {
    ctx.lineTo(points[i+1][0],points[i+1][1]);
  }
   
  //Don't delete or modify the following code
  ctx.stroke()              //Draw the path you made above
  return canvas.toDataURL() //Returns the image data
}