'use strict';

module.exports =  function(app){
    
    const cors = require('cors');
    const morgan = require('morgan');
    const bodyParser = require('body-parser');
    
    app.use(cors());
    
    app.use(bodyParser.json({
        strict : true,
    }));
    
    app.use(bodyParser.urlencoded({
        extended : true,
    }));
    
    app.use(morgan('dev'));
    
}