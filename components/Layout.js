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
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin /> 
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700;900&family=Outfit:wght@300;400;700;900&display=swap" />
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