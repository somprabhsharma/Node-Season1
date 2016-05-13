'user strict';

module.exports = function(){
    const app = require('express')();
    
    app.set('env','development');
    app.set('views','../app/views');
    
    app.disabled('x-powered-by');
    
    return app;
};