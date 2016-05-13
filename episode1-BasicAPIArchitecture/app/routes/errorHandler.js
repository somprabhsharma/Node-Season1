'use strict';

module.exports = function(app){
  const debug = require('debug')('app:errorHandler');
  // catch 404 and forward to error handler
  app.use((req, res, next)=>{
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
  });
  
  // error handlers
  
  // development error handler
  // will print stacktrace
  if (app.get('env') === 'development') {
    app.use((err, req, res, next)=>{
      res.status(err.status || 500);
      res.send( JSON.stringify({
        message: err.message,
        error: err,
      }));
    });
  }
  
  // production error handler
  // no stacktraces leaked to user
  app.use((err, req, res, next)=>{
    res.status(err.status || 500);
    res.send(JSON.stringify({
        message: err.message,
        error: {},
      }));
  });  
};
