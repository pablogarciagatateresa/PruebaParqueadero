const motos= require("../Models/Moto")


class Placas{

   static ListarPlacas(req,res){

       var listado= motos.obtenerPlacas();


       if(listado)
        res.send(listado)
       
   }




  static AdicionarMoto(req,res){

     var placa= req.body.placa;
     
    var tiempo = req.body.tiempo;

    var placa_id = req.placa_id.placa_id;

    var adicionar = motoModel.AdicionarMoto(placa, tiempo, placa_id)

    if(adicionar)

      res.send("Se adicionó el registro exitosamente")

    else

    res.send("No se adicionó ningun registro")


  }
  

  /*static EliminarMoto(req, res){

    var motoid = req.body.motoid

    
    var placa= req.body.placa;
     
    var tiempo = req.body.tiempo;

    var placa_id = req.placa_id.placa_id;

  

     var eliminar= motoModel.EliminarPlaca(motoid, placa, tiempo, placa_id)
  }*/ //Se terminaría luego


  static EditarMoto(req, res){

    
     
    var placa= req.body.placa;
     
    var tiempo = req.body.tiempo;



     var editar = placaModel.EditarPlaca(placa, tiempo)

  }



}

