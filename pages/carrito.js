import { useState, useEffect } from 'react';
import Image from 'next/image';
import Layout from '../components/Layout';
import styles from '../styles/Carrito.module.css';

const Carrito = ({carrito, actualizarCantidad, eliminarProducto}) => {
  const [total, setTotal] = useState(0)
  
  useEffect(() => {
    const calculoTotal = carrito.reduce( (total, producto) => total + (producto.cantidad * producto.precio), 0)
    
    setTotal(calculoTotal);
  }, [carrito])
  
  
  return (
    <Layout pagina="Carrito de Compras">
        <h1 className="heading">Carrito</h1>
      <main className={`contenedor ${styles.contenido}`}>
        <div className={styles.carrito}>
          <h2 className='heading'>Articulos</h2>
          {carrito.length === 0 
            ? "Carito Vacio"
            : carrito.map(producto => (
            <div
              key={producto._id}
              className={styles.producto}
            >
              <div>
                <Image
                  layout="responsive"  
                  width={220} 
                  height={480} 
                  src={producto.imagen} 
                  alt="guitarra"
                />
              </div>
              <div>
                <p className={styles.nombre}>{producto.nombre}</p>
                <div className={styles.cantidad}>
                  <p>Cantidad: </p>
                  <select
                    value={producto.cantidad}
                    className={styles.select}
                    onChange={e => actualizarCantidad({
                      cantidad: e.target.value,
                      id: producto._id
                    })}
                  >
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                  </select>
                </div>
                <p className={styles.precio}><span>${producto.precio}</span></p>
                <p className={styles.subtotal}>Subtotal: <span>${producto.precio * producto.cantidad}</span></p>
              </div>
              <button
                type='button'
                className={styles.eliminar}
                onClick={() => eliminarProducto(producto._id)}
              >X</button>
            </div>
          ))}
        </div>
        <div className={styles.resumen}>
          
          { total > 0 ? (
            <div>
              <h3>Resumen del Pedido</h3>
              <p>Total a Pagar: ${total}</p>
            </div>
          ) : <p>No hay productos en el Carrito</p>}
          
        </div>
      </main>
    </Layout>
  )
}

export default Carrito