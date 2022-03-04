import Link from "next/link";
import styles from "../styles/CursoHome.module.css"

const CursoHome = ({cursoHome}) => {
  
  const {nombre, descripcion, imagen} = cursoHome[3]
  
  return (
    <section>
      <div className={`contenedor ${styles.grid}`}>
        <div>
        </div>
        <div>
          <h2 className={styles.heading_home}>{nombre}</h2>
          <p className={styles.contenido}>{descripcion}</p>
          <Link href="/listadocursos">
            <a className={styles.enlace}>Mas Información</a>
          </Link>
        </div>
      </div>
      
      <style jsx>{`
        section {
          padding: 5rem 0;
          margin-top: 10rem;
          background-image: linear-gradient(to right, rgb(0 0 0 / .65), rgb(0 0 0 / .7)), url(${imagen.url});
          background-size: cover;
          background-position: 50%;
        }
      `}</style>
      
    </section>
  );
};
export default CursoHome;