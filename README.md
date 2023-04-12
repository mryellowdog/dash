# dash
A simple JavaScript library for making 2D games

# Note
This library is far from done and still might have bugs and incomplete stuff. And it probably can't be used to create anything super advanced yet. I will probably try to finish this if I get the time, but feel free to modify code or create a pull request as you like.

# Setting up Dash 0.2

1. Download the file, or use the cdn

```
<script src="https://dashjs.netlify.app/dash.js"></script>
```

2. Initializing Dash

In Dash, we usually use a canvas element to put our game inside of, you can do this, like this
```
<canvas id="canvas" width="600" height="400" border="1"></canvas>
```
Then, define the canvas inside Javascript,
```
const canvas = new Canvas("canvas", 600, 400);
```
Finally, start Dash up using
```
canvas.start();
```
## Example:
```
<canvas id="canvas" width="600" height="400" border="1"></canvas>
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
const InsertName = new Sprite(X pos, Y pos, width, height, type (rectangle or image), color (if applicable), image url (if applicable));
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
if(pause == false){
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



## Input

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

## Settings

### FPS
This setting allows you to set what FPS you desire. At the top of your script simply write,
```
fps = 60;
```
You can set it to any number. 60 is the default and is what I typically reccomend, but feel free to change it to whatever is best for your project.
You can also use 'turbo'. This setting makes the project run as fast as possible, limiting screen refresh and making calculations as fast as possible.
```
turbo = true;
```
Make sure to not set Turbo and FPS in the same script or else they will cancel out.

# Examples
## Infinite Runner Game Example,
```
<button onclick="canvas.start();">START GAME</button>
    <h2 id="status">Dodging Game</h2>
    <canvas id="canvas" width="600" height="400" border="1"></canvas>
    <script src="dash.js"></script>
    <script>
      const canvas = new Canvas("canvas", 600, 400);
      const player = new Sprite(50, 150, 50, 50, "image", "blue", "bird.png");
      const enemy = new Sprite(550, Math.random() * 350, 50, 50, "image", "red", "storm.png");
      canvas.addSprite(player);
      canvas.addSprite(enemy);

      canvas.handleInput = function () {
        if (canvas.isKeyDown("ArrowUp")) {
          player.increaseY(-5);
        }
        if (canvas.isKeyDown("ArrowDown")) {
          player.increaseY(5);
        }
        if (player.isTouching(enemy)) {
          window.location.reload();
        }
      };
      setInterval(() => {
        enemy.increaseX(-15);
        if (enemy.x < -50) {
          enemy.setX(600);
          enemy.setY(Math.random() * 350);
        }
      }, 1000 / 60);
    </script>
```
## Catching Game Example,
```
<p>Score:</p>
    <p id="scoreText">0</p>
    <p>Time:</p>
    <p id="timerText">60</p>
    <h2 id="status">Catching Game</h2>
    <canvas id="canvas" width="600" height="400" border="1"></canvas>
    <script src="dash.js"></script>
    <script>
      var score = 0;
      var timer = 60;
      const canvas = new Canvas("canvas", 600, 400);
      const player = new Sprite(50, 300, 50, 50, "image", "blue", "farmer.png");
      const food = new Sprite(Math.random() * 350, 50, 50, 50, "image", "red", "apple.png");

      canvas.addSprite(player);
      canvas.addSprite(food);

      canvas.handleInput = function () {
        if (canvas.isKeyDown("ArrowRight")) {
          player.increaseX(5);
        }
        if (canvas.isKeyDown("ArrowLeft")) {
          player.increaseX(-5);
        }
        if (player.isTouching(food)) {
          //alert("Game Over!");
          food.setY(50);
          food.setX(Math.random() * 350);
          score += 1;
          document.getElementById("scoreText").innerHTML = score;
        }
      };

      canvas.start();

      setInterval(() => {
        food.increaseY(5);
        if (food.y > 300) {
          food.setY(50);
          food.setX(Math.random() * 350);
        }
      }, 1000 / 60);

      setInterval(() => {
        timer -= 1;
        document.getElementById("timerText").innerHTML = timer;
        if (timer < 1) {
          timer = 60;
          alert("Game over! Good job, you got " + score + " points!");
          location.reload();
        }
      }, 1000);
    </script>
```

## Flappy Bird Full Game,
```
<h2 id="score"></h2>
<h3 id="highscore" class="highscore">Highscore: </h3>
<img src="menu.gif" id="menu" onclick="startgame()"></img>
<canvas id="canvas" width="600" height="400" class="canvas"></canvas>
<script src="dash.js"></script>

<script>
  document.getElementById("highscore").innerHTML = "Highscore: " + localStorage.getItem("best");
  //
function startgame(){
document.getElementById("menu").remove();
document.getElementById("highscore").remove();

  var score = 0;
  
  const canvas = new Canvas("canvas", 600, 400);
  const player = new Sprite(50, 200, 48, 48, "image", "blue", "https://apkfree.com/apk/0/16/icons/686.png");
  const obstacle = new Sprite(500, 50, 50, 50, "rectangle", "green", "");
  canvas.addSprite(player);
  canvas.addSprite(obstacle);

  canvas.handleInput = function () {
    if (canvas.isKeyDown("ArrowUp")) {
      player.increaseY(-2);
    } else {
      player.increaseY(2);
    }

    if (player.isTouching(obstacle)) {
      location.reload();
    }
  };

  setInterval(() => {
    obstacle.increaseX(-10);
    if (obstacle.x < -50) {
      score += 1;
      document.getElementById("score").innerHTML = score;
      if (localStorage.getItem("best") < score){
      localStorage.setItem("best", score);
      }
      obstacle.setX(600);
      obstacle.setY(Math.random() * 350);
      obstacle.height = Math.random() * 200;
    }
  }, 1000 / 60);
  canvas.start();
}
</script>
<style>
.highscore {
  background-color: black;
  color: white;
  max-width: 600;
}

  </style>

```

# Credits
Created by Mryellowdog
