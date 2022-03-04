import Layout from '../components/Layout';
import Listado from '../components/Listado';
import CursoHome from '../components/CursoHome';
import ListadoBlog from '../components/ListadoBlog';

export default function Home({guitarras, cursoHome, entradas}) {
  return (
    <Layout 
      pagina="Inicio"
      guitarra={guitarras[3]}
    >
      <main className='contenedor'>
        <h1 className='heading'>Nuestra Colección</h1>
        <Listado 
          guitarras={guitarras} 
        />
      </main>
      <CursoHome 
        cursoHome={cursoHome}
      />
      <section className='contenedor'>
        <ListadoBlog 
          entradas={entradas}
        />
      </section>
    </Layout>
  );
}

export async function getServerSideProps() {
  const urlGuitarras = `${process.env.API_URL}/guitarras?_limit=6`;
  const urlCurso = `${process.env.API_URL}/listadocursos`;
  const urlBlog = `${process.env.API_URL}/blogs?_limit=3&_sort=created_at:desc`;
  
  const [resGuitarras, resCurso, resBlog] = await Promise.all([
    fetch(urlGuitarras),
    fetch(urlCurso),
    fetch(urlBlog)
  ]);
  
  const [guitarras, cursoHome, entradas] = await Promise.all([
    resGuitarras.json(),
    resCurso.json(),
    resBlog.json()
  ]);

  return {
    props: {
      guitarras,
      cursoHome,
      entradas
    }
  };
}
