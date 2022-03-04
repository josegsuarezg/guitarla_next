import Image from "next/image";
import styles from "../styles/Nosotros.module.css"
import {formatearFecha} from "../helpers";



const Curso = ({curso}) => {
  const {imagen, nombre, descripcion, fecha_inicio, fecha_fin, url, id} = curso;
  
  return (
    <section className={`contenedor ${styles.principal}`}>
      <div className={styles.contenido}> 
        <Image 
          priority="true"
          layout="responsive"
          width={700}
          height={320}
          src={imagen.url}
          alt={`Imagen entrada ${nombre}`}
        />
        
        <div>
          <h2 className={styles.titulo}>{nombre}</h2>
          <p>{descripcion}</p>
          <p className={styles.fechas}>Inicio: <span>{formatearFecha(fecha_inicio)}</span></p>
          <p className={styles.fechas}>Fin: <span>{formatearFecha(fecha_fin)}</span></p>
          
          <input className={styles.enlace} type="submit" value="Inscribirse al Curso" />
        </div>
      </div>
    </section>
  );
};
export default Curso;