
const conexion_db = require('../config/dbConfig')



const obtenerPublicacion = (req, res)=>{
    
    conexion_db.query('select * from publicacion_t', (err, result)=>{
        if(err){
            throw err
        
        }else {           
           
                console.log(result)
                res.send(result)
        }
    })
}
const obtenerPublicacionServicios = (req, res)=>{
    
    conexion_db.query('SELECT `id`,`publicacion`,`detalle`,`precio`,`zona`,`imagenurl`,`rubro`,`condicion`,`idusuario`,`tipo` FROM `publicacion_t` WHERE `tipo`= "servicio"; ', (err, result)=>{
        if(err){
            throw err
        
        }else {           
           
                console.log(result)
                res.send(result)
        }
    })
}
const obtenerPublicacionProductos = (req, res)=>{
    
    conexion_db.query('SELECT `id`,`publicacion`,`detalle`,`precio`,`zona`,`imagenurl`,`rubro`,`condicion`,`idusuario`,`tipo` FROM `publicacion_t` WHERE `tipo`= "producto"; ', (err, result)=>{
        if(err){
            throw err
        
        }else {           
           
                console.log(result)
                res.send(result)
        }
    })
}

const obtenerIdUltimaPublicacion = (req, res)=>{
    
    conexion_db.query('select max(id) as UId from publicacion_t', (err, result)=>{
        if(err){
            throw err
        
        }else {           
           
                console.log(result)
                res.send(result)
        }
    })
}

const agregarPublicacion = (req, res)=>{
   console.log("este es el rec body :", req.body)
   const {id, publicacion, detalle, precio, zona, imagenurl, rubro, condicion, idusuario, tipo} = req.body
    conexion_db.query('INSERT INTO `publicacion_t`(`id`, `publicacion`, `detalle`, `precio`, `zona`, `imagenurl`, `rubro`, `condicion`, `idusuario`, `tipo`) VALUES (?,?,?,?,?,?,?,?,?,?)', [id, publicacion, detalle, precio, zona, imagenurl, rubro, condicion, idusuario, tipo],(err, result)=>{
        if(err){
            throw err
        
        }else {           
           
                console.log(result)
                res.send("alta exitosa")
            }
        })
}

const agregarPerfil = (req, res)=>{
    const {id, email, telefono, urlavatar, acercaDe} = req.body
    conexion_db.query('INSERT INTO `usuario_t`(`id`, `email`, `telefono`, `urlavatar`, `acercaDe`) VALUES (?,?,?,?,?)', [id, email, telefono, urlavatar, acercaDe ], (err, result =>{
        if (err) {
            throw err
        } else {
            
                console.log(result);
                res.send("alta exitosa")
        }
    }))
}



const agregarImagen = (req, res) => {
    const {imagenurl} = req.body
    conexion_db.query('INSERT INTO `publicacion_t`(`imagenurl`) VALUES (?)' ([imagenurl]))
}


const borrarPublicacion = (req, res) => {
    const {id} = req.body
    conexion_db.query('DELETE FROM `publicacion_t` WHERE id = ?',[id] ,(err, result) =>{
if(err){
    throw err
}else{
    console.log(result)
    res.send('elemento borrado')
}
    })
    console.log('elemento borrado')
}

const editarPublicacion = (req, res) =>{
    const {id, publicacion, detalle} = req.body
    conexion_db.query('UPDATE `publicacion_t` SET `publicacion`=?,`detalle`=? WHERE id = ?',[publicacion, detalle, id],(err, result) =>{
        if(err){
            throw err
        }else{
            console.log(result)
            res.send('elemento editado')
        }
            })
            console.log('elemento editado')
        }






 const obtenerComentario = (req, res)=>{
        conexion_db.query('select * from comentario_t', (err, result)=>{
                 if(err){
                 throw err
                        
                 }else {           
                           
                                console.log(result)
                                res.send(result)
                        }
                    })
                }
                
const agregarComentario = (req, res)=>{
        console.log(req.body)
        const {id, comentario, id_publicacion} = req.body
        conexion_db.query('INSERT INTO `comentario_t`(`id`, `comentario`, id_publicacion`) VALUES (?,?,?)', [id, comentario, id_publicacion],(err, result)=>{
                        if(err){
                            throw err
                        
                        }else {           
                        
                                console.log(result)
                            }
                        })
                        res.send("alta exitosa")
                }
                
 const borrarComentario = (req, res) => {
        const {id} = req.body
        conexion_db.query('DELETE FROM `comentario_t` WHERE id = ?',[id] ,(err, result) =>{
        if(err){
         throw err
         }else{
         console.log(result)
         res.send('comentario borrado')
                }
                    })
                    console.log('comentario borrado')
                }
                
     const editarComentario = (req, res) =>{
        const {id, comentario, id_publicacion} = req.body
         conexion_db.query('UPDATE `comentario_t` SET `comentario`=?,`detalle`=? WHERE id = ?',[id, comentario, id_publicacion],(err, result) =>{
         if(err){
         throw err
           }else{
           console.log(result)
           res.send('elemento editado')
                        }
                        })
                      console.log('elemento editado')
               }
                
                
module.exports = {
                obtenerPublicacion,
                agregarPublicacion,
                borrarPublicacion,
                editarPublicacion,
                obtenerComentario,
                 agregarComentario,
                 borrarComentario,
                 editarComentario,
                 obtenerIdUltimaPublicacion,
                 agregarImagen,
                 obtenerPublicacionServicios,
                 obtenerPublicacionProductos,
                 agregarPerfil
            }
  
