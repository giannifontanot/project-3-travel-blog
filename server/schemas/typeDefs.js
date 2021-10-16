const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Trip {
    _id: ID
    tripTitle: String
    imageUrl: String
    description: String
    createdAt: String
    comments: [Comment]!
  }

  type Comment {
    _id: ID
    username: String
    commentText: String
  }
  

  type Query {
    trips: [Trip]!
    trip(tripId: ID!): Trip
  }

  type Mutation {
    addTrip(tripTitle: String!, description: String!, imageUrl: String!): Trip
    addComment(tripId: ID!, username: String, commentText: String!): Trip
    removeTrip(tripId: ID!): Trip
    removeComment(tripId: ID!, commentId: ID!): Trip
  }
`;

module.exports = typeDefs;
