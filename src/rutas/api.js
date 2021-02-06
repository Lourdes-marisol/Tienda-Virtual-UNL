const bodyParser = require('body-parser');
const router = require('express');
const bodyParser = require('body-parser');

const apiRutas = require('../rutas/api');
const app = express();

require('./db');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));
app.get('/api', apiRutas);

app.listen(4000, ()=>{
    console.log('Servido inciado');
});