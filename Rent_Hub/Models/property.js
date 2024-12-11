const mongoose = require('mongoose');

// Define Property Schema
const propertySchema = new mongoose.Schema({
    media: [String],
    description: String,
    price: Number,
    address: String,
    propertySummary: {
        buildingType: String,
        stories: Number,
        roomType: String,
        distanceToCollege: Number,
        nearestBusStop: String,
        utilities: Boolean,
        furnishing: String,
        amenities: [String]
    },
    sellerInformation: {
        name: String,
        email: String,
        phone: String
    },
    DatePosted: { type: Date, default: Date.now },
    Gender: String,
    Deposit: Number,
    AvailableFrom: Date,
    Washroom: { type: Number, default: 1 }
});

module.exports = mongoose.model('Property', propertySchema);