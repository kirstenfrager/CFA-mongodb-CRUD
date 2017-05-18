const mongoose = require('mongoose');
const Ingredient = require('../models/Ingredient');

// mongoose query finding all the records relating to that model
exports.getIngredients = (req, res) => {
  Ingredient.find()
  // once we get all our records from our mongo db all we will then put them in and feed them into our template. to be accessible there.
    .then((ingredients) => {
      res.render('index', {
        title: 'Ingredient',
        ingredients: ingredients
      })
    })
};

exports.postIngredients = (req, res) => {
  const name = req.body.ingredient_name;
  let ingredient = new Ingredient();
  ingredient.name = name;
  ingredient.save()
    .then(() => {
      res.redirect('/')
    });
};

// create a get route to get that particular view
exports.editIngredients = (req, res) => {
  Ingredient.findOne({ _id: req.params.id })
  // shows params. req gets sent when the connection is going to our server res is what we get sent back
  // res.send(req.params)
    .then(ingredient => { //render a template
      res.render('editIngredient', {ingredient: ingredient})
    })
};

exports.updateIngredients = (req, res) => {
  // finding a record by the id which we get from our params. we send through the data which in this case is the body of the req and then send thorugh any other options we want
  Ingredient.findOneAndUpdate({ _id: req.params.id }, req.body, {
    new: true   //returns new ingredient
  })
    .then(ingredient => {
      res.redirect('/')
    })
};

// exports.deleteIngredients = (req, res) => {
//   Ingredient.findByIdAndRemove({_id: req.params.id},
// 	   function(err, docs){
// 		if(err) res.json(err);
// 		else    res.redirect('/');
// 	});
// };

exports.deleteIngredients = (req, res) => {
  Ingredient.findByIdAndRemove(req.params.id)
    .then(() => {
      res.redirect('/');
    });
};
