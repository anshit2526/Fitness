<<<<<<< HEAD
const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');

const port = 80;

// Code for mongoose
main().catch(err => console.log(err));

// connecting with the instance of mongod running on the local system (Connecting with the database).
async function main() {
    mongoose.connect('mongodb://127.0.0.1:27017/contactFitness');

}
// Define mongoose schema
const contactSchema = new mongoose.Schema({
    name: String,
    age: String,
    gender: String,
    locality: String,
    phone_number: String,
    email: String

});


// Compiled schema into model.
const Contact = new mongoose.model('Contact', contactSchema);




// EXPRESS SPECIFIC STUFF
app.use('/static', express.static('static'));
app.use(express.urlencoded());


// PUG SEPCIFIC STUFF
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));


// ENDPOINTS
app.get('/', (req, res) => {
    res.status(200).render('index.pug');
});
app.get('/about', (req, res) => {
    res.status(200).render('about.pug');
});
app.get('/fitnessCalculator', (req, res) => {
    res.status(200).render('fitnessCalculator.pug');
});
app.get('/contact', (req, res) => {
    res.status(200).render('contact.pug');
});
app.post('/contact', (req, res) => {
  var myData = new Contact(req.body);
  myData.save().then(() => {
      res.send('This item has been saved to the database');
  }).catch(() => {
      res.status(400).alert("Item was not saved in the database");
  })
});
  
// app.get('/contact', (req, res) => {
//     const params = {};
//     res.status(200).render('contact.pug', params);
// });

// app.post('/contact', (req, res) => {
//     var myData = new Contact(req.body);
//     myData.save().then(() => {
//         res.send('This item has been saved to the database');
//     }).catch(() => {
//         res.status(400).alert("Item was not saved in the database");
//     })
//     // res.status(200).render('contact.pug');
// });


// SERVER STARTS
app.listen(port, () => {
    console.log(`Server is listening on http://localhost:${port}/`);
=======
const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');

const port = 80;

// Code for mongoose
main().catch(err => console.log(err));

// connecting with the instance of mongod running on the local system (Connecting with the database).
async function main() {
    mongoose.connect('mongodb://127.0.0.1:27017/contactFitness');

}
// Define mongoose schema
const contactSchema = new mongoose.Schema({
    name: String,
    age: String,
    gender: String,
    locality: String,
    phone_number: String,
    email: String

});


// Compiled schema into model.
const Contact = new mongoose.model('Contact', contactSchema);




// EXPRESS SPECIFIC STUFF
app.use('/static', express.static('static'));
app.use(express.urlencoded());


// PUG SEPCIFIC STUFF
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));


// ENDPOINTS
app.get('/', (req, res) => {
    res.status(200).render('index.pug');
});
app.get('/about', (req, res) => {
    res.status(200).render('about.pug');
});
app.get('/fitnessCalculator', (req, res) => {
    res.status(200).render('fitnessCalculator.pug');
});
app.get('/contact', (req, res) => {
    res.status(200).render('contact.pug');
});
app.post('/contact', (req, res) => {
  var myData = new Contact(req.body);
  myData.save().then(() => {
      res.send('This item has been saved to the database');
  }).catch(() => {
      res.status(400).alert("Item was not saved in the database");
  })
});
  
// app.get('/contact', (req, res) => {
//     const params = {};
//     res.status(200).render('contact.pug', params);
// });

// app.post('/contact', (req, res) => {
//     var myData = new Contact(req.body);
//     myData.save().then(() => {
//         res.send('This item has been saved to the database');
//     }).catch(() => {
//         res.status(400).alert("Item was not saved in the database");
//     })
//     // res.status(200).render('contact.pug');
// });


// SERVER STARTS
app.listen(port, () => {
    console.log(`Server is listening on http://localhost:${port}/`);
>>>>>>> 380d6c86bf746251d01d5cab80030ebc707f0a24
});