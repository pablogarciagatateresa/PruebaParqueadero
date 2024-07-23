const carroModel = require("../Models/Carro");
const carros= require("../Models/Carro")


class Carros{

   static ListarCarros(req,res){

       var listado= carros.obtenerCarros


       if(listado)
        res.send(listado)
       
   }




  static AdicionarCarro(req,res){

     var placa = req.body.placa;
     
    var tiempo = req.body.tiempo;

    var placas_placaid = req.body.placas_placaid;

    var adicionar = carroModel.AdicionarCarro(placa, tiempo, placas_placaid)

    if(adicionar)

      res.send("Se adicionó el registro exitosamente")

    else

    res.send("No se adicionó ningun registro")


  }
  

  /*static EliminarPlaca(req, res){

     var carroId = req.body.carroId
     
     var placa = req.body.placa;
     
     var tiempo = req.body.tiempo;
 
     var placas_placaid = req.body.placas_placaid;
 


     var eliminar= placaModel.EliminarPlaca(carroId, placa, tiempo, placas_placaid)
  }*/ //Luego se haría


  static EditarPlaca(req, res){

    var placa = req.body.placa;
     
    var tiempo = req.body.tiempo;

    var placas_placaid = req.body.placas_placaid;


     var editar = placaModel.EditarPlaca(placa, tiempo, placas_placaid)

  }



}

