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

const printResults = function(results) { 
  console.log(results)
};

knex
.select().table('restaurants')
.then(results=> {
  console.log(results)
});

knex
  .select().from('restaurants')
  .where({ cuisine: 'Italian'})
  .debug(true)
  .then(results => console.log(results))

knex
  .select('id', 'name')
  .from('restaurants')
  .where( {cuisine: 'Italian'})
  .limit(10)
  .debug(true)
  .then(printResults)

  // 4

  knex 
  .select()
  .count()
  .from('restaurants')
  .where({cuisine: 'Thai'})
  .then(printResults)

  // 5

  knex
  .select()
  .count()
  .from('restaurants')
  .then(printResults)

  