const express = require('express');
const mongoose=require('mongoose');
const cookieSession= require('cookie-session');
const keys =require('./config/keys');
const passport=require('passport');

const app = express();
app.use(
    cookieSession({
        maxAge: 30*24*60*60*1000,
        keys: [keys.cookieKey]
    })
)

app.use(passport.initialize());
app.use(passport.session());

require('./models/User')

//just check
//Make sure files is excuted 
require('./services/passport');

mongoose.connect(keys.mongoURI);

require('./routes/authRoutes')(app);
const PORT = process.env.PORT || 3000;



app.listen(PORT);

