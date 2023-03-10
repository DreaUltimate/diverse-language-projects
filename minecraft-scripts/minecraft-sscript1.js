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
  inventory: []
};

// Define functions for gameplay
function mineBlock(block) {
  // Update score and inventory
  score += block.hardness * 10;
  player.inventory.push(block);
  
  // Update player position
  player.y += 1;
}

function attackEnemy(enemy) {
  // Update health and score
  health -= enemy.damage;
  score += enemy.points;
}

function craftItem(item) {
  // Check if player has required inventory
  var hasInventory = true;
  for (var i = 0; i < item.requiredInventory.length; i++) {
    if (player.inventory.indexOf(item.requiredInventory[i]) === -1) {
      hasInventory = false;
      break;
    }
  }
  
  // Craft item if player has required inventory
  if (hasInventory) {
    player.inventory.push(item);
  }
}

// Define block and enemy objects
var diamondOre = {name: "Diamond Ore", image: "diamond_ore.png", hardness: 5};
var creeper = {name: "Creeper", image: "creeper.png", damage: 10, points: 50};

// Define crafting recipes
var diamondSword = {name: "Diamond Sword", requiredInventory: [diamondOre]};
var diamondPickaxe = {name: "Diamond Pickaxe", requiredInventory: [diamondOre, wood]};

// Use gameplay functions to play the game
mineBlock(stone);
attackEnemy(creeper);
craftItem(diamondSword);
