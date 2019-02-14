



// Get all the module packages
var express = require('express')
var apiRouter = require('./Routes/api.js')
var userRouter = require('./Routes/user.js')

// Create Express Server Instance
app = express()

// Here is the API route
app.use('api', apiRouter)

// Here is the Routes for users
app.use('user', userRouter)

app.get('*',(req, res)=>{
	res.send('Hello')
})

app.listen(3000, () =>{
	console.log('Server is listenning')
})
