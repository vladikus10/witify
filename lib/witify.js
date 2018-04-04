const {Wit} = require('node-wit');

let events = [];

module.exports.on = (query, ...callbacks) => {
    if(callbacks.length === 0) return new Error(`Error on ${query} event. At least one callback function is required`);
    let event = {
        query: query,
        callbacks: callbacks 
    };
    events.push(event);
};