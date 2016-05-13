'use strict';

module.exports = function(){
    const that = {},
          include = global.include,
          debug = require('debug')('app:public.contoller'),
          jwt = require('jsonwebtoken'),
          config = include('/config/config');
    
    var secret = config.secret;
    that.login = (req,res,next)=>{
        debug('Inside login');
        jwt.sign({ userid: req.query.userid }, secret, { algorithm: 'HS256' }, function(err, token) {
            if(err){
                debug('Error Occured while generating token');
                res.json({
                    'msg' : 'Issue at backend. Contact administrator',
                });
            };
            debug(token);
            res.json({
                'msg' : 'login',
                'token' : token,
            });
        });
    };
    
    that.signup = (req,res,next)=>{
        debug('Inside signup');
        res.json({
            'msg' : 'signup',
        });
    };
    
    return that;
};