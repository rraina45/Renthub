import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import PropertyDetails from '../Components/PropertyDetails.js';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { BrowserRouter as Router } from 'react-router-dom';

// Create a mock for axios
const mock = new MockAdapter(axios);

describe('PropertyDetails Component', () => {
  afterEach(() => {
    // Reset axios mock after each test
    mock.reset();
  });

  it('should render loading initially and then show property details', async () => {
    // Set up the mock API response
    const propertyData = {
      property: {
        media: ['http://image-url.com'],
        sellerInformation: {
          name: 'John Doe',
          phone: '1234567890',
          email: 'johndoe@example.com',
        },
        address: '123 Main St',
        price: '1000',
        propertySummary: {
          utilities: true,
          roomType: 'Single Room',
          furnishing: 'Furnished',
          distanceToCollege: '10 minutes',
          nearestBusStop: '2 minutes',
          amenities: 'Wi-Fi, Parking',
        },
        description: 'A nice room in a good location',
        AvailableFrom: '2024-01-01',
      },
    };

    // Mock the GET request for the property
    mock.onGet('http://localhost:3000/properties/1').reply(200, propertyData);

    // Render the component inside a Router to simulate useParams
    render(
      <Router>
        <PropertyDetails />
      </Router>
    );

    // Check that loading text is displayed initially
    expect(screen.getByText('Loading...')).toBeInTheDocument();

    // Wait for the property data to load and check the content
    await waitFor(() => expect(screen.getByText('John Doe\'s room')).toBeInTheDocument());
    expect(screen.getByText('123 Main St')).toBeInTheDocument();
    expect(screen.getByText('1000')).toBeInTheDocument();
    expect(screen.getByText('Single Room')).toBeInTheDocument();
    expect(screen.getByText('A nice room in a good location')).toBeInTheDocument();
    expect(screen.getByText('Wi-Fi, Parking')).toBeInTheDocument();
  });

  it('should display loading message if there is an error fetching data', async () => {
    // Mock an error response
    mock.onGet('http://localhost:3000/properties/1').reply(500);

    // Render the component inside a Router to simulate useParams
    render(
      <Router>
        <PropertyDetails />
      </Router>
    );

    // Check that loading text is displayed initially
    expect(screen.getByText('Loading...')).toBeInTheDocument();

    // Wait for the loading state to complete
    await waitFor(() => expect(screen.getByText('Error fetching property details:')).toBeInTheDocument());
  });
});
