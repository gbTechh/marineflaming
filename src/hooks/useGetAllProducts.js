import { graphql, useStaticQuery } from 'gatsby'

const useGetAllProducts = () => {
    
  const allProducts = useStaticQuery(graphql`
  {
    allWpProduct{
      edges{
        node{
          title
          content
          slug
          featuredImage{
            node{
             localFile{
								childImageSharp{
									gatsbyImageData(width:600,height:400, quality:70)
                }
              }
            }
          }
          productoDestacadoCf{
            productoDestacado
            descripcionCortaProducto
            descripcion
            imagenDestacada{
						  sourceUrl
            }
          }
          tipoProducts{	
            nodes{
              slug
              name
            }
          }
        }
      }
    }
  }
  
   `
  );    

 

  return allProducts.allWpProduct.edges;
   
}

export default useGetAllProducts
