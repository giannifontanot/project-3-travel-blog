import React from 'react';
import { useQuery } from '@apollo/client';
import './assets/css/style2.css';

import TripList from '../components/TripList';
import TripForm from '../components/TripForm';

import { QUERY_TRIPS } from '../utils/queries';

const handleSubmit = event => {
    event.preventDefault();
    alert('You have submitted the form.')
}

const Login = () => {
    const { loading, data } = useQuery(QUERY_TRIPS);
    const trips = data?.trips || [];

    return(
        <div className="login-wrapper">
            <h1>Please Log In</h1>
            <form>
                <label>
                    <p>Username</p>
                    <input type="text" />
                </label>
                <label>
                    <p>Password</p>
                    <input type="password" />
                </label>
                <div>
                    <button type="submit">Submit</button>
                </div>
            </form>
        </div>
    )
};

export default Login;
