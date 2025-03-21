const express = require ('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const database = require('./src/config/config');
const dotenv = require('dotenv');
dotenv.config();


 // import defined routes 
//const productRoutes = require('./src/Routes/products');
const userRoutes = require('./src/routes/auth.router'); 

// express instance 
const app = express();


// define port to running server 
const port = process.env.PORT || 3030;

// handle json data and url encoded data with limit
app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));

// // static server storage
// app.use('/uploads', express.static('uploads'));

//enable cors
app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true, 
  }));
// parse json data
app.use(express.json());
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: false }));



// // using routes 
// app.use('/api',apiRouter);
//app.use(productRoutes);
app.use('/api', userRoutes); 



//default route
app.get('/', (req, res) => {
    res.send('Hello World!');
});



// port listner
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
   
});