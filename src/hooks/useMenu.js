import { graphql, useStaticQuery } from 'gatsby'

const useMenu = () => {
    
  const allMenuItems = useStaticQuery(graphql`
  {
    allWpMenu{
      edges{
        node{
          slug
          name
          menuItems{
            nodes{
              label
              url
            }
          }
        }
      }
    }
  }
   `
  );    



  return allMenuItems.allWpMenu.edges[0].node;
   
}

export default useMenu
