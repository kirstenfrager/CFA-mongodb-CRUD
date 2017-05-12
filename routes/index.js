var express = require('express');
var router = express.Router();

const Ingredient = require('../models/Ingredient');
const ingredientController = require('../controllers/ingredientController');
const apiIngredientController = require('../controllers/apiIngredientController');

/* GET home page. */

router.get('/', ingredientController.getIngredients);
router.get('/api', apiIngredientController.getIngredientsApi);

router.post('/', ingredientController.postIngredients);
router.post('/api', apiIngredientController.postIngredientsApi);

router.get('/ingredients/:id/edit', ingredientController.editIngredients);
router.post('/ingredients/:id/edit', ingredientController.updateIngredients);

router.get('/api/ingredients/:id', apiIngredientController.editIngredientsApi);
router.post('/api/ingredients/:id/edit', apiIngredientController.updateIngredientsApi);

// router.get('/ingredients/:id/delete', ingredientController.deleteIngredients);

router.post('/ingredients/:id/delete', ingredientController.deleteIngredients);
router.delete('/api/ingredients/:id/delete', apiIngredientController.deleteIngredientsApi);

module.exports = router;
