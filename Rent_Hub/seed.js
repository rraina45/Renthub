const mongoose = require('mongoose');
const Property = require('./Models/property');

// Define the sample data
const sampleData = [
    {
        media: "https://cdn.realtor.ca/listing/TS638463537491570000/reb95/highres/2/24005612_1.jpg",
        description: "Modern apartment with stunning city views",
        price: 1500,
        address: "123 Main Street, Cityville",
        propertySummary: {
            buildingType: "Apartment",
            stories: 5,
            roomType: "1 Bedroom",
            distanceToCollege: 3,
            nearestBusStop: "Corner of Main St and Elm St",
            utilities: true,
            furnishing: "Furnished",
            amenities: ["Gym", "Swimming Pool", "Parking"]
        },
        sellerInformation: {
            name: "John Doe",
            email: "john@example.com",
            phone: "123-456-7890"
        }
    },
    {
        media: "https://cdn.realtor.ca/listing/TS638470627574100000/reb95/highres/0/24006370_1.jpg",
        description: "Cozy house in a quiet neighborhood",
        price: 2000,
        address: "456 Elm Street, Suburbia",
        propertySummary: {
            buildingType: "House",
            stories: 2,
            roomType: "2 Bedrooms",
            distanceToCollege: 5,
            nearestBusStop: "Corner of Elm St and Oak St",
            utilities: true,
            furnishing: "Unfurnished",
            amenities: ["Backyard", "Garage"]
        },
        sellerInformation: {
            name: "Jane Smith",
            email: "jane@example.com",
            phone: "987-654-3210"
        }
    }
];

// Function to insert sample data into the database
async function seedDatabase() {
    try {
        // Connect to MongoDB
        await mongoose.connect('mongodb+srv://rohanraina45:Sheena%40975@projectrentals.biidppa.mongodb.net/?retryWrites=true&w=majority&appName=ProjectRentals', {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });

        // Insert sample data
        await Property.insertMany(sampleData);

        console.log('Sample data inserted successfully');
    } catch (error) {
        console.error('Error seeding database:', error);
    } finally {
        // Close the database connection
        mongoose.connection.close();
    }
}

// Call the function to seed the database
seedDatabase();



// this is for test