import { graphql, useStaticQuery } from 'gatsby'

const useLogo = () => {
    
  const logo = useStaticQuery(graphql`
  {
    allWpPage{
      nodes{
        logoCf{
          imagen{
						sourceUrl
          }
        }
      }
    }
  }
  
   `
  );    

  const logoSource = logo.allWpPage.nodes.filter(e => e.logoCf.imagen !== null)[0].logoCf.imagen.sourceUrl


  return logoSource;
   
}

export default useLogo
