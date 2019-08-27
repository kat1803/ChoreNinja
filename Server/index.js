const api = require('./routes/api.js')
const app = require('./app.js')

// Get all the module packages
// Here is the API route
app.use('api', api)

app.listen(3000, () =>{
	console.log('Server is listenning')
})
