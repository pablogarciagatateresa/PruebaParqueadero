const database= require("../database")




class placaModel{




    static obtenerPlacas(){
    
    
        return new Promise(resolve => {
           
        database.query("select*from placas",[],(error ,result)=>{
    
        if(!error)
            resolve(result)

        else{
            console.log("error")
        }
        })
    
        })
    
    }


    static AdicionarPlacas(CantidadMotos, CantidadCarros, CantidadTotalDisponible, FechaEntrada, FechaSalida){

        
         
        return new Promise(resolve=>{
           
            database.query("insert into placas (CantidadMotos, CantidadCarros, CantidadTotalDisponible, FechaEntrada, FechaSalida) VALUES(?,?, ?, ?, ?)", [CantidadMotos, CantidadCarros, CantidadTotalDisponible,FechaEntrada, FechaSalida], (error, result) =>{
            

            
                if(!error)
                resolve(result)
                
            else{
                console.log("error", error)
            }

            })
        
    })
}


    
    
    /*static EliminarPlacas(){


  
        return new Promise(resolve=>{
            database.query("DELETE FROM placas () VALUES(//COLOCAR EL VALUE SEGÚN LA VISTA)"
        })
  }*/ //Se iba a terminar luego


    
    static ActualizarPlacas(){

        var x = database.query("SELECT COUNT(Placa) FROM carros", (error, result) =>{
            if(!error)
                resolve(result)
        });

        
        var y = database.query("SELECT COUNT(Placa) FROM motos", (error, result) =>{
            if(!error)
                resolve(result)
        });

       var z = x.result+y.result
        
    
        return new Promise(resolve=>{
            database.query("UPDATE placas set CantidadCarros CantidadMotos CantidadTotalDisponible FechaEntrada? FechaSalida? where Id=?",[x.result, y.result, z.result, FechaEntrada, FechaSalida], (error, result)=>{
                if(!error)
                    resolve(result)
            })
        })
    


    }
}
    
    module.exports= placaModel;
    