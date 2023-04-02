const mongoose = require('mongoose')

const eventSchema = new mongoose.Schema({
  name: {
    required: true,
    type: String
    
  },
  email: {
    type: String,
    required: true
  },
  eventName: {
    type: String,
    required: true
  },
  voting: {
    type: Boolean,
    required: true
  },
  link: {
    type: String,
    required: false
  }
})

module.exports = mongoose.model('Event', eventSchema)