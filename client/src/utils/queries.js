import { gql } from '@apollo/client';

export const QUERY_TRIPS = gql`
  query getTrips {
    trips {
      _id
      description
      tripTitle
      createdAt
    }
  }
`;
