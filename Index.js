const express = require('express');
const router = express.Router();
let devices = [
    { id: 1, name: 'iPhone 15', category: 'Smartphone', price: 999 },
    { id: 2, name: 'MacBook Pro', category: 'Laptop', price: 1999 }
];
router.get('/', (req, res) => {
    res.json(devices);
});
router.get('/:id', (req, res) => {
    const device = devices.find(d => d.id === parseInt(req.params.id));
    if (!device) return res.status(404).send('Device not found');
    res.json(device);
});
router.post('/', (req, res) => {
    const newDevice = {
        id: devices.length + 1,
        name: req.body.name,
        category: req.body.category,
        price: req.body.price
    };
    devices.push(newDevice);
    res.status(201).json(newDevice);
});

module.exports = router;
