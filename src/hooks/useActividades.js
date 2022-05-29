import { graphql, useStaticQuery } from 'gatsby'

const useActividades = () => {
    
  const allActividades = useStaticQuery(graphql`
  {
    allWpActividadesCpt{
      nodes{
        featuredImage{
          node{
            sourceUrl
          }
        }
        title
        actividadesCf{
          descripcion
          title
        }
      }
    }
  }
  
   `
  );    


  return allActividades.allWpActividadesCpt.nodes;
   
}

export default useActividades
