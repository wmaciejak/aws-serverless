'use strict';

const { graphql } = require('graphql');
const { schema } = require('./graphql/schema');
const { postsData } = require('./mocks/posts')
const { getPostsFromPG } = require('./db/api')

module.exports.graphql = (event, context, callback) =>
  graphql(schema, event.queryStringParameters.query)
    .then(
      result => callback(null, {
        statusCode: 200,
        body: JSON.stringify(result)
      }),
      err => callback(err)
    )

module.exports.rest_mocked_posts = (event, context, callback) => {
  return callback(null, {
    statusCode: 200,
    body: JSON.stringify(postsData)
  });
}

module.exports.rest_pg_posts = (event, context, callback) => {
  return getPostsFromPG()
    .then(
      result => callback(null, {
        statusCode: 200,
        body: JSON.stringify(result)
      }),
      err => callback(err)
    )
}
