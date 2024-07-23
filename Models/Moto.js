const database= require("../database")




class motoModel{




    static obtenerMotos(){
    
    
        return new Promise(resolve => {
           
        database.query("select*from motos",[],(error ,result)=>{
    
        if(!error)
            resolve(result)
        })
    
        })
    
    }


    static AdicionarMotos(){

        
        
        database.query("INSERT INTO motos (Placa, Tiempo) VALUES(?, ?)", [Placa, Tiempo], (error, result) =>{
            if(!error)
              resolve(result)
        })
    
    }

        
    /*static EliminarMotos(){


        
      
        return new Promise(resolve=>{
            database.query("DELETE FROM motos () VALUES(//COLOCAR EL VALUE SEGÚN LA VISTA)"
        })
    }*/ //Se iba a terminar luego


    
    static ActualizarMotos(){


    
        return new Promise(resolve=>{
            database.query("UPDATE motos set Placa? Tiempo? where Id=?",[Placa, Tiempo], (error, result)=>{
                if(!error)
                    resolve(result)
            })
        })
    }
    


    }
    
    module.exports= motoModel;
    