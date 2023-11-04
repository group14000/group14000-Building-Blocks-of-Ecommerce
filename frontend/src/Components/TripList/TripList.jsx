// Import the React library for creating React components.
import React from "react";

// Import the CSS file to style the trip list.
import "./TripList.css";

// Define a functional component named 'TripList'.
const TripList = () => {
  // Create an array 'dummyTripData' containing trip information.
  const dummyTripData = [
    {
      date: "JUL 16",
      location: "DETROIT, MI",
      venue: "DTE ENERGY MUSIC THEATRE",
    },
    {
      date: "JUL 17",
      location: "CHICAGO, IL",
      venue: "SOME VENUE",
    },
    {
      date: "JUL 17",
      location: "Canada, IL",
      venue: "LILI VENUE",
    },
    {
      date: "JUL 17",
      location: "LOS Ang, IL",
      venue: "LOCK VENUE",
    },
    // You can add more trip data items as needed.
  ];

  // Return a container with a shadow for styling.
  return (
    <div className="w-75 mx-auto shadow-lg">
      {dummyTripData.map((trip, index) => (
        <div key={index}>
          {/* Render trip information for each trip in 'dummyTripData'. */}
          <div className="m-3 trip-item d-flex justify-content-between align-items-center py-2">
            <div className="trip-date">{trip.date}</div>
            <div className="trip-location">{trip.location}</div>
            <div className="trip-venue">{trip.venue}</div>
            <button className="btn btn-primary">BUY TICKETS</button>
          </div>
          {/* Add a horizontal rule between trip items, except for the last one. */}
          {index !== dummyTripData.length - 1 && <hr className="my-3" />}
        </div>
      ))}
    </div>
  );
};

// Export the 'TripList' component as the default export.
export default TripList;
