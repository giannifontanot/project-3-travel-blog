import React from 'react';
import { useQuery } from '@apollo/client';

import TripList from '../components/TripList';
import TripForm from '../components/TripForm';

import { QUERY_TRIPS } from '../utils/queries';

const Dashboard = () => {
    const { loading, data } = useQuery(QUERY_TRIPS);
    const trips = data?.trips || [];

    return (
        <main>
            <div className="flex-row justify-center">
                <div className="col-12 col-md-8 mb-3">
                    {loading ? (
                        <div>Loading...</div>
                    ) : (
                        <TripList
                            trips={trips}
                            message={"hey hey hey!!!"}
                            title="What's your greatest adventure?"
                        />
                    )}
                </div>
            </div>
        </main>
    );
};

export default Dashboard;
