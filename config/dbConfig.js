const mysql = require('mysql')



//base original
var conexion_db = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '',
    database : 'baseproyecto'
  });

//base heroku
// var conexion_db = mysql.createConnection({
//     host     : 'us-cdbr-east-03.cleardb.com',
//     user     : 'b93c7478471bd9',
//     password : '0a9840ad',
//     database : 'heroku_25749191c95c6d8'
//   });
  
  conexion_db.connect(err =>{
      if(err){
          console.log(err)
      }else{
          console.log('conexion exitosa Proyecto Final')
      }
  })
  
  

  module.exports = conexion_db
  