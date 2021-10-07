const express = require('express');
const morgan =  require('morgan');
const {router} = require('./routes/task.routes');
const path = require('path');
const app = express();
const {mongoose} = require('./database');

// Configuracion
app.set('port', process.env.PORT || 3000);

// Middlewares
app.use(morgan('dev'))
app.use(express.json())

// Routas
app.use('/api/task',router)

// static files
app.use(express.static(path.join(__dirname, 'public')))

// static the server
app.listen(app.get('port'), () =>{
    console.log(`Servidor activo en el puerto ${app.get('port')}`)
})