import Entrada from "../components/Entrada";
import Layouts from "../components/Layouts"
import styles from "../styles/Blog.module.css"

const blog = ({entradas}) => {
  
  return (
    <Layouts pagina='Nosotros'>
      <main className="contenedor">
        <h1 className="heading">Blog</h1>
        
        <div className={styles.entradas}>
          {entradas.map(entrada => (
            <Entrada 
              key={entrada.id}
              entrada={entrada}
            />
          ))}
        </div>
      </main>
    </Layouts>
  )
}

export async function getServerSideProps() {
  const url = `${process.env.API_URL}/blogs`;
  const respuesta = await fetch(url);
  const entradas = await respuesta.json();
  
  return {
    props: {
      entradas
    }
  }
}

export default blog