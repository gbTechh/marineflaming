import { graphql, useStaticQuery } from 'gatsby'

const useContact = () => {
    
  const allRedes = useStaticQuery(graphql`
  {
    allWpRedesSocialesCpt{
      edges{
        node{
          featuredImage{
            node{
              sourceUrl
            }
          }
          redesSocialesCf{
            direccion
            email
            facebook
            instagram
            twitter
            whtasapp{
              numero
              mensaje
            }       
          }
        }
      }
    }
  }
  
   `
  );    


  return allRedes.allWpRedesSocialesCpt.edges[0];
   
}

export default useContact
