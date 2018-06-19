const express = require('express');
const mongoose=require('mongoose');
const app = express();
const keys =require('./config/keys')
require('./models/User')

//Make sure files is excuted 
require('./services/passport');

mongoose.connect(keys.mongoURI);

require('./routes/authRoutes')(app);
const PORT = process.env.PORT || 3000;



app.listen(3000);

