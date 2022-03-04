import Image from 'next/image';
import Layout from '../../components/Layouts';
import styles from '../../styles/Producto.module.css';

const Producto = ({producto}) => {
  
  const { nombre, descripcion, precio, imagen } = producto[0];
  
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
            
            <form className={styles.formulario}>
              <label htmlFor="">Cantidad</label>
              <select>
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