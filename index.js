const express = require('express');
const app = express();

//Make sure files is excuted 
require('./services/passport');


const PORT = process.env.PORT || 3000;
// passport.authenticate google will invoke google stratergy 


app.listen(3000);

