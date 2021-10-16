import { gql } from '@apollo/client';

export const ADD_TRIP = gql`
  mutation addTrip($description: String!, $tripTitle: String!, $imageUrl: String!) {
    addTrip(description: $description, tripTitle: $tripTitle, imageUrl: $imageUrl) {
      _id
      description  #ThoughtText
      tripTitle    #ThoughtAuthor
      imageUrl
      createdAt
      comments {
        _id
        commentText
      }
    }
  }
`;


