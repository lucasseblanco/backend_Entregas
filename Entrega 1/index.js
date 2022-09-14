class usuario{
    constructor(id, nombre, apellido, mascotas = [], libros = []){
        this.id=id
        this.nombre=nombre,
        this.apellido=apellido,
        this.libros=libros,
        this.mascotas=mascotas
    }
    getFullName(){
        return 'Nombre completo de usuario' + " " + `${this.id}`+": " + `${this.nombre}  ${this.apellido}`;
        
    }

    addMascota(mascota){
        this.mascotas.push(mascota)
    }
    
    countMascotas(){
        return this.mascotas.length
    }

    addBook(titulo, autor){
        this.libros.push({titulo: titulo, autor: autor});

    }

    getBookNames(){
        const bookNames = []
        
        this.libros.forEach((libro)=> bookNames.push(libro.titulo))

        return bookNames
    }
    
}


const usuario1 = 
new usuario(
 '1',
 'Pedro',
 'Ramon', 
 ['Nala', 'Kiara'], 
 [{titulo: 'Into the wild', anio: 2007, autor: 'Anonimo'}] )

 console.log(usuario1.getFullName())


console.log( 'Cantidad de mascotas antes: ' + usuario1.countMascotas())
usuario1.addMascota("Panza")

console.log('Cantidad de mascotas ahora: ' + usuario1.countMascotas())

usuario1.addBook("Space Jam", "Warner")

const nombresLibros = usuario1.getBookNames();
console.log(nombresLibros)

console.log(usuario1)