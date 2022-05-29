import { graphql, useStaticQuery } from 'gatsby'

const useTeam = () => {
    
  const allTeam = useStaticQuery(graphql`
  {
    allWpTeamCpt{
      nodes{
        title
        featuredImage{
          node{
            sourceUrl
          }
        }
        teamCf{
          cargo
          descripcion
        }
      }
    }
  }
  
   `
  );    


  return allTeam.allWpTeamCpt.nodes;
   
}

export default useTeam
