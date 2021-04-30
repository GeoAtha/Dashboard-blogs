const express = require('express');
const morgan = require('morgan');
const app = express();
const bodyParser = require('body-parser');
const mongoose  = require('mongoose');
const blogRoutes = require('./routes/blogRoutes');

//mongodb connection
const DBURI ='mongodb+srv://george:123n123n@cluster0.5kdgz.mongodb.net/node-tuts?retryWrites=true&w=majority'
//connection to mongodb
mongoose.connect(DBURI , {useNewUrlParser : true , useUnifiedTopology: true})
    .then(result =>{
        app.listen(3000);
        console.log("Conected to MongoDB");
        })
    .catch(err => console.log(err));

//static file
app.use(express.static('./public'));

//set view tamplate
app.set('view engine' , 'ejs');

//middleware
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

//blog routes
app.use('/dashboard',blogRoutes);