import Head from 'next/head'
import Footer from './Footer'
import Header from './Header'

const Layouts = ({children, pagina}) => {
  return (
    <div>
      <Head>
        <meta name="description" content="Sitio Web de Venta de  Guitarras" />
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>GuitarLA - {pagina}</title>
      </Head>
      
      <Header />
      
      {children}
      
      <Footer />
    </div>
  )
}

export default Layouts