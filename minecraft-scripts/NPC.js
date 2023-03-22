// Define the NonPlayableCharacter class
class NonPlayableCharacter {
  constructor(name, type, health, inventory) {
    this.name = name;
    this.type = type;
    this._health = health;
    this._inventory = inventory;
  }

  displayDialogBox() {
    // Show a dialog box with the NPC's dialogue
    // ...
  }

  trade() {
    // Allow the player to trade items with the NPC
    // ...
  }

  attack() {
    // Implement NPC attack behavior
    // ...
  }

  get health() {
    return this._health;
  }

  set health(newHealth) {
    if (newHealth < 0) {
      throw new Error("Health cannot be negative.");
    }
    this._health = newHealth;
  }

  get inventory() {
    return this._inventory;
  }

  set inventory(newInventory) {
    this._inventory = newInventory;
  }
}

// Create some NonPlayableCharacter instances
const friendlyNPC = new NonPlayableCharacter("Bob", "friendly", 100, ["apple", "sword"]);
const hostileNPC = new NonPlayableCharacter("Goblin", "hostile", 50, ["dagger", "gold"]);

// Handle player interaction with NPCs
function interactWithNPC(npc) {
  switch(npc.type) {
    case "friendly":
      npc.displayDialogBox();
      npc.trade();
      break;
    case "hostile":
      npc.attack();
      break;
    default:
      throw new Error("Invalid NPC type.");
  }
}

// Example usage
try {
  interactWithNPC(friendlyNPC);
  interactWithNPC(hostileNPC);
} catch (error) {
  console.error(error);
}

