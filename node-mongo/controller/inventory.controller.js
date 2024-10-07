// inventory.controller.js
const Inventory = require('../model/inventory.model');

// Create a new inventory item
exports.createInventory = async (req, res) => {
    try {
        const inventory = new Inventory(req.body);
        await inventory.save();
        res.status(200).send("Inventory item created successfully!");
    } catch (error) {
        res.status(400).send("Error creating inventory item: " + error.message);
    }
};

// Get a specific inventory item by ID
exports.getInventory = async (req, res) => {
    try {
        const inventory = await Inventory.findById(req.params.id);
        if (inventory) {
            res.status(200).json(inventory);
        } else {
            res.status(404).send("Inventory item not found");
        }
    } catch (error) {
        res.status(400).send("Error retrieving inventory item: " + error.message);
    }
};

// Get all inventory items
exports.getInventories = async (req, res) => {
    try {
        const inventories = await Inventory.find();
        res.status(200).json(inventories);
    } catch (error) {
        res.status(400).send("Error retrieving inventory items: " + error.message);
    }
};

// Update an inventory item by ID
exports.updateInventory = async (req, res) => {
    try {
        const inventory = await Inventory.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (inventory) {
            res.status(200).send("Inventory item updated successfully!");
        } else {
            res.status(404).send("Inventory item not found");
        }
    } catch (error) {
        res.status(400).send("Error updating inventory item: " + error.message);
    }
};

// Delete an inventory item by ID
exports.deleteInventory = async (req, res) => {
    try {
        const inventory = await Inventory.findByIdAndDelete(req.params.id);
        if (inventory) {
            res.status(200).send("Inventory item deleted successfully!");
        } else {
            res.status(404).send("Inventory item not found");
        }
    } catch (error) {
        res.status(400).send("Error deleting inventory item: " + error.message);
    }
};
