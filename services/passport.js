const passport =require('passport');
const GoogleStrategy=require('passport-google-oauth20').Strategy;
const mongoose=require('mongoose');
const keys =require('../config/keys');
//pull model 
const User=mongoose.model('users');
// passport.authenticate google will invoke google stratergy 
passport.use(new GoogleStrategy(
    {
        clientID: keys.googleClientID,
        clientSecret: keys.googleClientSecret,
        callbackURL: '/auth/google/callback'
    },(accessToken,refreshToken,profile,done)=>{

        //create model instance and save it in db
      
        new User({googleId: profile.id}).save();

    }
));