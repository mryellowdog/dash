// Dash 0.3.0
// https://github.com/mryellowdog/dash/

// General Functions and variables
var fps = 60;
var turbo = 10000000;
//
var freeze = false;

let mouseX = null;
let mouseY = null;

let clickX = null;
let clickY = null;

document.write(
  "<canvas id='canvas' width='600' height='400' onmousemove='getMousePos(event)' onclick='detectClicks(event)'></canvas>"
); // Add the canvas to the screen
document.write("<style>canvas{cursor: none;}</style>"); // Remove the cursor

function getFps() {
  if (fps == 10000000) {
    console.log("Turbo");
  } else {
    console.log(fps);
  }
}

function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function pause() {
  freeze = true;
}
function unpause() {
  freeze = false;
}

function getMousePos(event) {
  mouseX = event.clientX + -10;
  mouseY = event.clientY + -15; // I added some extra X and Y to prevent too much offset
}
function detectClicks(event) {
  clickX = event.clientX + -10;
  clickY = event.clientY + -15;
}

function printMousePos() {
  console.log("X:" + mouseX, "Y:" + mouseY);
}

function setBackdropImage(backdrop) {
  document.write(
    "<style>canvas{background-image:url('" + backdrop + "');}</style>"
  );
}

function setBackdropColor(backdropcolor) {
  document.write(
    "<style>canvas{background-color:" + backdropcolor + ";}</style>"
  );
}

class Sprite {
  constructor(x, y, width, height, type, color, src) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.type = type;
    this.color = color;
    this.src = src;
    this.visible = true;
  }

  draw(ctx) {
    if (this.visible == false) {
      return;
    } else {
      if (this.type === "rectangle") {
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x, this.y, this.width, this.height);
      } else if (this.type === "image") {
        this.image = new Image();
        this.image.src = this.src;
        this.image.width = this.width;
        this.image.height = this.height;
        // Added image height/ width
        ctx.drawImage(
          this.image,
          this.x,
          this.y,
          this.image.width,
          this.image.height
        );
      } else if (this.type === "text") {
        ctx.font = this.width + "px Arial";
        ctx.fillText(this.src, this.x, this.y);
      }
    }
  }
  move(dx, dy) {
    this.x += dx;
    this.y += dy;
  }

  goto(xcoor, ycoor) {
    this.x = xcoor;
    this.y = ycoor;
  }

  setX(x) {
    this.x = x;
  }

  setY(y) {
    this.y = y;
  }

  increaseX(dx) {
    this.x += dx;
  }

  changeX(changeX) {
    this.x += changeX;
  }
  changeY(changeY) {
    this.y += changeY;
  }

  increaseY(dy) {
    this.y += dy;
  }

  decreaseX(lx) {
    this.x += lx;
  }

  decreaseY(ly) {
    this.y += ly;
  }

  // looks:
  setText(thetext) {
    // for text only
    this.src = thetext;
  }

  hide() {
    this.visible = false;
  }
  show() {
    this.visible = true;
  }

  setSize(size) {
    this.width = size;
    this.height = size;
  }
  changeSize(sizetwo) {
    this.width += sizetwo;
    this.height += sizetwo;
  }
  setColor(thecolor) {
    this.color = thecolor;
  }
  setImage(thesrc) {
    this.src = thesrc;
  }
  setType(thetype) {
    this.type = thetype;
  }
  setWidth(thewidth) {
    this.width = thewidth;
  }
  changeWidth(thewidthtwo) {
    this.width += thewidthtwo;
  }
  setHeight(theheight) {
    this.height = theheight;
  }
  changeHeight(theheighttwo) {
    this.height += theheighttwo;
  }

  isTouching(sprite) {
    const xOverlap =
      this.x + this.width >= sprite.x && this.x <= sprite.x + sprite.width;
    const yOverlap =
      this.y + this.height >= sprite.y && this.y <= sprite.y + sprite.height;
    return xOverlap && yOverlap;
  }

  isClicked() {
    if (
      clickX > this.x - this.width &&
      clickX < this.x + this.width &&
      clickY > this.y - this.height &&
      clickY < this.y + this.height
      // Check for sprite and cursor overlap
    ) {
      clickX = null;
      clickY = null;
      return true;
    } else {
      return false;
    }
  }

  isTouchingCursor() {
    if (
      mouseX > this.x - this.width &&
      mouseX < this.x + this.width &&
      mouseY > this.y - this.height &&
      mouseY < this.y + this.height
      // Check for sprite and cursor overlap
    ) {
      mouseX = null;
      mouseY = null;
      return true;
    } else {
      return false;
    }
  }

  spriteInfo() {
    console.log(this);
  }

  isTouchingColor(colortotouch) {
    for (let v = 0; v < canvas.sprites.length; v++) {
      for (let c = v + 1; c < canvas.sprites.length; c++) {
        const sprite1 = canvas.sprites[c];
        if (this.isTouching(sprite1) && sprite1.color === colortotouch) {
          return true;
        }
      }
    }
  }
}
//onClick(sprite){
//  if (event.clientX = sprite.x){
//    if (event.clientY = sprite.y){
//      sprite.onClick = function(){

//      }
// handle click events
//   }
//  }
//}

class Canvas {
  constructor(elementId, width, height) {
    this.canvas = document.getElementById(elementId);
    this.canvas.width = width;
    this.canvas.height = height;
    this.ctx = this.canvas.getContext("2d");
    this.sprites = [];
    this.keys = {};

    document.addEventListener("keydown", (event) => {
      this.keys[event.key] = true;
    });

    document.addEventListener("keyup", (event) => {
      this.keys[event.key] = false;
    });
  }

  addSprite(sprite) {
    this.sprites.push(sprite);
  }

  draw() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.sprites.forEach((sprite) => {
      sprite.draw(this.ctx);
    });
  }

  handleInput() {
    // Handle input here
  }

  forever() {
    // Run scripts forever on start
  }

  start() {
    const pointer = new Sprite(
      50,
      300,
      32,
      32,
      "image",
      "blue",
      "https://i.ibb.co/hM2XWj4/cur970.png"
    );
    canvas.addSprite(pointer);
    // Create a custom cursor
    console.log("Initiated Dash");
    console.log("Dash 0.3 / © Mryellowdog 2023");
    setInterval(() => {
      if (freeze == false) {
        this.forever();
        this.handleInput();
        this.checkCollisions();
        this.draw();
        pointer.goto(mouseX, mouseY);
      }
    }, 1000 / fps); // 60 is FPS
  }

  isKeyDown(key) {
    return !!this.keys[key];
  }

  isKeyUp(key) {
    return !this.keys[key];
  }

  info() {
    console.log(this);
  }

  checkCollisions() {
    for (let i = 0; i < this.sprites.length; i++) {
      const spriteA = this.sprites[i];
      for (let j = i + 1; j < this.sprites.length; j++) {
        const spriteB = this.sprites[j];
        if (spriteA.isTouching(spriteB)) {
          // Handle the collision here
        }
      }
    }
  }
}
