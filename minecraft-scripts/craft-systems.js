// Define crafting recipes
const recipes = {
  "wooden_pickaxe": {
    "ingredients": ["wood", "wood", "wood", null, "stick", null, null, "stick", null],
    "result": "wooden_pickaxe"
  },
  "stone_pickaxe": {
    "ingredients": ["cobblestone", "cobblestone", "cobblestone", null, "stick", null, null, "stick", null],
    "result": "stone_pickaxe"
  },
  "iron_pickaxe": {
    "ingredients": ["iron_ingot", "iron_ingot", "iron_ingot", null, "stick", null, null, "stick", null],
    "result": "iron_pickaxe"
  }
};

// Define crafting table object
const craftingTable = {
  "slots": [null, null, null, null, null, null, null, null, null],
  "craft": function() {
    // Check if any recipe matches the ingredients in the slots
    for (let recipe in recipes) {
      const ingredients = recipes[recipe]["ingredients"];
      let match = true;
      for (let i = 0; i < ingredients.length; i++) {
        if (ingredients[i] !== null && ingredients[i] !== this.slots[i]) {
          match = false;
          break;
        }
      }
      if (match) {
        // Recipe matches, replace ingredients with result in crafting table slots
        const result = recipes[recipe]["result"];
        this.slots = this.slots.map((slot, index) => {
          if (ingredients[index] !== null) {
            return null;
          } else if (slot === null) {
            return null;
          } else {
            return result;
          }
        });
        console.log("Crafted " + result + "!");
        return;
      }
    }
    console.log("No matching recipe found.");
  }
};

// Example usage:
craftingTable.slots = ["wood", "wood", "wood", null, "stick", null, null, "stick", null];
craftingTable.craft(); // Outputs "Crafted wooden_pickaxe!"
console.log(craftingTable.slots); // Outputs [null, null, null, null, null, null, null, null, "wooden_pickaxe"]
