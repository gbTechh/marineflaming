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
            sourceUrl
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


