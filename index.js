//insert/edit/delete actors first.

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const config = require('./app/config/db.config');

const app = express();

app.use(
    cors({
        origin: 'http://localhost:3000',
        credentials: true
    })
)

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

config.connect((err) => {
    if 
        (err) {console.log(err);}
    else    
        console.log('Database Connected!');

});


app.listen(3001, () => {
    console.log('Listening to Port 3001');
});

var routes = require('./app/routes/movie.routes');
routes(app);



// let loginData;

// app.get('*', function(req, res) {
//     res.sendFile(__dirname + '/movie-frontend/public/index.html');
// });

// app.post('/signup', (req, res) => { 
//     console.log(req.body);   
//   //  data.push(1, req.body.firstname, req.body.lastname, req.body.email, req.body.password);
//     config.query('INSERT INTO login(id, first_name, last_name, email, password) VALUES(' + "1,'" + req.body.firstname + "','" + req.body.lastname + "','"+req.body.email + "','" + req.body.password + "')" ,  (err, result) => {
//         if (err)
//             console.log(err);
//         else   
//             console.log('Data Stored');
//     })
// });

// app.post('/user', (req, res) => {
//     console.log(req.body);
// })



// app.post('/adminuser', (req, res) => {
//     //we have the data in req.body, need to call sql procedure to verify login.    
//     config.query("SELECT admin_name FROM admin where admin_name = '"+req.body.username + "'and password = '" + req.body.password + "';", (err, result, fields) => {
//         loginData = result[0].admin_name;
//         console.log(loginData);
//      })
// })




