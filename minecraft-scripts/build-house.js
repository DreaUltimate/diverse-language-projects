// Create a function that builds a house with specified dimensions
function buildHouse(width, height, depth) {
  // First, build the walls
  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      for (let z = 0; z < depth; z++) {
        if (x == 0 || x == width - 1 || z == 0 || z == depth - 1 || y == 0 || y == height - 1) {
          // If we're on the edge, build a wall
          player.placeBlock(x, y, z, 'stone');
        } else {
          // Otherwise, build the floor and ceiling with wood planks
          player.placeBlock(x, y, z, 'planks_oak');
        }
      }
    }
  }
  
  // Now, build the roof
  for (let x = 0; x < width; x++) {
    for (let z = 0; z < depth; z++) {
      player.placeBlock(x, height, z, 'stone');
    }
  }
}

// Call the function to build a 10x6x8 house
buildHouse(10, 6, 8);
