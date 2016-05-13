'use strict';

module.exports = function(app){
    const include = global.include,
          publicController = include('/app/controllers/public.controller')(),
          authMiddleware = include('/middleware/auth.middleware');
    app.get('/',function(req,res){
        res.json({
            'msg':'hello world',
        });
    });
    
    app.get('/login',publicController.login);
    
    app.post('/signup',publicController.login);
    
    app.use(authMiddleware);
    
    
}