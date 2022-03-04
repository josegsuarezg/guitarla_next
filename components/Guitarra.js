import Image from 'next/image';
import Link from 'next/link';
import styles from '../styles/Guitarra.module.css'

const Guitarra = ({guitarra}) => {
  
  const { nombre, precio, descripcion, imagen, url } = guitarra;
  
  return (
    <div className={styles.card}>
      <Image
        priority="true"
        layout="responsive"
        width={250}
        height={570}
        src={imagen.url}
        alt={`Guitarra ${nombre}`}
      />
      <div className={styles.contenido}>
        <h3>{nombre}</h3>
        <p className={styles.contenido_p}>{descripcion}</p>
        <p className={styles.precio}>${precio}</p>
        <Link href={`/guitarras/${url}`}>
          <a className={styles.enlace}>Ver Producto</a>
        </Link>
      </div>
    </div>
  );
};
export default Guitarra;