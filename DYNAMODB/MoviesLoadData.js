/**
 * Copyright 2010-2019 Amazon.com, Inc. or its affiliates. All Rights Reserved.
 *
 * This file is licensed under the Apache License, Version 2.0 (the "License").
 * You may not use this file except in compliance with the License. A copy of
 * the License is located at
 *
 * http://aws.amazon.com/apache2.0/
 *
 * This file is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR
 * CONDITIONS OF ANY KIND, either express or implied. See the License for the
 * specific language governing permissions and limitations under the License.
 */
var AWS = require('aws-sdk')
var fs = require('fs')

var template = require('./template.json')

AWS.config.update({
  region: 'us-west-2',
  endpoint: 'http://localhost:8000'
})

var docClient = new AWS.DynamoDB.DocumentClient()

console.log('Importing movies into DynamoDB. Please wait.')

var allMovies = JSON.parse(fs.readFileSync('moviedata_copy.json', 'utf8'))

var objJson = JSON.stringify(template)
let obJson2 = template
obJson2.RequestItem.Movies.PutRequest = {
  Item: { '1': 1, '2': 2, '3': 3 }
}

//console.log(JSON.stringify(obJson2));

//var allMovies = JSON.parse(fs.readFileSync('moviedata.json', 'utf8'))


console.log(JSON.stringify(obJson2))

allMovies.forEach(function(movie) {
    var params = {
        TableName: "Movies",
        Item: {
            "year":  movie.year,
            "title": movie.title,
            "info":  movie.info
        }
    };

    docClient.put(params, function(err, data) {
       if (err) {
           console.error("Unable to add movie", movie.title, ". Error JSON:", JSON.stringify(err, null, 2));
       } else {
           console.log("PutItem succeeded:", movie.title);
       }
    });
});

