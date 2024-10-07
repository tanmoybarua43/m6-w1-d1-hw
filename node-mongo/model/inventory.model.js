// inventory.model.js
const mongoose = require('mongoose');

// Define the schema for inventory items
const InventorySchema = new mongoose.Schema({
    prodname: { type: String, required: true },
    qty: { type: Number, required: true },
    price: { type: Number, required: true },
    status: { type: String, required: true }
});

// Create the model from the schema
const Inventory = mongoose.model('Inventory', InventorySchema);

module.exports = Inventory;
