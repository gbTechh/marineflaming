import { graphql, useStaticQuery } from 'gatsby'

const useLogo = () => {
    
  const logo = useStaticQuery(graphql`
  {
    allWpPage{
      nodes{
        logoCf{
          imagen{
						sourceUrl
            gatsbyImage(width:180, height:70,quality:100)
          }
        }
      }
    }
  }


  
   `
  );    

  const logoSource = logo.allWpPage.nodes.filter(e => e.logoCf.imagen !== null)[0].logoCf.imagen.gatsbyImage


  return logoSource;
   
}

export default useLogo
