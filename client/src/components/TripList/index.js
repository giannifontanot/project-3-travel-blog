import React from 'react';
import '../assets/css/style.css';

const TripList = (props) => {

  if (!props.trips.length) {
    return <h3>{props.message} No Thoughts Yet</h3>;
  }

  return (
    <div className="">
      <h3>{props.title}</h3>
      {props.trips &&
      props.trips.map((trip) => (
          <div key={trip._id} className="card mb-3 tripCard">
            <h4 className="card-header bg-primary text-light p-2 m-0">
              {trip.tripTitle} <br />
              <span style={{ fontSize: '1rem' }}>
                had this thought on {trip.createdAt}
              </span>
            </h4>
            <div className="card-body bg-light p-2">
              <p>{trip.description}</p>
            </div>
          </div>
        ))}
    </div>
  );
};

export default TripList;
