import { Contenedor } from "../containers/Containers";

const productContainer = new Contenedor ("productos");

productContainer.getAll()
.then(data => console.log({data}))
.catch(error => console.log({error}))




  productContainer.save({
    title:"prod 1",
    price: 300,
    thumbnail:"hthththth"
})
.then(data => console.log({data}))
.catch(error => console.log({error}))