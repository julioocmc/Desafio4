let productosArray = [
    {
      "title": "Escuadra",
      "price": 123.45,
      "thumbnail": "https://cdn3.iconfinder.com/data/icons/education-209/64/ruler-triangle-stationary-school-256.png",
      "id": 1
    },
    {
      "title": "Calculadora",
      "price": 234.56,
      "thumbnail": "https://cdn3.iconfinder.com/data/icons/education-209/64/calculator-math-tool-school-256.png",
      "id": 2
    },
    {
      "title": "Globo Terráqueo",
      "price": 345.67,
      "thumbnail": "https://cdn3.iconfinder.com/data/icons/education-209/64/globe-earth-geograhy-planet-school-256.png",
      "id": 3
    }
]

class Contenedor {
    constructor(arrayProductos) {
        this.arrayProductos = arrayProductos
    }
        
    static idContador = productosArray.length + 1

    async getAll() {
        try {
           let contenido = this.arrayProductos
           return await contenido
        } catch (e) {
        }
    }

    async getById(id) {
        try {
            let contenido = this.arrayProductos
            let objetoEncontrado = contenido.find(i => i.id === id)
            if (objetoEncontrado) {
                console.log("El ID pertenece al objeto: ${objetoEncontrado.title}")
                return objetoEncontrado
            } else {
                console.log("El ID no pertenece a ningun objeto")
                return null
            }

        } catch (err) {
            console.log("${err}: Producto no encontrado");
        }
    }

    async postProduct(producto) {
        try {
            let id = Contenedor.idContador
            let nuevoProducto = {...producto , id : id }
            this.arrayProductos.push(nuevoProducto)
            console.log("Objeto con id : ${nuevoProducto.id} agregado")
            return nuevoProducto
        } catch (err) {
            console.log("No se pudeo agregar el objeto: ${err}")
        }
    }

    async putProduct(id, nuevoProducto) {
        try {
            let contenido = this.arrayProductos
            contenido.forEach(producto => {
             if(producto.id === id) {
                producto = nuevoProducto
             }
            })
            console.log("Objeto con id : ${nuevoProducto.id} modificado")
        } catch (err) {
            console.log("No se encontro el objeto con ese ID : ${err}")
        }
    }

    async deleteById(id) {
        try {
            let contenido = this.arrayProductos
            let contenidoFiltrado = contenido.filter(i => i.id != id)
            this.arrayProductos = contenidoFiltrado
            console.log("Objeto con id : ${id} eliminado")
        } catch (err) {
            console.log("Hubo un error en recuperar el objeto por ID : ${err}")
        }
    }
}

const contenedor = new Contenedor(productosArray)

module.exports = contenedor;