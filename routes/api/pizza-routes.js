const router = require("express").Router();
const {
  getAllPizza,
  getPizzaById,
  createPizza,
  deletePizza,
  updatePizza,
} = require("../../controllers/pizza-controller");

// GET and POST routes
router.route("/").get(getAllPizza).post(createPizza);

//PUT, DELETE, GET one
router.route("/:id").put(updatePizza).delete(deletePizza).get(getPizzaById);

module.exports = router;
