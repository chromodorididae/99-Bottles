// Require modules
const express = require('express');

// Create the Express app
const app = express();
const PORT = 3000

const { createEngine } = require('jsx-view-engine')
app.set('view engine', 'jsx')
app.engine('jsx', createEngine())

// Configure the app (app.set)


// Mount middleware (app.use)


//FIRST DRAFT BELOW
// Mount routes
app.get('/', function(req, res) {
  	// res.send('<h1>99 Bottles of beer on the wall</h1>');
	res.render('Home')
});

app.get('/:number_of_bottles', (req, res) => {
	if (req.params.number_of_bottles <= 0) {
		res.send(`<h1>You've been cut off, mate<a href="/"><br /><br />[Go Home]</a></h1>`)
	} else {
		res.send(`<h1>${req.params.number_of_bottles} Bottles of Beer on the Wall <br /> <a href="/${req.params.number_of_bottles-1}">Take One Down, Pass it Around</a></h1>`)
	}
})


//0 = back to main page
//button or a tag leading to dec page



//-1
// **END OF FIRST DRAFT **

//SECOND DRAFT BELOW

//numbers 99-0

// let beer = 99
// if(beer > 0) {
// 	//res.render('Home')
// 	res.send(`${req.params.number_of_bottles-1}`)
// } else {
// 	res.send(`${req.params.number_of_bottles} of Beer on the Wall`)
// }

//decrement -1 per click

// app.get('/', function(req, res) {
// 	//res.send('<h1>99 Bottles of beer on the wall</h1>');
// 	//res.render('Home')
// 	res.send(``)
// });

// app.get('/:number_of_bottles', (req, res) => {
//   res.send(`<h1>${req.params.number_of_bottles} Bottles of Beer on the Wall</h1>`)
// }) //-1



// **END OF SECOND DRAFT **




// app.get('/98', (req, res) => {
// 	res.send(`<h1>${req.params.number_of_bottles-1} Bottles of Beer on the Wall</h1>`)
// })
// Tell the app to listen on port 3000
app.listen(3000, function() {
 console.log('Listening on port 3000');
});