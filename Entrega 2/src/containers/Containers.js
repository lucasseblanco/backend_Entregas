import fs from 'fs'

class Contenedor {
    constructor (nombreArchivo){
        this.rutaArchivo = `./${nombreArchivo}.json`
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

    async save(elemento){
        try{
            const elementos = await this.getAll()

            const ultimoElementoId = elementos.length === 0 ? 1 : elementos[elementos.length - 1].id + 1

            elemento.id = ultimoElementoId
            elemento.title = "producto " + ultimoElementoId

            elementos.push(elemento)

            await fs.promises.writeFile(this.rutaArchivo, JSON.stringify(elementos, null, 3));            

            return elemento.id

        } catch (error){
            console.log(error)
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

async deteleteById(id){
    try{
        const elementos = await this.getAll()
        const elementoEncontrado = elementos.find((elemento) => elemento.id == id)

        if(!elementoEncontrado) return "No hay"

        const elementoFiltrado = elementos.filter((elemento) => elemento.id !=id );

        await fs.promises.writeFile(
        this.rutaArchivo, 
        JSON.stringify(elementoFiltrado, null, 3));

    }
    catch (error) {
        console.log(error)
    }
}

    async deleteAll(){
        try{
            await fs.promises.writeFile(this.rutaArchivo, JSON.stringify([], null, 3 ));
        }
        catch (error) {
            console.log(error)
            
        }
    }

}

const productoContenedor = new Contenedor ("productos");

productoContenedor.getAll()
.then(data => console.log({data}))
.catch(error => console.log({error}))

/*productoContenedor.save({
    price: 300,
    thumbnail:"hthththth"
})
.then(data => console.log({data}))
.catch(error => console.log({error}))*/

productoContenedor.getById(2)
.then(data => console.log({data}))
.catch(error => console.log({error}))

productoContenedor.deteleteById(1)
.then(data => console.log({data}))
.catch(error => console.log({error}))

//productoContenedor.deleteAll()
//.then(data => console.log({data}))
//.catch(error => console.log({error}))