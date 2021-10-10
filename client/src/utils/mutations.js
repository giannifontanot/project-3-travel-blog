import { gql } from '@apollo/client';

export const ADD_TRIP = gql`
  mutation addTrip($description: String!, $tripTitle: String!) {
    addTrip(description: $description, tripTitle: $tripTitle) {
      _id
      description
      tripTitle
      createdAt
      comments {
        _id
        commentText
      }
    }
  }
`;
