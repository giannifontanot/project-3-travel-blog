import React from 'react';
import { useQuery } from '@apollo/client';
import imgBlank from '../components/assets/images/blank.jpg';
import imgSpinner from '../components/assets/images/spinner.gif';


import { QUERY_TRIPS } from '../utils/queries';

const Dashboard = () => {
    const { loading, data } = useQuery(QUERY_TRIPS);
    const trips = data?.trips || [];

    return (
        <main>
            <br />
            <div className="flex-row justify-center">
                <div className="mb-3 tripCard">
                    <h3 className=" p-2 m-0 card-header">
                        About Travel Blog <br />
                        <span style={{ fontSize: '0.8rem' }}>
                Final Project
              </span>
                    </h3>
                    <div className="  p-2">
                        <p>This app is our final project in this extremely difficult but equally rewarding Full Stack Bootcamp.
                            The technologies we used for the completion of this project are:</p>
                    </div>
                    <div className="  p-2">
                        <ul>
                        <li>React </li>
                        <li>React Router</li>
                        <li>GraphQL</li>
                        <li>MongoDB and Mongoose ODM</li>
                        <li>Heroku for deployment</li>
                        </ul>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Dashboard;
