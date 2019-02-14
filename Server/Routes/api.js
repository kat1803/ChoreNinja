const express = require("express");
var router = express.Router();
var Database = require("../DatabaseUtil/DBConnect");

router.get("/", function(req, res) {
	res.send("Hello GET API")
//   DatabaseConnection = Database("travelapp");

//   queryString = `SELECT * FROM UserInfo WHERE userID = ${req.query.userid};`;

//   console.log(queryString);
//   DatabaseConnection.query(queryString, (err, rows) => {
//     console.log(rows);
//     res.send(rows);
//   })
})


module.exports = router;