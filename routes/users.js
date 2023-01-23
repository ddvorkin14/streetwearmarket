var express = require("express");
var router = express.Router();
const userController = require("../controllers/users");
router.get("/users", userController.getUsers);
router.post("/create-user", userController.createUser);

module.exports = router;
