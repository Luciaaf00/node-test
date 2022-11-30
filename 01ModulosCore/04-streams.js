var fs = require('fs'),
    readStream = fs.createReadStream('nombres.txt'),
    writeStream = fs.createWriteStream('nombres_copia.txt')
// Con el método pipe podremos comenzar a leer/escribir ficheros
readStream.pipe(writeStream)
readStream.on('data', function (chunk){ 
//Quiere decir que, mientras haya datos, haremos lo indicado en esa función anónima
    console.log( //Imprimir por consola lo siguiente
        'He leído: ',
        chunk.length,
        'caracteres.'
    )
})
//También podemos manejar el evento para que haga algo cuando finalice de leer
readStream.on('end', function (){ 
    console.log('Terminé de leer el archivo')
})