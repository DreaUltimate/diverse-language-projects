// Define the NPC class
class NPC {
  constructor(name, type, health, inventory) {
    this.name = name;
    this.type = type;
    this.health = health;
    this.inventory = inventory;
  }

  talk() {
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
}

// Create some NPC instances
const friendlyNPC = new NPC("Bob", "friendly", 100, ["apple", "sword"]);
const hostileNPC = new NPC("Goblin", "hostile", 50, ["dagger", "gold"]);

// Handle player interaction with NPCs
function interactWithNPC(npc) {
  if (npc.type === "friendly") {
    npc.talk();
    npc.trade();
  } else if (npc.type === "hostile") {
    npc.attack();
  }
}

// Example usage
interactWithNPC(friendlyNPC);
interactWithNPC(hostileNPC);
