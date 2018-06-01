'use strict';

const {
  PostType
} = require('./post_type')

const {
  postsData
} = require('../mocks/posts')

const {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLList,
} = require('graphql');

var {
  getPostsFromPG
} = require('../db/api')

module.exports.schema = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
      posts: {
        type: new GraphQLList(PostType),
        resolve: (parent, args) => postsData
      },
      postsFromPg: {
        type: new GraphQLList(PostType),
        resolve: (root, args) => getPostsFromPG()
      }
    }
  }),
})
