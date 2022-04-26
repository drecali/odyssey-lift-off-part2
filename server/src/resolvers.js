const resolvers = {
  Query: {
    // returns an array of Tracks that will be used to populate the homepage grid of our web client.
    tracksForHome: (_, __, { dataSources }) => dataSources.trackAPI.getTracksForHome(),
  },
  Track: {
    author: ({ authorId }, _, { dataSources }) => dataSources.trackAPI.getAuthor(authorId),
  },
};

module.exports = resolvers;
