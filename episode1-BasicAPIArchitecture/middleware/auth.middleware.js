'use strict';

module.exports =  function(req,res,next){
    const jwt = require('jsonwebtoken'),
          include = global.include,
          debug = require('debug')('app:auth.middleware'),
          config = include('/config/config');
    
    var secret = config.secret;
    var token = req.query.token || req.body.token || req.headers['x-access-token'];
    
    if(token){
        jwt.verify(token, secret, function(err, decoded) {
            if(err){
                debug('Invalid Token');
                res.json({
                    'msg' : 'Authentication Failed',
                });
            }
            debug(decoded);
            next();
        });
    }else{
        debug('No Token Provided');
        res.json({
            'msg' : 'No Token Provided',
        });
    }
            
    
};