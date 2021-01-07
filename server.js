const express = require('express')
const app = express()
// const http = require('http').Server(app)
// const io = require('socket.io')(http)

let port = 8080

app.use(express.static('public'))

app.get('/', (req, res)=>res.send())



app.listen(port,()=>{
    console.log('Escuchando puerto', port)
})


// http.listen(puerto, ()=>{
//     console.log(`Escuchando puerto: ${puerto}`)
//   })