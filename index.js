const Sobremesas = require("./controllers/sobremesasController.js");
const sobremesa = new Sobremesas();
const Entradas = require("./controllers/entradasController.js");
const entradas = new Entradas();
const Principais = require("./controllers/principaisControllers.js");
const principais = new Principais();
const express = require("express");
const app = express();
const porta = 3000;

app.use(express.json());


//entradas
app.get('/entradas/gluten', entradas.gluten)
app.get('/entradas/lactose', entradas.lactose)
app.get('/entradas/vegano', entradas.vegano)
app.get('/entradas/vegetariano', entradas.vegetariano)
//sobremesas
app.get('/sobremesas/gluten', sobremesa.gluten)
app.get('/sobremesas/lactose', sobremesa.lactose)
app.get('/sobremesas/vegano', sobremesa.vegano)
app.get('/sobremesas/vegetariano', sobremesa.vegetariano)
//principais
app.get('/principais/gluten', principais.gluten)
app.get('/principais/lactose', principais.lactose)
app.get('/principais/vegano', principais.vegano)
app.get('/principais/vegetariano', principais.vegetariano)




app.listen(porta, function(){
    console.log("Servidor aberto em: http://localhost:3000")
})