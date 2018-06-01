'use strict';

const {
    GraphQLInt,
    GraphQLString,
    GraphQLObjectType,
} = require('graphql');

module.exports.PostType = new GraphQLObjectType({
  name: 'Post',
  fields: () => ({
    id: {
      type: GraphQLInt
    },
    title: {
      type: GraphQLString
    },
  })
});
