// Define game variables
var score = 0;
var health = 100;

// Define block types
var dirt = {name: "Dirt Block", image: "dirt.png", hardness: 0.5};
var stone = {name: "Stone Block", image: "stone.png", hardness: 2};
var wood = {name: "Wood Block", image: "wood.png", hardness: 1};

// Define player object
var player = {
  x: 0,
  y: 0,
  z: 0,
  inventory: [],
  isCarrying: false,
  carriedObject: null
};

// Define objects that can be picked up
var rock = {name: "Rock", image: "rock.png", weight: 2};
var stick = {name: "Stick", image: "stick.png", weight: 1};

// Define functions for gameplay
function movePlayer(x, y, z) {
  // Update player position
  player.x += x;
  player.y += y;
  player.z += z;
  
  // Check if player is standing on a pickable object
  var object = checkForObject();
  if (object) {
    player.isCarrying = true;
    player.carriedObject = object;
  }
}

function checkForObject() {
  // Check if player is standing on a pickable object
  var objects = [rock, stick];
  for (var i = 0; i < objects.length; i++) {
    var object = objects[i];
    if (player.x === object.x && player.y === object.y && player.z === object.z) {
      return object;
    }
  }
  
  return null;
}

function dropObject() {
  // Update player inventory and carrying status
  player.inventory.push(player.carriedObject);
  player.carriedObject = null;
  player.isCarrying = false;
}

// Use gameplay functions to play the game
movePlayer(0, 0, 1);
dropObject();
movePlayer(0, 0, 1);
movePlayer(0, 1, 0);
movePlayer(0, 0, -1);
dropObject();
