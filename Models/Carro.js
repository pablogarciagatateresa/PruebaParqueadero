const database= require("../database")





class carroModel{




    static obtenerCarros(){
    
    
        return new Promise(resolve => {
           
        database.query("select*from carros",[],(error ,result)=>{
    
        if(!error)
            resolve(result)

        else 
        console.log("no funcionó")
        })
        
    
        })
    
    }


    static AdicionarCarros(){


            return new Promise(resolve=>{
                  
                    database.query("INSERT INTO carros (Placa, Tiempo) VALUES(?, ?)", [Placa, Tiempo], (error, result) =>{
                        if(!error)
                          resolve(result)
                    })
            
            
            })
        }
        


        /*static EliminarCarros(){


        
            return new Promise(resolve=>{
                database.query("DELETE FROM carros (Placa, Tiempo) VALUES(?, ?)", [Placa, Tiempo], (error, result) =>{
                    if(!error)
                      resolve(result)
                })
            })
        
        }*/  //Se iba a terminar luego

        
        static ActualizarCarros(){

    
            return new Promise(resolve=>{
                database.query("UPDATE carros set Placa? Tiempo? where Id=?",[Placa, Tiempo], (error, result)=>{
                    if(!error)
                        resolve(result)
                })
            })
        }
        
    }
    
    
    
    module.exports= carroModel;
    