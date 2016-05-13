'use strict';

require('./config/global');
const include = global.include;
const config = include('/config/config');
const debug = require('debug')('app:app');
const port = process.env.PORT || config.port;

var app = require('express')();

app.use(require('express').static('./public'));

include('/middleware/base.middleware')(app);

include('/app/routes/public.route')(app);

include('/app/routes/errorHandler')(app);

app.listen(port,function(err){
    if(err) throw err;
    debug('Server running in '+app.get('env')+' environment and listening on port: '+port);
});
