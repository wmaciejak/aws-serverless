'use strict';

var { graphql } = require('graphql');
var { schema } = require('./graphql/schema');

module.exports.graphql_query = (event, context, callback) => graphql(schema, event.queryStringParameters.query)
  .then(
    result => callback(null, {
      statusCode: 200,
      body: JSON.stringify(result)
    }),
    err => callback(err)
  )

