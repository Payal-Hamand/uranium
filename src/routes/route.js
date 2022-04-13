const express = require('express');
const router = express.Router();
const UserModel= require("../models/userModel.js")
const UserController= require("../controllers/userController")
const BookController= require("../controllers/BookController")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})


router.post("/createBook", BookController.createBook  )

router.post("/getBooksInYear", BookController.getBooksInYear  )

router.get("/getXINRBooks",BookController.getXINRBooks)

router.get("/getUsersData", UserController.getUsersData)

router.post("/getParticularBook", BookController.getParticularBook  )

router.get("/bookList", BookController.bookList)
router.get("/getRandomBooks", BookController.getRandomBooks)

router.get("/getBookData", BookController.getBookData)

module.exports = router;

















// const express = require('express');




// const router = express.Router();
// // const UserModel= require("../models/userModel.js")
// const UserController= require("../controllers/userController")
// const BookController= require("../controllers/bookController")

// router.get("/test-me", function (req, res) {
//     res.send("My first ever api!")
// })

// router.post("/createUser", UserController.createUser  )

// router.get("/getUsersData", UserController.getUsersData)

// router.post("/createBook", BookController.createBook  )

// router.get("/getBooksData", BookController.getBooksData)

// module.exports = router;