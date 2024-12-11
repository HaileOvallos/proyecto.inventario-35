//trae express para usarlo
const express = require("express") 

//crea una variable para usar express
const app = express();

//definimos el puerto
PORT = 3000;

//configuramos el puerto
app.set("port",PORT);

//definimos una ruta y un verbo HTTP, (req.res) creamos una funcion que tiene como parametros rep:request y res:response
app.get("/hola",(req,res)=>{
    res.send("hola mundo")
})

app.listen(PORT,()=>{
    console.log(`Listening port ${PORT}`)
})