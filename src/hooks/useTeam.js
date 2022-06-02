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
            localFile{
              childImageSharp{
								gatsbyImageData(width: 300, height:350,quality:100)
              }
            }
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
