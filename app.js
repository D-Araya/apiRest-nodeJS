// hola mundo de express
require("dotenv").config() // dotenv: incorporar, a que funcionen bien las variables de entorno en todo nuestro ecositema (APP)
const express = require("express")  //pemite levntar un servicio WEB
const cors = require("cors") // cors: permite evitar el error de origen cruzado entre los navegadores
const app = express() // creando app

app.use(cors()) //que la app use la libreria de cors

const port = process.env.PORT || 3000 // lo manejaremos con las variables de entorno

app.listen(port, () => {   // Ok app, comienza a escuchar por el puerto 3000
    console.log(`La app esta lista por http://localhost:${port}`)   // si se ejecuta bien , enviamos este mensaje  
})
   