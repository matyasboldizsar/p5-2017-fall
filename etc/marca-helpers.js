// loading images and sounds

corsProxy = "https://cors-anywhere.herokuapp.com/"

function preloadSound(url) {
  return loadSound(corsProxy + url)
}

function preloadImage(url) {
  return loadImage(corsProxy + url)
}


// easier syntax for some p5 functionality

NORTH = 0
EAST = 90
SOUTH = 180
WEST = 270

function circle(x, y, d) {
  ellipse(x, y, d, d)
}

function square(x, y, a) {
  rect(x, y, a, a)
}

function createGroup() {
  return new Group()
}

function playSound(sound) {
  if (!sound.isPlaying()) {
    sound.play()
  }
}

function stopSound(sound) {
  sound.stop()
}

function paintCanvas(c) {
  // suppress console output
  var _ = background(c)
}

function pick(arr) {
  // use random with intervals and pick for arrays to avoid the topic of overloading
  return random(arr)
}


// general helper functions

function roundTo(num, to) {
    return to * round(num / to)
}

function repulsionPoint(sprite, magnitude, pointX, pointY) {
    var angle = atan2(pointY - sprite.position.y, pointX - sprite.position.x)
    sprite.velocity.x -= cos(angle) * magnitude
    sprite.velocity.y -= sin(angle) * magnitude
}


// misc

function pulse(from, to, speed) {
  if (typeof speed === "undefined") {
    speed = 1
  }
  var middle = (from + to) / 2
  var amplitude = Math.abs(from - to) / 2
  var direction = to > from ? 1 : -1
  return middle + direction * amplitude * sin(frameCount / 50 * speed)
}


// make sure p5's `print` is not overwritten by the browser

print = console.log
