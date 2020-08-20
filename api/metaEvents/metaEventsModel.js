const db = require('../../database/db-config');

module.exports = {
  findByText,
  add
}

function findByText(event_key) {
  console.log("Inside of meta events find by text", event_key)
  return db('meta_events').where(event_key).first();
}

function add({event_key}) {
  console.log(event_key)
  const meta_event = JSON.parse(event_key)
  console.log('meta event after parsing', meta_event)
  return db('meta_events').insert({...meta_event, event_key}).returning('id');
}