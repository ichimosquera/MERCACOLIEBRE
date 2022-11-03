const express = require('express')
const app = express()
const path = require('path')

app.use(express.static('public'));

let PORT = process.env.PORT || 3000;

app.listen(PORT,()=>console.log('Servidor corriendo en puerto' + PORT))

app.use(express.static('public'));

app.get('/', function (req, res) {  
    res.sendFile(path.resolve('./views/home.html'));
  });

  app.get('/register', function (req, res) {
    res.sendFile(path.resolve('./views/register.html'));
  });

  app.get('/login', function (req, res) {
    res.sendFile(path.resolve('./views/login.html'));
  });


