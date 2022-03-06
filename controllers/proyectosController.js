exports.proyectosHome = ( req, res ) =>{
    res.render('index', {
        nombrePagina: 'Proyectos'
    })
}

exports.formularioProyectos = ( req, res ) =>{
    res.render('nuevoProyecto', {
        nombrePagina: 'Nuevo Proyecto'
    })
}

exports.nuevoProyecto = ( req, res ) =>{
   const { nombre } = req.body;

   let errores = [];

   if(!nombre){
       errores.push({'msg':'Agrega un nombre al proyecto'});
       res.render('nuevoProyecto',{
           nombrePagina: 'Nuevo Proyecto',
           errores
       });
   }else{
       
   }
   
}