const job = require('./controllers/job.js')
const app = require('./app.js')

// Get all the module packages
// Here is the API route
app.use('job', job)

app.listen(3000, () =>{
	console.log('Server is listenning')
})
