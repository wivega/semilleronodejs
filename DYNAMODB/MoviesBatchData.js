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

let params = template

//var allMovies = JSON.parse(fs.readFileSync('moviedata.json', 'utf8'))

let arrParams = []
let i = 0
allMovies.forEach(function (movie) {
  while (i < 25) {
    params.RequestItems['Movies'].push({
      PutRequest: {
        Item: {
          year: movie.year,
          title: movie.title,
          info: movie.info
        }
      }
    })
    i++
  }
  arrParams.push(params)
  params = template
  i = 0
})
let k = 0
arrParams.forEach(itemParam => {
    docClient.batchWrite(itemParam, function (err, data) {
        if (err) {
          console.log('Error', err);
        } else {
          console.log('Exito!', data);
        }
      });
});

