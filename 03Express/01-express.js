const express = require('express')
const app = express()
const port = 3005
//Motor de plantillas 
app.set("views", __dirname + "/views");
app.set("view engine", "ejs")


//Middleware
app.use(express.static(__dirname+ '/public'));


/*app.get('/', (req, res) => {
    //Primero indicamos la vista y después un objeto
    res.render("index", {titulo: "mi titulo dinámico"})
})
app.get('/contacto', (req, res) => {
    res.render("contacto", {tituloContacto: "Estamos en contacto de manera dinámica"})
})
*/
//Llamadas a las rutas
app.use('/', require('./router/rutas'))
app.use('/pokemon', require('./router/pokemon'))

//Error controller
app.use((req,res)=> {
    //res.status(404).sendFile(__dirname+"/public/404.html")
    res.status(404).render("404", {
        titulo: "Error 404",
        descripcion: "Page Not Found"
    })
})


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })