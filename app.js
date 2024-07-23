const express = require('express');
const mydb = require('./database');
const app = express();
const router= require("./Routes/router");
const bodyparser= require("body-parser");
app.use(bodyparser.json())
app.use(bodyparser.urlencoded({extended:true}))



app.use(router)


app.listen(3000, () => {
    console.log('Servidor iniciado en http://localhost:3000');
});
