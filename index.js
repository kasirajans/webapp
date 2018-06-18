const express = require('express');
const mongoose=require('mongoose');
const app = express();
const keys =require('./config/keys')

//just check
//Make sure files is excuted 
require('./services/passport');

mongoose.connect(keys.mongoURI);

require('./routes/authRoutes')(app);
const PORT = process.env.PORT || 3000;
// passport.authenticate google will invoke google stratergy 


app.listen(3000);

