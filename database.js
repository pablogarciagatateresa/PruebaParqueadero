var mysql = require('mysql');

var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '',
    database: 'mydb'
  });

  connection.connect(function(error){
      if(error){
        console.log(error);
      }else{
        console.log("Conexión establecida")

      }

  });

  connection.end();

  module.exports=connection;
