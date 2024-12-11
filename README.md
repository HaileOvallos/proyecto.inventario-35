# Proyecto Inventario
### inicio del proyecto
abrimos la terminal ennla carpeta del proyecto y hacemos el comando npm init
```
npm init
```

despues instalamos las dependencias
```

npm install express mongoose dotenv cors
```

despues instalamos dependencias de desarrollo
```

npm install --save-dev nodemon
```

abrimos IDE (Entorno de Desarrolo Integrado)
```

code .
```


creamos los archivos

```
touch index,js .env README.md .gitignore
```

dentro .gitignore escribimos lo siguiente
```

node_modules
.env
```
dentro de index.js pusimos el codigo:
```

```
- const express = require("express"): traemos express 
desde node_modules para poder usarlo
- const app = express(): creamos una instancia o una copia
de express para usarla en nuestra app.
- const app = express(): definimos el puerto que queremos usar
- app.set("port",PORT): configuramos el puesto en nuestra app
- app.get("/hola",:definimos una ruta y un verbo HTTP
- (req,res)=>{:creamos una funcion que tiene como parametros rep:request y res:response
- res.send("hola mundo"):enviamos la respuesta
- app.listen(PORT,()=>{: escucha el puerto y avisame en console.log
- console.log(`Listening port ${PORT}`): el mensaje de todo esta OK