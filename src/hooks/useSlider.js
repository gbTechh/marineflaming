import { graphql, useStaticQuery } from 'gatsby'

const useSlider = () => {
    
  const slider = useStaticQuery(graphql`
  { 
    allWpSliderCpt{
       edges{
        node{
          sliderCf{
            text
          }
          featuredImage{
            node{
              gatsbyImage(width:1200, height:600)
            }
          }
        }
      }
    }
  }
  
  
  
   `
  );    

  const sliderData = slider.allWpSliderCpt.edges;

  return sliderData;
   
}

export default useSlider


