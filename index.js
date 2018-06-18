const express = require('express');
const app = express();
const passport =require('passport');
const GoogleStrategy=require('passport-google-oauth20').Strategy;
const keys =require('./config/keys');


passport.use(new GoogleStrategy(
    {
        clientID: keys.googleClientID,
        clientSecret: keys.googleClientSecret,
        callbackURL: '/auth/google/callback'
    },(accessToken,refreshToken,profile,done)=>{
        console.log('accessToken', accessToken);
        console.log('refresh token', refreshToken);
        console.log('profile', profile);

    }
));

const PORT = process.env.PORT || 3000;
// passport.authenticate google will invoke google stratergy 
app.get('/auth/google',passport.authenticate('google',{
scope:['profile','email']
})
);

// This time passport.authenticate google will see the code query string and will 
app.get('/auth/google/callback',passport.authenticate('google'));


app.listen(3000);

