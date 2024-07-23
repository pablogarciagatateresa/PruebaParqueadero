const placas= require("../Models/Placa")


class Placas{

   static ListarPlacas(req,res){

       var listado= placas.obtenerPlacas();


       if(listado)
        res.send(listado)
       
   }




  static AdicionarPlaca(req,res){

     var fechaentrada = req.body.fechaentrada;
     
    var fechasalida = null;

    var cantidadmotos = req.body.cantidadmotos;

    var cantidadcarros = req.body.cantidadcarros;

    var cantidadtotaldisponible = req.body.cantidadcarros;


    var adicionar = placas.AdicionarPlacas(cantidadmotos, cantidadcarros, cantidadtotaldisponible,fechaentrada, fechasalida)
     try{
    if(adicionar== true)
 
      res.send("Se adicionó el registro exitosamente")
     }

     catch(error){
      res.send(error)
     }
    //else

    //res.send("No se adicionó ningun registro") //Se comenta código para poder debuggear


  }
  

  /*static EliminarPlaca(req, res){

    var CantidadMotos = req.body.CantidadMotos

    var CantidadCarros = req.body.CantidadCarros

    var CantidadTotalDisponible = req.body.CantidadTotalDisponible


    var fechaentrada = req.body.fechaentrada;
     
    var fechasalida = req.body.fechasalida;


    

     var eliminar= placaModel.EliminarPlaca(CantidadCarros, CantidadMotos, CantidadTotalDisponible, fechaentrada, fechasalida)
  }*/ //Es para terminar luego


  static EditarPlaca(req, res){

    
    var CantidadMotos = req.body.CantidadMotos

    var CantidadCarros = req.body.CantidadCarros

    var CantidadTotalDisponible = req.body.CantidadTotalDisponible


    var fechaentrada = req.body.fechaentrada;
     
    var fechasalida = req.body.fechasalida;


     var editar = placas.EditarPlaca(CantidadCarros, CantidadMotos, CantidadTotalDisponible, fechaentrada, fechasalida)

  }



}

module.exports=Placas