const express = require('express');
const mongoose = require('mongoose');

const app = express();
app.use(express.json());


// Create a Property Listing (POST)
app.post('/properties', async (req, res) => {
    try {
        const property = await Property.create(req.body);
        res.status(201).json({ property });
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// Get All Property Listings (GET)
app.get('/properties', async (req, res) => {
    try {
        const properties = await Property.find();
        res.json({ properties });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Get a Single Property Listing by ID (GET)
app.get('/properties/:id', async (req, res) => {
    try {
        const property = await Property.findById(req.params.id);
        if (!property) {
            return res.status(404).json({ message: 'Property not found' });
        }
        res.json({ property });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Update a Property Listing (PUT)
app.put('/properties/:id', async (req, res) => {
    try {
        const property = await Property.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!property) {
            return res.status(404).json({ message: 'Property not found' });
        }
        res.json({ property });
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// Delete a Property Listing (DELETE)
app.delete('/properties/:id', async (req, res) => {
    try {
        const property = await Property.findByIdAndDelete(req.params.id);
        if (!property) {
            return res.status(404).json({ message: 'Property not found' });
        }
        res.json({ message: 'Property deleted successfully' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});


