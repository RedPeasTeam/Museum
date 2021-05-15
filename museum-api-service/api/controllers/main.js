'use strict';

const faker = require('faker')

// for(let i = 0; i <=5; i++) {
//   const arr = [];
//    arr.push({
//       "id": '' + faker.datatype.number(),
//       "name-exhibi": '' + faker.lorem.word(),
//       "image-exhibi": '' + faker.image.people().slice(0, -10) + Math.ceil(Math.random() * 400) + '/people',
//       "description-exhibi": '' + faker.lorem.words(),
//       "image-news": '' + faker.image.people().slice(0, -10) + Math.ceil(Math.random() * 400) + '/people',
//       "description-news": '' + faker.lorem.words()
//       });
// }
/*
 Once you 'require' a module you can reference the things that it exports.  These are defined in module.exports.
 For a controller in a127 (which this is) you should export the functions referenced in your Swagger document by name.
 Either:
  - The HTTP Verb of the corresponding operation (get, put, post, delete, etc)
  - Or the operationId associated with the operation in your Swagger document
  In the starter/skeleton project the 'get' operation on the '/hello' path has an operationId named 'hello'.  Here,
  we specify that in the exports of this module that 'hello' maps to the function named 'hello'
 */
module.exports = {
  main: getParematres
};

function getParematres(req, res) {
  const arr = [];
  for(let i = 0; i <=5; i++) {
    
     arr.push({
        "id": faker.datatype.number(),
        "name-exhibi": '' + faker.lorem.word(),
        "image-exhibi": '' + faker.image.people().slice(0, -10) + Math.ceil(Math.random() * 400) + '/people',
        "description-exhibi": '' + faker.lorem.words(),
        "image-news": '' + faker.image.people().slice(0, -10) + Math.ceil(Math.random() * 400) + '/people',
        "description-news": '' + faker.lorem.words()
        });
  }
  res.json([...arr]);
}