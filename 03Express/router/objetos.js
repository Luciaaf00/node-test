const express = require('express');
const router = express.Router();
const Objetos = require('../models/objetos');

router.get('/', async (req, res) => {
    try {
        //Le pondremos arrayPokemonDB para diferenciar
        //los datos que vienen de la base de datos
        //con respecto al arrayPokemon que tenemos EN LA VISTA
        const arrayObjetosDB = await Objetos.find();
        console.log(arrayObjetosDB);
        res.render("objetos", { 
            arrayObjetos: arrayObjetosDB
        })
    } catch (error) {
        console.error(error)
    }
})
module.exports = router;
router.get('/crear_objetos', (req, res) => {
    res.render('crear_objetos'); //nueva vista que llamaremos Crear
 })
 
router.post('/', async (req, res) => {
    const body = req.body //Gracias al body parser, de esta forma
    //podremos recuperar todo lo que viene del body
    console.log(body) //Para comprobarlo por pantalla
    try {
        const arrayObjetos = new Objetos(body) //Creamos un nuevo Entrenador, gracias al modelo
        await arrayObjetos.save() //Lo guardamos con .save(), gracias a Mongoose
        res.redirect('/objetos') //Volvemos al listado
    } catch (error) {
        console.log('error', error)
    }
})
 
router.get('/:id', async(req, res) => { //El id vendrá por el GET (barra de direcciones)
    const id = req.params.id //Recordemos que en la plantilla "pokemon.ejs" le pusimos
    //a este campo pokemon.id, por eso lo llamados con params.id
    try {
        const objetosDB = await Objetos.findOne({ _id: id }) //_id porque así lo indica Mongo
							//Esta variable “Pokemon” está definida arriba con el “require”
        //Buscamos con Mongoose un único documento que coincida con el id indicado
        console.log(objetosDB) //Para probarlo por consola
        res.render('detalle_objetos', { //Para mostrar el objeto en la vista "detalle", que tenemos que crear
            objetos: objetosDB,
            error: false
        })
    } catch (error) { //Si el id indicado no se encuentra
        console.log('Se ha producido un error', error)
        res.render('detalle_objetos', { //Mostraremos el error en la vista "detalle"
            error: true,
            mensaje: 'Objetos no encontrado!'
        })
    }
})
router.delete('/:id', async (req, res) => {
    const id = req.params.id;
    console.log('id desde backend', id)
    try {
        //En la documentación de Mongoose podremos encontrar la
        //siguiente función para eliminar
        const objetosDB = await Objetos.findByIdAndDelete({ _id: id });
        console.log(objetosDB)
        // https://stackoverflow.com/questions/27202075/expressjs-res-redirect-not-working-as-expected
        // res.redirect('/pokemon') //Esto daría un error, tal y como podemos ver arriba
        if (!objetosDB) {
            res.json({ 
                estado: false,
                mensaje: 'No se puede eliminar el Objeto.'
            })
        } else {
            res.json({
                estado: true,
                mensaje: 'Objeto eliminado.'
            })
        } 
    } catch (error) {
        console.log(error)
    }
})

router.put('/:id', async (req, res) => {
    const id = req.params.id;
    const body = req.body;
    console.log(id)
    console.log('body', body)
    try {
        const objetosDB = await Objetos.findByIdAndUpdate(
            id, body, { useFindAndModify: false }
        )
        console.log(objetosDB)
        res.json({
            estado: true,
            mensaje: 'Objetos editado'
        })
    } catch (error) {
        console.log(error)
        res.json({
            estado: false,
            mensaje: 'Problema al editar el Objetos'
        })
    }
})