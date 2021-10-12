import React from 'react';
import './assets/css/style2.css';
// import '../assets/css/style.css';

const TripList = (props) => {

  if (!props.trips.length) {
    return <h3>{props.message} No Trips Yet</h3>;
  }

  return (
    <div className="">
      <h3>{props.title}</h3>
      {props.trips &&
      props.trips.map((trip) => (
          <div key={trip._id} className="mb-3 tripCard">
            <h3 className=" p-2 m-0 card-header">
              {trip.tripTitle} <br />
              <span style={{ fontSize: '0.8rem' }}>
                {trip.createdAt}
              </span>
            </h3>
            <div className="  p-2">
              <p>{trip.description}</p>
            </div>
            <div className="  p-2">
              <div className="polaroid-container">
              <img src={trip.imageUrl} className="pure-img polaroid rotate10"/>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default TripList;
