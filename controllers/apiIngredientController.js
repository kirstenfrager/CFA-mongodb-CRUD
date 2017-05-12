const mongoose = require('mongoose');
const Ingredient = require('../models/Ingredient');

exports.getIngredientsApi = (req, res) => {
  Ingredient.find()
  // once we get all our records from our mongo db all we will then put them in and feed them into our template. to be accessible there.
    .then((ingredients) => {
      res.json(ingredients)
    })
};

exports.postIngredientsApi = (req, res) => {
  const name = req.query.name;
  let ingredient = new Ingredient();
  ingredient.name = name;
  ingredient.save()
    .then(() => {
      res.redirect('/api')
    });
};

exports.editIngredientsApi = (req, res) => {
  Ingredient.findOne({ _id: req.params.id })
  // shows params. req gets sent when the connection is going to our server res is what we get sent back
  // res.send(req.params)
    .then(ingredient => { //render a template
      res.json(ingredient)
  });
};

exports.updateIngredientsApi = (req, res) => {
  // finding a record by the id which we get from our params. we send through the data which in this case is the body of the req and then send thorugh any other options we want
  Ingredient.findOneAndUpdate({ _id: req.params.id }, req.query, {
    new: true   //returns new ingredient
  })
    .then(ingredient => {
      res.redirect(`/api/ingredients/${req.params.id}`)
    })
};

exports.deleteIngredientsApi = (req,res) => {
  Ingredient.findOneAndRemove({ _id: req.params.id})
    .then(() => {
      res.redirect('/api');
    });
};
