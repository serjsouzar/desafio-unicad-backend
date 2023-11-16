const mongoose = require('mongoose')
const { Schema } = require('mongoose')

const deliverySchema = new Schema({
  name: {
    type: String,
    required: true
  },
  originAddress: {
    type: String,
    required: true
  },
  deliveryAddress: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    required: true,
  }
}, {timestamps: true})

deliverySchema.date instanceof Date;
const Delivery = mongoose.model("Delivery", deliverySchema)

module.exports = {Delivery, deliverySchema}