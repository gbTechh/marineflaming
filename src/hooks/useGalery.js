import { graphql, useStaticQuery } from 'gatsby'

const useGalery = () => {
    
  const allGalery = useStaticQuery(graphql`
  {
    allWpGaleriaCpt{
     edges{
       node{
         title
         galeriacf{
           titulo
           galeria{     
             id     
             sourceUrl
           }
         }
       }
     }
   }
   }
   `
  );    



  return allGalery.allWpGaleriaCpt.edges[0];
   
}

export default useGalery
