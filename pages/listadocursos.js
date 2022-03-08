import Layout from "../components/Layout";
import Curso from "../components/Curso";

const ListadoCursos = ({cursos}) => {
  return (
    <Layout>
      <main className="contenedor">
        <h2 className="heading">Cursos Disponibles</h2>
        <div>
          {cursos.map(curso => (
            <Curso
              key={curso._id}
              curso={curso} 
            />
          ))}
        </div>
      </main>
    </Layout>
  );
};

export async function getStaticProps() {
  const url = `${process.env.API_URL}/listadocursos`;
  const respuesta = await fetch(url);
  const cursos = await respuesta.json();
  return {
    props: {
      cursos
    }
  };
}

export default ListadoCursos;

