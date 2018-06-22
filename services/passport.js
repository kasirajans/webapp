const passport =require('passport');
const GoogleStrategy=require('passport-google-oauth20').Strategy;
const mongoose=require('mongoose');
const keys =require('../config/keys');
//pull model 
const User=mongoose.model('users');


// user from returend done fun is passed in this serilaisuser function
passport.serializeUser((user,done)=>{

    // this user.id is returned from mongo DB _ID key value s
    done(null,user.id);

});

passport.deserializeUser((id,done)=>{
User.findById(id).then(user=>{
    done(null,user);
});
});
// passport.authenticate google will invoke google stratergy 
passport.use(new GoogleStrategy(
    {
        clientID: keys.googleClientID,
        clientSecret: keys.googleClientSecret,
        /* //call back is using relative path "/auth/google" so google ginving redirect uri missmatch
        // here Google strategy giving error due to LB or proxy inbetween the webapp service and the browser.
        //We need to trust this proxy  */
        callbackURL: '/auth/google/callback',
        //This proxy will trust by google strategy and send redirt URI to https by passport
        proxy:true
    },(accessToken,refreshToken,profile,done)=>{

        
      User.findOne({googleId: profile.id})
      .then((existingUser)=>{
          // create promise which will retrun value and stored in a variable "exitingUser"
if (existingUser) {
    console.log('user already exists '+profile.displayName);
    //user is found without error so giving null and give existinguser this will end the 
    //waiting callback fun
    done(null, existingUser);
}
else{
    console.log('Adding user  '+profile.displayName);
    //create model instance and save it in db
    new User({googleId: profile.id}).save()
    //will retrun the user info which is saved in user varibale 
    .then(user => done(null, user));
}
    
});

    }
     
));