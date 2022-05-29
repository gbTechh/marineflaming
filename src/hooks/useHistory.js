import { graphql, useStaticQuery } from 'gatsby'

const useHistory = () => {
    
  const allHistory = useStaticQuery(graphql`
  {
    allWpHistoriaCpt{
      edges{
        node{
          title
          slug
          featuredImage{
            node{
              sourceUrl
            }
          }
          historiaCpt{
            year
            resumen
          }
        }
      }
    }
  }
   `
  );    


  return allHistory.allWpHistoriaCpt.edges;
   
}

export default useHistory
