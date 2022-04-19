const express = require('express');
const router = express.Router();

const batchController= require("../controllers/batchController")
const developerController = require("../controllers/developerController")



router.post("/createDevelopers",developerController.createDevelopers )
router.post("/createBatch", batchController.createBatch  )
router.get("/scholership_Developers",developerController.scholership_Developers)
router.get("/developers",developerController.developers)

module.exports = router;