import Image from 'next/image';
import Layout from "../../components/Layout"
import styles from '../../styles/EntradaId.module.css';
import { formatearFecha } from '../../helpers';

const EntradaBlog = ({entrada}) => {
  
  const {titulo, contenido, imagen, published_at} = entrada
  
  return (
    <Layout pagina={titulo}>
      <main className='contenedor'>
        <h3 className='heading'> {titulo }</h3>
        <article className={styles.entrada}>
          <Image priority="true" layout='responsive' width={600} height={400} src={imagen.url} alt={`imagen blog ${titulo}`} />
          <div className={styles.contenido}>
            <p className={styles.fecha}>{formatearFecha(published_at)}</p>
            <p className={styles.texto}> {contenido} </p>
          </div>
        </article>
      </main>
    </Layout>
  )
}

export async function getStaticPaths() {
  const url = `${process.env.API_URL}/blogs/`;
  const respuesta = await fetch(url);
  const entradas = await respuesta.json();
  const paths = entradas.map( entrada => ({
    params: {url: entrada.url}
  }))
  return {
    paths,
    fallback: false // False si son poca cantidad, true si son muchas y 
  }
}

export async function getStaticProps({params: {url}}) {
  const urlBlog = `${process.env.API_URL}/blogs?url=${url}`;
  const respuesta = await fetch(urlBlog);
  const entrada = await respuesta.json();
  return {
    props: {
      entrada: entrada[0]
    }
  }
}

// export async function getServerSideProps({query: {id}}) {
//   const url = `${process.env.API_URL}/blogs/${id}`;
//   const respuesta = await fetch(url);
//   const entrada = await respuesta.json();
//   return {
//     props: {
//       entrada
//     }
//   }
// }

export default EntradaBlog