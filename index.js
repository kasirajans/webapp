const express = require('express');
const mongoose=require('mongoose');
const cookieSession= require('cookie-session');
const keys =require('./config/keys');
const passport=require('passport');

const app = express();

//app.use is adding middleware in app and modify the data before it pass it to route handler which is authRoutes.js
//if user have cookie session, it will decrypt and store it in req.sesion, which is passed to passport js
//user.id will be passed to cookie session and encryt stored in browser.
app.use(
    cookieSession({
        maxAge: 30*24*60*60*1000,
        keys: [keys.cookieKey]
    })
)
// Instructing passport to use cookies for authentication, so passport will check if user cookie is present in browser
app.use(passport.initialize());
app.use(passport.session());

require('./models/User')

//just check
//Make sure files is excuted 
require('./services/passport');

mongoose.connect(keys.mongoURI);

require('./routes/authRoutes')(app);
const PORT = process.env.PORT || 5000;



app.listen(PORT);

