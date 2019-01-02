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

// //1

// knex
// .select().table('restaurants')
// .then(results=> {
//   console.log(results)
// });

// //2

// knex
//   .select().from('restaurants')
//   .where({ cuisine: 'Italian'})
//   .debug(true)
//   .then(results => console.log(results))

// // 3

// knex
//   .select('id', 'name')
//   .from('restaurants')
//   .where( {cuisine: 'Italian'})
//   .limit(10)
//   .debug(true)
//   .then(printResults)

//   // 4

//   knex 
//   .select()
//   .count()
//   .from('restaurants')
//   .where({cuisine: 'Thai'})
//   .then(printResults)

//   // 5

//   knex
//   .select()
//   .count()
//   .from('restaurants')
//   .then(printResults)

// 6

// knex 
//   .select()
//   .from('restaurants')
//   .where({address_zipcode: '11372', cuisine: 'Thai'})
//   .then(printResults)

// 7

// knex
//   .select('id', 'name', 'address_zipcode')
//   .from('restaurants')
//   .whereIn('address_zipcode', ['10012', '10013', '10014'])
//   .andWhere({cuisine: 'Italian'})
//   .then(printResults)

// 8

// knex
// .insert({
//   name: 'Byte Cafe',borough: 'Brooklyn',
//   cuisine: 'coffee',address_building_number: '123',
//   address_street: 'Atlantic Avenue',
//   address_zipcode: '11231'
// })
// .into('restaurants')
// .then(printResults)

// // 9

// knex
// .insert({
//   name: 'someCafe', borough: 'Brooklyn',
//   cuisine:'coffee',address_building_number:'123',
//   address_street: 'Oak Avenue', address_zipcode:'11222'
// })
// .into('restaurants')
// .returning(['id','name'])
// .then(printResults)

// 10

// knex
// .insert([{
//   name: 'someCafe', borough: 'Queens',
//   cuisine: 'coffee', address_building_number: '47',
//   address_street: 'Oregon Blvd', address_zipcode: '10014'
// }, 
// {
//   name: 'Cat Cafe', borough: 'Manhattan',
//   cuisine: 'Italian', address_building_number: '243',
//   address_street: 'Wall Street', address_zipcode: '10012'
// },
// {
//   name: 'Gene\'s', borough: 'Queens',
//   cuisine: 'Irish', address_building_number: '77787',
//   address_street: 'Dublin Avenue', address_zipcode: '11222'
// }
// ])
// .into('restaurants')
// .returning(['id','name'])
// .then(printResults)

// 11

// knex('restaurants')
//   .where('nyc_restaurant_id', '30191841' )
//   .update(
//     'name', 'DJ Reynolds Pub and Restaurant')
//   .returning('name')
//   .then(printResults)

// 12

knex
.select()
.from('grades')
.where({id: '10'})
.del()

// knex('grades').where('id','10').del()

// 13

knex
.select()
.from('restaurants')
.where({id: '22'})
.del()