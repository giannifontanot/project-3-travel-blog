const { Trip } = require('../models');

const resolvers = {
  Query: {
    trips: async () => {
      return Trip.find().sort({ createdAt: -1 });
    },

    trip: async (parent, { tripId }) => {
      return Trip.findOne({ _id: tripId });
    },
  },

  Mutation: {
    addTrip: async (parent, { description, tripTitle }) => {
      return Trip.create({ description, tripTitle });
    },
    addComment: async (parent, { tripId, commentText }) => {
      return Trip.findOneAndUpdate(
        { _id: tripId },
        {
          $addToSet: { comments: { commentText } },
        },
        {
          new: true,
          runValidators: true,
        }
      );
    },
    removeTrip: async (parent, { tripId }) => {
      return Trip.findOneAndDelete({ _id: tripId });
    },
    removeComment: async (parent, { tripId, commentId }) => {
      return Trip.findOneAndUpdate(
        { _id: tripId },
        { $pull: { comments: { _id: commentId } } },
        { new: true }
      );
    },
  },
};

module.exports = resolvers;
