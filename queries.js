'use strict';

const { DATABASE } = require('./config');
const knex = require('knex')(DATABASE);

// Sample select 


// knex
//   .select()
//   .from('restaurants')
//   .limit(2)
//   .debug(true)
//   .then(results => console.log(results));

knex
.select().table('restaurants')
.then(results=> {
  console.log(results)
});

