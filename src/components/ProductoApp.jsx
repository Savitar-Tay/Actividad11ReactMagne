import estilos from "./productoApp.module.css";

import pantalon1 from "../assets/pantalon1.jpg";
import pantalon2 from "../assets/pantalon2.jpg";
import pantalon3 from "../assets/pantalon3.jpg";

function ProductoApp() {

    const productos = [
        {
            id: 1,
            nombre: "Jeans Azul",
            precio: 120,
            imagen: pantalon1
        },
        {
            id: 2,
            nombre: "Pantalón Cargo",
            precio: 150,
            imagen: pantalon2
        },
        {
            id: 3,
            nombre: "Pantalón Negro",
            precio: 130,
            imagen: pantalon3
        }
    ];

    return (
        <div className={estilos.contenedor}>

            <h1>Pantalones de Moda</h1>

            <div className={estilos.productos}>

                {productos.map((producto) => (
                    <div key={producto.id} className={estilos.tarjeta}>

                        <img
                            src={producto.imagen}
                            alt={producto.nombre}
                        />

                        <h2>{producto.nombre}</h2>

                        <p>Precio: Bs {producto.precio}</p>

                        <button>Comprar</button>

                    </div>
                ))}

            </div>

        </div>
    );
}

export default ProductoApp;