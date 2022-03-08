import { useState } from 'react';
import Image from 'next/image';
import Layout from '../../components/Layout';
import styles from '../../styles/Producto.module.css';

const Producto = ({producto, agregarCarrito}) => {
  
  const [cantidad, setCantidad] = useState(1)
  
  const { nombre, descripcion, precio, imagen, id } = producto[0];
  
  const handleSubmit = e => {
    e.preventDefault();
    
    if( cantidad < 1) {
      alert("Cantidad no Valida")
      return;
    }
    
    const guitarraSeleccionada = {
      id,
      imagen: imagen.url,
      nombre,
      precio,
      cantidad
    }
    
    agregarCarrito(guitarraSeleccionada)
    
  }
  
  return (
    <Layout pagina={`Guitarra ${nombre}`}>
      <div className={styles.container}>
        <main className={styles.card}>
          <Image 
            priority="true"
            layout='responsive' 
            width={290} 
            height={600} 
            src={imagen.url} 
            alt={`Imagen de guitarra ${nombre}`} 
          />
          
          <div className={styles.contenido}>
            <h3 className="heading">{nombre}</h3>
            <p className={styles.texto}>{descripcion}</p>
            <p className={styles.precio}>${precio}</p>
            
            <form 
              className={styles.formulario}
              onSubmit={handleSubmit}
            >
              <label htmlFor="">Cantidad</label>
              <select
                value={cantidad}
                onChange={e => setCantidad(parseInt(e.target.value))}
              >
                <option value="">-- Selecciones --</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </select>
              <input
                type="submit"
                value="Agregar al Carrito"
              />
            </form>
          </div>
        </main>
      </div>
    </Layout>
  );
};


export async function getServerSideProps({query:{url}}) {
  const urlApi = `${process.env.API_URL}/guitarras/?url=${url}`
  const respuesta = await fetch(urlApi);
  const producto = await respuesta.json();
  
  return {
    props: {
      producto
    }
  }
}

export default Producto;