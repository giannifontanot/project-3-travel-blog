const { Trip, User } = require('../models');

const resolvers = {
  Query: {
    trips: async () => {
      const  trip  = await Trip.find().sort({ createdAt: -1 });
       console.log("---> trip :" + JSON.stringify (trip));
      return trip;
    },

    trip: async (parent, { tripId }) => {
      return await Trip.findOne({ _id: tripId });
    },
  },

  Mutation: {
    addTrip: async (parent, { description, tripTitle, imageUrl }) => {
      return await Trip.create({ description, tripTitle, imageUrl });
    },


    addComment: async (parent, { tripId, commentText }) => {
      return  Trip.findOneAndUpdate(
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
      return  Trip.findOneAndDelete({ _id: tripId });
    },
    removeComment: async (parent, { tripId, commentId }) => {
      return  Trip.findOneAndUpdate(
        { _id: tripId },
        { $pull: { comments: { _id: commentId } } },
        { new: true }
      );
    },
  },
};

module.exports = resolvers;
