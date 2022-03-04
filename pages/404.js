import Link from "next/link";
import styles from "../styles/NoEncontrado.module.css";

const NoEncontrado = () => {
  return (
    <div className={styles.no_encontrado}>
      <h1 className="heading">Página No Encontrada</h1>
      <Link href="/">
        <a className={styles.enlace}>Volver al Inicio</a>
      </Link>
    </div>
  );
};

export default NoEncontrado;