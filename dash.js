class Sprite {
  constructor(x, y, width, height, type, color, src) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.type = type;
    this.color = color;
    this.src = src;
  }

  draw(ctx) {
    if (this.type === "rectangle") {
      ctx.fillStyle = this.color;
      ctx.fillRect(this.x, this.y, this.width, this.height);
    } else {
      this.image = new Image();
      this.image.src = this.src;
      this.image.width = this.width;
      this.image.height = this.height;
      ctx.drawImage(this.image, this.x, this.y);
    }
  }

  move(dx, dy) {
    this.x += dx;
    this.y += dy;
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

  increaseY(dy) {
    this.y += dy;
  }

  isTouching(sprite) {
    const xOverlap =
      this.x + this.width >= sprite.x && this.x <= sprite.x + sprite.width;
    const yOverlap =
      this.y + this.height >= sprite.y && this.y <= sprite.y + sprite.height;
    return xOverlap && yOverlap;
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

  start() {
    console.log("Initiated Dash");
    console.log("Dash 0.1 / © Mryellowdog 2023");
    setInterval(() => {
      this.handleInput();
      this.checkCollisions();
      this.draw();
    }, 1000 / 60);
  }

  isKeyDown(key) {
    return !!this.keys[key];
  }

  isKeyUp(key) {
    return !this.keys[key];
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
