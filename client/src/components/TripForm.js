import React, {useState} from 'react';
import {useMutation} from '@apollo/client';
import './assets/css/style2.css';
import {useHistory} from "react-router-dom";


import imgBlank from '../components/assets/images/blank.jpg';
import imgSpinner from '../components/assets/images/spinner.gif';

import {ADD_TRIP} from '../utils/mutations';
import {QUERY_TRIPS} from '../utils/queries';


const TripForm = () => {
    const history = useHistory();
    //     const history = useHistory();
    //
    // function historyHelp(){
    //
    //       //  history.push('../pages/Dashboard');
    // }

    const [formState, setFormState] = useState({
        // description: '',
        // tripTitle: '',
        // imageUrl: '',
    });
    const [characterCount, setCharacterCount] = useState(0);

    const [addTrip, {error}] = useMutation(ADD_TRIP, {
        // All returning data from Apollo Client queries/mutations return in a `data` field, followed by the the data returned by the request
        update(cache, {data: {addTrip}}) {
            try {
                const {trips} = cache.readQuery({query: QUERY_TRIPS});

                cache.writeQuery({
                    query: QUERY_TRIPS,
                    data: {trips: [addTrip, ...trips]},
                });
            } catch (e) {
                console.error(e);
            }
        },
    });

    const handleFormSubmit = async (event) => {
        event.preventDefault();

        try {
            const {data} = await addTrip({
                variables: {...formState},
            });

            setFormState({
                description: '',
                tripTitle: '',
                imageUrl: '',
            });

            history.push('/dashboard');

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

            const elImage = document.getElementById('imgCloudinary');
            elImage.src = imgSpinner;



            fetch(url, {
                method: "POST",
                body: formData
            })
                .then((response) => {
                    return response.text();
                })
                .then((data) => {
                    const imageData = JSON.parse(data);

                    console.log(imageData.secure_url);

                    const elImage = document.getElementById('imgCloudinary');
                    //const elImageUrl = document.getElementById('imageUrl');
                    elImage.src = imageData.secure_url;

                    //setNativeValue(document.getElementById('imageUrl'), imageData.secure_url);
                    setFormState({
                        ...formState,
                        imageUrl: imageData.secure_url,
                    })

                });
        }
    };

    const handleChange = (event) => {
        const {name, value} = event.target;

        if (name === 'description' && value.length <= 280) {
            setFormState({...formState, [name]: value});
            setCharacterCount(value.length);
        } else if (name !== 'description') {
            setFormState({...formState, [name]: value});
        }
    };



    return (
        <>
            <h3 className="tripCard card-title">Tell us about your trip!</h3>
            <div className="tripCard">


                <form
                    className="flex-row justify-center justify-space-between-md align-center"
                    onSubmit={handleFormSubmit}
                >


                    <div className="col-12">
                        <input
                            name="tripTitle"
                            placeholder="Where did you go?"
                            value={formState.tripTitle}
                            className="form-input w-100"
                            onChange={handleChange}
                        />
                    </div>
                    <div className="col-12">


                  <textarea
                      name="description"
                      placeholder="What did you do?"
                      value={formState.description}
                      className="form-input w-100"
                      style={{lineHeight: '1.5'}}
                      onChange={handleChange}>
                  </textarea>
                    </div>


                    <div className="col-12 col-lg-3">
                        <button className=" btn-add nav-table-cell" type="submit">
                            Add Trip
                        </button>
                    </div>
                    {error && (
                        <div className="col-12 my-3 bg-danger text-white p-3">
                            Something went wrong...
                        </div>
                    )}
                </form>


                <div className="form-container">
                    <form className="form-picture"
                          id="formImage"
                          method="post"
                          encType="multipart/form-data"
                          onSubmit={handleFormSubmit2}>
                        <input type="file" name="files[]" multiple/>
                        <input type="submit" value="Upload Files" name="submit"/>
                    </form>

                    <div className="polaroid-container">
                        <img id="imgCloudinary" className="polaroid" src={imgBlank} alt=""/>
                    </div>


                </div>
            </div>
        </>
    );
};

export default TripForm;
