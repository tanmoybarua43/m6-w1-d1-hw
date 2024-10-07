// inventory.router.js
const express = require('express');
const router = express.Router();
const {
    createInventory,
    getInventory,
    getInventories,
    updateInventory,
    deleteInventory
} = require('../controller/inventory.controller');

// Define routes
router.post('/inventory', createInventory);
router.get('/inventory/:id', getInventory);
router.get('/inventories', getInventories);
router.put('/inventory/:id', updateInventory);
router.delete('/inventory/:id', deleteInventory);

module.exports = router;
