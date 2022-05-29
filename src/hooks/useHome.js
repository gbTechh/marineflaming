import { graphql, useStaticQuery } from 'gatsby'

const useHome = () => {
    
  const homePage = useStaticQuery(graphql`
  {
    wpPage(slug: {eq: "inicio"}) {
      home{
        nosotros{
          descripcion
          imagen{
            sourceUrl
          }
          titulo
          titulo2
          descripcion2
        }
        historia{
          descripcion
          imagen{
            sourceUrl
          }
          titulo
        }
        productos{
          descripcion
          imagen{
            sourceUrl
          }
          titulo
        }
      }
    }
  }
   `
  );    


  return homePage.wpPage.home
   
}

export default useHome
