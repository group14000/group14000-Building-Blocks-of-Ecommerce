import React from 'react';
import './TripList.css'

const TripList = () => {
  const dummyTripData = [
    {
      date: 'JUL 16',
      location: 'DETROIT, MI',
      venue: 'DTE ENERGY MUSIC THEATRE',
    },
    {
      date: 'JUL 17',
      location: 'CHICAGO, IL',
      venue: 'SOME VENUE',
    },
    {
      date: 'JUL 17',
      location: 'Canada, IL',
      venue: 'LILI VENUE',
    },
    {
      date: 'JUL 17',
      location: 'LOS Ang, IL',
      venue: 'LOCK VENUE',
    },
    // Add more trip data items as needed
  ];
  
  return (
    <div className="w-75 mx-auto shadow-lg ">
    {dummyTripData.map((trip, index) => (
      <div key={index}>
        <div className="m-3 trip-item d-flex justify-content-between align-items-center py-2">
          <div className="trip-date">{trip.date}</div>
          <div className="trip-location">{trip.location}</div>
          <div className="trip-venue">{trip.venue}</div>
          <button className="btn btn-primary">BUY TICKETS</button>
        </div>
        {index !== dummyTripData.length - 1 && <hr className="my-3" />}
      </div>
    ))}
  </div>
  );
};

export default TripList;
