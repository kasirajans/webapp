

app.get('/auth/google',passport.authenticate('google',{
    scope:['profile','email']
    })
    );
    
    // This time passport.authenticate google will see the code query string and will 
    app.get('/auth/google/callback',passport.authenticate('google'));
