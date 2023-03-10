// Create a function that builds a modern-style house with specified dimensions
function buildModernHouse(width, height, depth) {
  // Build the walls with white concrete
  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      for (let z = 0; z < depth; z++) {
        if (x == 0 || x == width - 1 || z == 0 || z == depth - 1 || y == 0 || y == height - 1) {
          player.placeBlock(x, y, z, 'concrete_white');
        } else {
          player.placeBlock(x, y, z, 'air');
        }
      }
    }
  }
  
  // Build the floors and ceiling with light gray concrete
  for (let x = 1; x < width - 1; x++) {
    for (let z = 1; z < depth - 1; z++) {
      player.placeBlock(x, 0, z, 'concrete_light_gray');
      player.placeBlock(x, height - 1, z, 'concrete_light_gray');
    }
  }
  
  // Build the windows with glass panes
  let windowWidth = Math.floor(width / 4);
  let windowHeight = Math.floor(height / 3);
  for (let x = 1; x < windowWidth + 1; x++) {
    for (let y = 1; y < windowHeight + 1; y++) {
      player.placeBlock(x, y, Math.floor(depth / 2), 'glass_pane');
      player.placeBlock(width - x - 1, y, Math.floor(depth / 2), 'glass_pane');
    }
  }
  
  // Build the door with dark oak planks
  player.placeBlock(Math.floor(width / 2), 0, 0, 'dark_oak_planks');
  player.placeBlock(Math.floor(width / 2), 1, 0, 'dark_oak_planks');
  player.placeBlock(Math.floor(width / 2), 2, 0, 'dark_oak_door_bottom');
  player.placeBlock(Math.floor(width / 2), 3, 0, 'dark_oak_door_top');
  
  // Build the roof with black concrete
  let roofHeight = Math.floor(height / 2);
  for (let y = 0; y < roofHeight; y++) {
    for (let x = y + 1; x < width - y - 1; x++) {
      for (let z = y + 1; z < depth - y - 1; z++) {
        player.placeBlock(x, height - y - 1, z, 'concrete_black');
      }
    }
  }
}

// Call the function to build a modern-style house with a width of 20, height of 12, and depth of 16
buildModernHouse(20, 12, 16);
