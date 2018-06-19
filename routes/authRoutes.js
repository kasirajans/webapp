
const passport=require('passport');

module.exports=(app)=>{
app.get('/auth/google',passport.authenticate('google',{
    scope:['profile','email']
    })
    );
    
    // This time passport.authenticate google will see the code query string and will 
    app.get('/auth/google/callback',passport.authenticate('google'));


    app.get('/api/logout',(req,res)=>{

        //passport will automaticall detect the logout function and clear user session
req.logout();
res.send(req.user);

    });

    app.get('/api/current_user',(req,res)=>{

        res.send(req.user);
    });
};