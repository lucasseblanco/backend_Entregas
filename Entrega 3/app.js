import express from 'express';

const app = express();
const PORT = 8080;

import fs from 'fs'

class Contenedor {
    constructor (nombreArchivo){
        this.rutaArchivo = `./${nombreArchivo}.txt`
    }

async getAll(){
    try{
        const archivo = await fs.promises.readFile(this.rutaArchivo)
        const elementos = JSON.parse(archivo)
        return elementos
}
        catch (error) {
            console.log(error)
            if(error.code === 'ENOENT'){
                await fs.promises.writeFile(this.rutaArchivo, 
                JSON.stringify([], null, 3));
                return [];
            }
        }
    }

    


    async getById(id){

    try{
        const elementos = await this.getAll()
        const elementoEncontrado = elementos.find((elemento) => elemento.id == id)

        if(!elementoEncontrado) return undefined

        return elementoEncontrado
    }
    catch(error){

    }
}
}

const productoContenedor = new Contenedor ("./productos");

app.get('/productos', (req,res)=>{
    productoContenedor.getAll()
        .then((productoContenedor)=>res.json(productoContenedor))
        .catch()
})
app.get('/productos-random', (req,res) =>{
    function randomId(min, max) {  
        return Math.floor(
          Math.random() * (max - min) + min
        )
      }
    productoContenedor.getById(randomId(1,6))
        .then((productoContenedor)=>res.json(productoContenedor))
        .catch()
} )



app.listen( PORT, () => console.log(`Server listening on PORT ${PORT}`));

