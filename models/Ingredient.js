const mongoose = require('mongoose');
// de-structuring java syntax. grabbing out of mongoose the schema object
const { Schema } = mongoose;

// create a schema for ingredient model
const ingredientSchema = new Schema({
  name: {
    type: String,
    trim: true   //name="    Sugar" gets rid of white spaces
  },
  created_at: {
    type: Date,
    default: Date.now
  }
});

// we will now export this model. the mongoose model is called Ingredient and to look at that ingredient schema
const Ingredient = mongoose.model('Ingredient', ingredientSchema);

// we want to export this ingredient. making this available in other parts.
module.exports = Ingredient;
