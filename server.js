const { response } = require('express')
const express = require('express')
const { request } = require('http')
const app = express()
const path = require('path')

const publicacion_controlles = require('./controllers/publicacionControlles')

let port = 8080

app.use(express.json())
app.use(express.static('public'))

//get post put delete
app.get('/', publicacion_controlles.obtenerPublicacion)

app.get('/filtroServicios', publicacion_controlles.obtenerPublicacionServicios)

app.get('/filtroProductos', publicacion_controlles.obtenerPublicacionProductos)
//para obseter el ultimo id cargado
app.get('/ultimoId', publicacion_controlles.obtenerIdUltimaPublicacion)

app.post('/ingresarproducto', publicacion_controlles.agregarPublicacion)

app.post('/ingresarservicio', publicacion_controlles.agregarPublicacion)

app.delete('/borrar', publicacion_controlles.borrarPublicacion)

app.put('/editar', publicacion_controlles.editarPublicacion)

app.post('/SubirImagen', publicacion_controlles.agregarImagen)


app.get('/ingresarproducto', (request, response) => {
    response.sendFile(path.resolve(__dirname, 'ingresarproducto.html'))
})




app.listen(port,()=>{
    console.log('Escuchando puerto', port)
})
