# dash
A simple JavaScript library for making 2D games

We all love making games, but lets face it, it's not the most readable, or easy to write. That's why we created Dash! An opensource, canvas based, JavaScript library for 2D Games

# Notes
This library is far from done and still might have bugs and incomplete stuff. And it probably can't be used to create anything super advanced yet. I will probably try to finish this if I get the time, but feel free to modify code or create a pull request as you like.

Also, if anybody has a name other than Dash, please tell me, as Dash is a pretty popular name

# Helpful links
https://github.com/mryellowdog/dash-gamejs-site

[!["Buy Me A Coffee"](https://www.buymeacoffee.com/assets/img/custom_images/orange_img.png)](https://www.buymeacoffee.com/yellowdog)

# Setting up Dash 1.0

1. Download the file, or use the cdn

```
<script src="https://dashjs.netlify.app/dash.min.js"></script>
```

2. Initializing Dash

First, define the game's screen inside Javascript,
```
const canvas = new Canvas("canvas", 600, 400);
```
Finally, start Dash up using
```
canvas.start();
```
## Example:
```
<script src="dash.js"></script>
<script>
const canvas = new Canvas("canvas", 600, 400);
// Start coding here
//
canvas.start();
</script>
```

# Stuff to know

It is reccomended to use Dash's loops rather than a standard while true loop, here are the loops you can use,
```
canvas.forever = function () {
   // Do something...
};
canvas.handleInput = function () {
   // Do something...
};
```
All of the loops do the same thing, I just provided specific ones for certain scripts to make it easier to organize.

# Adding sprites
You can add sprites using Dash, here's basic examples:
```
const square = new Sprite(0, 0, 50, 50, "rectangle", "blue", ""); // Creates a blue square
```
```
const player = new Sprite(0, 0, 50, 50, "image", "blue", "image.png"); // Creates an image sprite
```
Make your own using this format,
```
const InsertName = new Sprite(X pos, Y pos, width, height, type (rectangle, image, or text), color (if applicable), image url (if applicable));
```

Next, add all the sprites using canvas.addSprite()
```
canvas.addSprite(InsertSpriteName);
```

# Functions

## Logic

### Random
This function creates a random number between two integers,
```
random(1, 10);
```

### Pause
These functions pauses screen refresh and forever loops.
```
pause();
unpause();
```
This function only pauses screen refresh, forever loops, and collision checking. You can use pause with other scripts like this,
```
if(freeze == false){
// your scripts here.
}
```

## Moving Sprites

### Set X/Y
This function sets the x or y position of a specified sprite
```
player.setX(50);
player.setY(50);
```

### Move
This function moves the sprite by a certain x and/or y value
```
player.move(x, y);
```
### Change X/Y
This function increases or decreases the x or y position of a sprite
```
player.changeX(1); // Increase the X by 1
player.changeY(1); // Increase the Y by 1
player.changeX(-1); // Decrease the X by 1
player.changeY(-1); // Decrease the Y by 1
```
You can also still use increaseX/Y() or decreaseX/Y(), but I changed it to changeX/Y()

## Editing Sprites

Note: If you only want to set the looks of the sprite once, it might be easier to set it while creating and defining the sprite. See more in 'Adding Sprites'

### Text
For text sprites, you can set the text using this function,
```
textLabel.setText("hello world!");
```

### Size
This function sets the size of your sprite (works best on squares)
```
player.setSize(100);
```
You can also use changeSize() to increase or decrease the size of the sprite,
```
player.changeSize(10); // Increase the size by ten
player.changeSize(-10); // Decrease the size by ten
```

### Width and Height
These functions set the width and height of your sprite
```
player.setWidth(100); // Set the width and height of the sprite
player.setHeight(50);
```
You can also use changeWidth/Height to increase or decrease the height and width,
```
player.changeWidth(5);
player.changeHeight(10);
player.changeWidth(-20);
player.changeHeight(-15);
```

### Hide/Show
This function allows you to hide or show a specific sprite
```
player.hide();
player.show();
```

### Color
This function changes the color of your sprite
```
player.setColor("green");
```

### Image
This function changes the image url of your sprite
```
player.setImage(image.png);
```

### Type
This function changes the type of sprite. (Rectangle or image)
```
player.setType("image")
```

## Editing Backdrops
These functions allow you to edit the looks of the backdrop.

### Color
This function sets the color of your backdrop,
```
setBackdropColor("green");
```

### Image
This function allows you to set the backdrop to an image,
```
setBackdropImage("image.png");
```

## Input

### Mouse
These functions allow you to track the mouse position and also if a certain sprite is clicked.
In order to detect mouse events, you must have the following in your canvas element in HTML:
```
onmousemove="getMousePos(event)"
onclick="detectClicks(event)"
```

To detect if a sprite is clicked:
```
  if (player.isClicked()) {
    // Do something
  }
```

To detect if a sprite is touching the mouse cursor:
```
if (player.isTouchingCursor()) {
   // Do something
}
```
You can also use the "mouseX" and "mouseY" variables to get the mouse location, for example:
```
player.goto(mouseX, mouseY); // Go to the mouse cursor
```
And also the "clickX" and "clickY" variables to get the location of where the mouse last clicked,
```
player.goto(clickX, clickY); // Go to the mouse cursor when it clicks
```

### Keyboard
This function detects when the user presses certain keys on the keyboard
```
if (canvas.isKeyDown("Space")) {
  // Do something...
}
```
You can also do "isKeyUp", for when the key is released.
```
if (canvas.isKeyUp("Space")) {
  // Do something...
}
```

### Collisions
This function detects if one sprite collides with another.
```
if (sprite1.isTouching(sprite2)) {
  // Do something...
}
```

### Color Collisions
This function detects when a sprite touches a sprite with a specific color.
```
if (player.isTouchingColor("green")){
   // Do something...
}
```

## Data

### Sprite Info
This function gets a sprite's information and outputs it into the console,
```
player.spriteInfo();
```
Output:
```
Sprite {x: 50, y: 300, width: 100, height: 100, type: "rectangle"…}
x: 50
y: 300
width: 100
height: 100
type: "rectangle"
color: "green"
src: ""
<constructor>: "Sprite"
name: "Sprite"
```

### Canvas Info
This function gets the canvas's information and outputs it into the console,
```
canvas.info();
```
Output:
<details>
  <summary>Canvas Data (long)</summary>
<code>
Canvas {canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D, sprites: Array(1), keys: Object, constructor: Object}
canvas: 
<canvas id="canvas" width="600" height="400" border="1"></canvas>
ctx: CanvasRenderingContext2D
canvas: 
<canvas id="canvas" width="600" height="400" border="1"></canvas>
globalAlpha: 1
globalCompositeOperation: "source-over"
filter: "none"
imageSmoothingEnabled: true
imageSmoothingQuality: "low"
strokeStyle: "#000000"
fillStyle: "#000000"
shadowOffsetX: 0
shadowOffsetY: 0
shadowBlur: 0
shadowColor: "rgba(0, 0, 0, 0)"
lineWidth: 1
lineCap: "butt"
lineJoin: "miter"
miterLimit: 10
lineDashOffset: 0
font: "10px sans-serif"
textAlign: "start"
textBaseline: "alphabetic"
direction: "ltr"
fontKerning: "auto"
fontStretch: "normal"
fontVariantCaps: "normal"
letterSpacing: "0px"
textRendering: "auto"
wordSpacing: "0px"
clip: ƒ clip() {}
<constructor>: "Function"
name: "Function"
createConicGradient: ƒ createConicGradient() {}
<constructor>: "Function"
name: "Function"
createImageData: ƒ createImageData() {}
<constructor>: "Function"
name: "Function"
createLinearGradient: ƒ createLinearGradient() {}
<constructor>: "Function"
name: "Function"
createPattern: ƒ createPattern() {}
<constructor>: "Function"
name: "Function"
createRadialGradient: ƒ createRadialGradient() {}
<constructor>: "Function"
name: "Function"
drawFocusIfNeeded: ƒ drawFocusIfNeeded() {}
<constructor>: "Function"
name: "Function"
drawImage: ƒ drawImage() {}
<constructor>: "Function"
name: "Function"
fill: ƒ fill() {}
<constructor>: "Function"
name: "Function"
fillText: ƒ fillText() {}
<constructor>: "Function"
name: "Function"
getContextAttributes: ƒ getContextAttributes() {}
<constructor>: "Function"
name: "Function"
getImageData: ƒ getImageData() {}
<constructor>: "Function"
name: "Function"
getLineDash: ƒ getLineDash() {}
<constructor>: "Function"
name: "Function"
getTransform: ƒ getTransform() {}
<constructor>: "Function"
name: "Function"
isContextLost: ƒ isContextLost() {}
<constructor>: "Function"
name: "Function"
isPointInPath: ƒ isPointInPath() {}
<constructor>: "Function"
name: "Function"
isPointInStroke: ƒ isPointInStroke() {}
<constructor>: "Function"
name: "Function"
measureText: ƒ measureText() {}
<constructor>: "Function"
name: "Function"
putImageData: ƒ putImageData() {}
<constructor>: "Function"
name: "Function"
reset: ƒ reset() {}
<constructor>: "Function"
name: "Function"
roundRect: ƒ roundRect() {}
<constructor>: "Function"
name: "Function"
save: ƒ save() {}
<constructor>: "Function"
name: "Function"
scale: ƒ scale() {}
<constructor>: "Function"
name: "Function"
setLineDash: ƒ setLineDash() {}
<constructor>: "Function"
name: "Function"
setTransform: ƒ setTransform() {}
<constructor>: "Function"
name: "Function"
stroke: ƒ stroke() {}
<constructor>: "Function"
name: "Function"
strokeText: ƒ strokeText() {}
<constructor>: "Function"
name: "Function"
transform: ƒ transform() {}
<constructor>: "Function"
name: "Function"
translate: ƒ translate() {}
<constructor>: "Function"
name: "Function"
arc: ƒ arc() {}
<constructor>: "Function"
name: "Function"
arcTo: ƒ arcTo() {}
<constructor>: "Function"
name: "Function"
beginPath: ƒ beginPath() {}
<constructor>: "Function"
name: "Function"
bezierCurveTo: ƒ bezierCurveTo() {}
<constructor>: "Function"
name: "Function"
clearRect: ƒ clearRect() {}
<constructor>: "Function"
name: "Function"
closePath: ƒ closePath() {}
<constructor>: "Function"
name: "Function"
ellipse: ƒ ellipse() {}
<constructor>: "Function"
name: "Function"
fillRect: ƒ fillRect() {}
<constructor>: "Function"
name: "Function"
lineTo: ƒ lineTo() {}
<constructor>: "Function"
name: "Function"
moveTo: ƒ moveTo() {}
<constructor>: "Function"
name: "Function"
quadraticCurveTo: ƒ quadraticCurveTo() {}
<constructor>: "Function"
name: "Function"
rect: ƒ rect() {}
<constructor>: "Function"
name: "Function"
resetTransform: ƒ resetTransform() {}
<constructor>: "Function"
name: "Function"
restore: ƒ restore() {}
<constructor>: "Function"
name: "Function"
rotate: ƒ rotate() {}
<constructor>: "Function"
name: "Function"
strokeRect: ƒ strokeRect() {}
<constructor>: "Function"
name: "Function"
<constructor>: "CanvasRenderingContext2D"
name: "CanvasRenderingContext2D"
sprites: Array(1)
0: Sprite
x: 50
y: 300
width: 100
height: 100
type: "rectangle"
color: "green"
src: ""
<constructor>: "Sprite"
name: "Sprite"
keys: Object
<constructor>: "Canvas"
name: "Canvas"
  </code>
  </details>

### Get FPS
This function outputs the FPS into the console,
```
getFps();
```
Output:
```
60 
```
Note: This is the desired FPS already set. This does not reflect how the computer is actually processing the scripts.
   
### Mouse Position
This function outputs the approximate position of the mouse cursor,
```
printMousePos();
```
Output:
```
X:0 Y:0
```

## Settings

### FPS
This setting allows you to set what FPS you desire. At the top of your script simply write,
```
fps = 60;
```
You can set it to any number. 60 is the default and is what I typically reccomend, but feel free to change it to whatever is best for your project.
You can also use 'turbo'. This setting makes the project run as fast as possible, limiting screen refresh and making calculations as fast as possible.
```
fps = turbo;
```
Make sure to not set Turbo and FPS in the same script or else they will cancel out.
   
### Mouse Cursor
You can edit the mouse cursor as you would a sprite. Examples:
```
pointer.setImage("image.png"); // Set the cursor to a different image
pointer.setSize(50); // Increase the cursor's size
pointer.hide(); // Hide the cursor
// Etc.
   
```

# Examples
## Flappy Bird Example
```
const canvas = new Canvas("canvas", 600, 400);
const bird = new Sprite(
  0,
  0,
  50,
  50,
  "image",
  "blue",
  "https://publicdomainvectors.org/tn_img/frame-1m.webp"
);
const button = new Sprite(
  300,
  300,
  100,
  100,
  "image",
  "green",
  "https://pngimg.com/d/buttons_PNG148.png"
);
const obstacle = new Sprite(500, 0, 50, 50, "rectangle", "green", "");
const score = new Sprite(30, 50, 25, 50, "text", "blue", "");
const highscore = new Sprite(350, 50, 25, 50, "text", "blue", "");
const label = new Sprite(315, 350, 25, 50, "text", "blue", "");
const gameover = new Sprite(200, 200, 40, 50, "text", "black", "");
const playbutton = new Sprite(
  200,
  100,
  100,
  50,
  "image",
  "blue",
  "https://games.shelfstuff.com/spot-the-difference/Assets/game0/playAgainButton2x.png"
);
canvas.addSprite(bird);
canvas.addSprite(obstacle);
canvas.addSprite(score);
canvas.addSprite(highscore);
canvas.addSprite(button);
canvas.addSprite(label);
canvas.addSprite(gameover);
score.setText("Score: 0");
label.setText("Jump");
console.log(canvas.sprites);
var points = 0;
var stopped = false;
var counter = null;

setBackdropColor("lightblue");
canvas.forever = function () {
  highscore.setText("Highscore: " + localStorage.getItem("highscore"));

  bird.changeY(1);
  obstacle.changeX(-3);
  if (obstacle.x < 0) {
    obstacle.setX(500);
    obstacle.setY(random(0, 350));
    obstacle.setHeight(random(20, 200));
    if (stopped == false) {
      points += 1;
      score.setText("Score: " + points);
      if (points > localStorage.getItem("highscore")) {
        localStorage.setItem("highscore", points);
      }
    }
  }
  if (bird.y < 0) {
    bird.setY(0);
  }

  if (bird.y > 350) {
    bird.setY(350);
  }
};

canvas.handleInput = function () {
  if (bird.isTouchingColor("green")) {
    bird.hide();
    stopped = true;
    gameover.setText("Game over");
    canvas.addSprite(playbutton);
  }

  if (button.isClicked()) {
    bird.changeY(-20);
  }

  if (playbutton.isClicked()) {
    window.location.reload();
  }
};

canvas.start();

```

# Credits
Created by Mryellowdog
