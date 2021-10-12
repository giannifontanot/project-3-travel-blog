import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import './assets/css/style2.css';

import { ADD_TRIP } from '../utils/mutations';
import { QUERY_TRIPS } from '../utils/queries';

const TripForm = () => {
  const [formState, setFormState] = useState({
    description: '',
    tripTitle: '',
    imageUrl: '',
  });
  const [characterCount, setCharacterCount] = useState(0);

  const [addTrip, { error }] = useMutation(ADD_TRIP, {
    // All returning data from Apollo Client queries/mutations return in a `data` field, followed by the the data returned by the request
    update(cache, { data: { addTrip } }) {
      try {
        const { trips } = cache.readQuery({ query: QUERY_TRIPS });

        cache.writeQuery({
          query: QUERY_TRIPS,
          data: { trips: [addTrip, ...trips] },
        });
      } catch (e) {
        console.error(e);
      }
    },
  });

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const { data } = await addTrip({
        variables: { ...formState },
      });

      setFormState({
        description: '',
        tripTitle: '',
        imageUrl: '',
      });
    } catch (err) {
      console.error(err);
    }
  };


  const handleFormSubmit2 = async (event) => {
    event.preventDefault();

    const url = "https://api.cloudinary.com/v1_1/fullstackdeveloper/image/upload";
    const files = document.querySelector("[type=file]").files;
    const formData = new FormData();

    for (let i = 0; i < files.length; i++) {
      let file = files[i];
      formData.append("file", file);
      formData.append("upload_preset", "rpw7hj6v");

      console.log("---> fetch :");
      fetch (url, {
        method: "POST",
        body: formData
      })
          .then((response) => {
            return response.text();
          })
          .then((data) => {
            document.getElementById("data").innerHTML += data;
          });
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    if (name === 'description' && value.length <= 280) {
      setFormState({ ...formState, [name]: value });
      setCharacterCount(value.length);
    } else if (name !== 'description') {
      setFormState({ ...formState, [name]: value });
    }
  };

  return (
    <div className="tripCard">
      <h3>Tell us about your trip!</h3>

      <p
        className={`m-0 ${
          characterCount === 280 || error ? 'text-danger' : ''
        }`}
      >
        Character Count: {characterCount}/280
        {error && <span className="ml-2">Something went wrong...</span>}
      </p>
      <form
        className="flex-row justify-center justify-space-between-md align-center"
        onSubmit={handleFormSubmit}
      >
        <div className="col-12">
          <textarea
            name="description"
            placeholder="Here's a new thought..."
            value={formState.description}
            className="form-input w-100"
            style={{ lineHeight: '1.5' }}
            onChange={handleChange}>
          </textarea>
        </div>
        <div className="col-12 col-lg-9">
          <input
            name="tripTitle"
            placeholder="Add your name to get credit for the trip..."
            value={formState.tripTitle}
            className="form-input w-100"
            onChange={handleChange}
          />
        </div>





        <div className="col-12 col-lg-3">
          <button className="btn btn-primary btn-block py-3" type="submit">
            Add Trip
          </button>
        </div>
        {error && (
          <div className="col-12 my-3 bg-danger text-white p-3">
            Something went wrong...
          </div>
        )}
      </form>


      <div>
        <form
            id="formImage"
            method="post"
            encType="multipart/form-data"
            onSubmit={handleFormSubmit2}>
          <input type="file" name="files[]" multiple />
          <input type="submit" value="Upload Files" name="submit" />
        </form>

        <p id="data">

        </p>


      </div>
    </div>
  );
};

export default TripForm;
