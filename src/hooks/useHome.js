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
           }
           historia{
             descripcion
             imagen{
               sourceUrl
             }
             titulo
           }
           experiencia{
             descripcion
             imagen{
               sourceUrl
             }
             titulo
           }
           video
           corfoLogo{
             sourceUrl
           }
         }
       }
   }
   `
  );    


  return homePage.wpPage.home
   
}

export default useHome
