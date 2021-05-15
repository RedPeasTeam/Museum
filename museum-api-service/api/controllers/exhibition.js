'use strict';

const faker = require('faker');

module.exports = {
  exhibition: getExhibition
};

const images = [faker.image.nature, faker.image.nightlife, faker.image.sports, faker.image.abstract, faker.image.cats];

function getExhibition(req, res) {
  const exhibitions = [];
  
  for (let i = 0; i < 7; i += 1) {
    exhibitions.push({
      "nameexhibi": '' + faker.company.companyName(),
      "imageexhibi": '' + images[i % 5](),
      "costexhibi": '' + faker.datatype.number({
        "min": 10,
        "max": 100
      }),
      "nameguide": '' + faker.name.firstName(),
      "imageguide": '' + faker.image.people(),
      "ratioguide":  '' + faker.datatype.float({
        "min": 1,
        "max": 10
      })
    });
  }
  

  res.json([...exhibitions]);
}
