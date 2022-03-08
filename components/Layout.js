import Head from 'next/head'
import Header from './Header'
import Footer from './Footer'

const Layout = ({children, pagina, guitarra}) => {

  return (
    <div>
      <Head>
        <meta name="description" content="Sitio Web de Venta de  Guitarras" />
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>GuitarLA - {pagina}</title>
      </Head>
      
      <Header 
        guitarra={guitarra}
      />
      {children}
      <Footer />
    </div>
  )
}

Layout.defaultProps = {
  guitarra: null
}

export default Layout