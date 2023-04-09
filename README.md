# dash
A simple JavaScript library for making 2D games

# Note
This library is far from done and still might have bugs and incomplete stuff. And it probably can't be used to create anything super advanced yet. I will probably try to finish this if I get the time, but feel free to modify code or create a pull request as you like.

# Setting up Dash 0.1

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
### Increase
This function increases the x or y position of a sprite
```
player.increaseX(1);
player.increaseY(1);
```
You can also decrease x or y by using negative numbers.
```
player.increaseX(-1);
player.increaseY(-1);
```

## Handle Input
For these functions you should add handleInput:
```
canvas.handleInput = function () {
  // Start coding here
};
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
