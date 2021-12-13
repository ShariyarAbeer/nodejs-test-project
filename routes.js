const express = require('express');
const router = express.Router();
const UserController = require('./controllers/userControllers')

router.post("/adduser",UserController.userData);
router.get("/getuser",UserController.getUserData);
router.get("/updateuser",UserController.userUpdate);


module.exports = router;