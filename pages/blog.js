import Entrada from "../components/Entrada";
import Layout from "../components/Layout"
import styles from "../styles/Blog.module.css"

const blog = ({entradas}) => {
  
  return (
    <Layout pagina='Nosotros'>
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
    </Layout>
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