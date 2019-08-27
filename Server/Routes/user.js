const express = require("./node_modules/express");
var router = express.Router();

router.post("/createUser", (req, res) => {
	res.send("Hello POST User")
})

router.get("/", function(req, res) {
	res.send("Hello GET User")
})


module.exports = router