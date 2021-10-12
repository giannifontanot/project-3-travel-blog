import React from 'react';
import { useQuery } from '@apollo/client';

import TripList from '../components/TripList';
import TripForm from '../components/TripForm';

import { QUERY_TRIPS } from '../utils/queries';

const CreateReview = () => {
    const { loading, data } = useQuery(QUERY_TRIPS);
    const trips = data?.trips || [];

    return (
        <main>CreateReview
            <div className="flex-row justify-center">
                <div
                    className="col-12 col-md-10 mb-3 p-3"
                    style={{ border: '1px dotted #1a1a1a' }}
                >
                    <TripForm />
                </div>

            </div>
        </main>
    );
};

export default CreateReview;
