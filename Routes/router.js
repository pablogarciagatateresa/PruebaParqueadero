const express = require('express')
const path = require('path')

const placasController = require('../Controllers/ControllerPlaca')

const obtenerMotos = require("../Controllers/ControllerMoto")

const obtenerCarros = require("../Controllers/ControllerCarro")

//const index = require("../Views/")

const router = require('express').Router();


router.get("/", (request, response) =>{
   
    response.sendFile(path.resolve('Views', 'index.html'))
})


router.get("/Placas", (request, response) =>{
    response.sendFile(path.resolve('Views', 'placas.html'))
})

router.get("/ObtenerPlacas", placasController.ListarPlacas)
router.post("/CrearPlacas", placasController.AdicionarPlaca)    



module.exports=router;