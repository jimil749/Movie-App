const mysql = require('mysql');

var config = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'our_super_secret_password',
    database: 'movie_schema',
    multipleStatements: true    
});

// config = mysql.createConnection({multipleStatements: true});



module.exports = config;
