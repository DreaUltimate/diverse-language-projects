class Inventory {
  constructor() {
    this.slots = Array(27).fill(null);
  }

  addItem(item) {
    // Check if there's an empty slot
    const emptySlotIndex = this.slots.findIndex(slot => slot === null);
    if (emptySlotIndex === -1) {
      console.log("Inventory full!");
      return;
    }

    // Add item to empty slot
    this.slots[emptySlotIndex] = item;
  }

  removeItem(item) {
    const itemIndex = this.slots.findIndex(slot => slot === item);
    if (itemIndex === -1) {
      console.log("Item not found in inventory!");
      return;
    }

    // Remove item from slot
    this.slots[itemIndex] = null;
  }

  displayInventory() {
    console.log("Inventory:");
    this.slots.forEach((item, index) => {
      console.log(`${index + 1}. ${item ? item.name : ""}`);
    });
  }
}

// Example usage
const inventory = new Inventory();
const wood = { name: "Wood" };
const stone = { name: "Stone" };
inventory.addItem(wood);
inventory.addItem(stone);
inventory.displayInventory();
inventory.removeItem(wood);
inventory.displayInventory();
