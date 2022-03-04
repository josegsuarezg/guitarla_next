import Image from "next/image"
import Layouts from "../components/Layouts"
import styles from '../styles/Nosotros.module.css'

const nosotros = () => {
  return (
    <Layouts pagina='Nosotros'>
      <main className="contenedor">
        <h2 className="heading">Nosotros</h2>
        <div className={styles.contenido}>
          <Image layout="responsive" priority width={600} height={450} src="/img/nosotros.jpg" alt="imagen nosotros" />
          <div className="texto">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi nam, expedita incidunt accusantium ratione facere nisi, beatae enim ullam debitis necessitatibus dolores. Reprehenderit iusto dolores vitae voluptate eligendi eum, expedita, repudiandae corrupti voluptatem nobis eos in inventore iure eveniet doloribus ex deserunt, tempora quidem nesciunt. Quos dolore voluptas assumenda libero.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi nam, expedita incidunt accusantium ratione facere nisi, beatae enim ullam debitis necessitatibus dolores. Reprehenderit iusto dolores vitae voluptate eligendi eum, expedita, repudiandae corrupti voluptatem nobis eos in inventore iure eveniet doloribus ex deserunt, tempora quidem nesciunt. Quos dolore voluptas assumenda libero.</p>
          </div>
        </div>
      </main>
    </Layouts>
  )
}

export default nosotros