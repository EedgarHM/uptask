const { Router, response} = require('express');
const router = new Router();

const {proyectosHome, nuevoProyecto, formularioProyectos } = require("../controllers/proyectosController");


module.exports = function(){
    router.get('/', proyectosHome);
   
    router.get('/nuevo-proyecto', formularioProyectos)
    router.post('/nuevo-proyecto', nuevoProyecto)

    return router;
    
}