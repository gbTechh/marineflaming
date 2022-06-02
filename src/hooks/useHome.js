import { graphql, useStaticQuery } from 'gatsby'

const useHome = () => {
    
  const homePage = useStaticQuery(graphql`
  {
    wpPage(slug: {eq: "inicio"}) {
         home{
           nosotros{
             descripcion
            
             imagen{
               gatsbyImage(height: 550, width:800)
            }
             titulo  
           }
           historia{
             descripcion
              imagen{
               gatsbyImage(height: 550, width:800)
            }
             titulo
           }
           experiencia{
             descripcion
              imagen{
							gatsbyImage(height: 550, width:800)
            }
             titulo
           }
           video
           corfoLogo{
            gatsbyImage(height: 89, width:300)
            }
         }
       }
   }
   `
  );    


  return homePage.wpPage.home
   
}

export default useHome
