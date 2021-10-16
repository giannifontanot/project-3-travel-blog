import React from 'react';
import { useQuery } from '@apollo/client';
import imgBlank from './assets/images/blank.jpg';
import imgSpinner from './assets/images/spinner.gif';


import { QUERY_TRIPS } from '../utils/queries';

const Dashboard = () => {
    const { loading, data } = useQuery(QUERY_TRIPS);
    const trips = data?.trips || [];

    return (
        <main>
            <br />
            <div className="flex-row justify-center">
                <h1>You are logged out from the application.</h1>
            </div>
        </main>
    );
};

export default Dashboard;
