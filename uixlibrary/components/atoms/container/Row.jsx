import styled from '@emotion/styled';
import isPropValid from '@emotion/is-prop-valid';




import {
  isObjectEmpty,  
  space,
  theme as defaultTheme,
  propsMQrys 
} from '../../../theme/utils';


const px = (measure) => `${space * measure}px`; 

const StyledRow = ({
  theme,
  fluid,
  gap,
  wrap,
  justify,
  align,
  bk,
  w
}) => {
  if (isObjectEmpty(theme)) {
    theme = defaultTheme;
  }
  
  const propsByBk = bk && propsMQrys(bk, theme.breakpoints);

  return {
    
    height:'auto',
    width: w ? w : 'auto',  
    display:'flex',
    gap:(typeof gap === 'number') ? px(gap) : px(1) ,
    flexWrap: wrap ? 'wrap' : 'nowrap',
    justifyContent: justify ? justify : 'flex-start',
    alignItems: align ? align : 'flex-start',
    ...(fluid && {width: '100%'}),
    ...(bk && propsByBk),
    '&:hover':{
   
    },
    '&:after': {

    },
    '&:hover::after':{
  
    },
    '&:before': {
     
    },
    '&:hover::before':{
     
      
    }
   
  };
};


const IGNORED_PROPS = ['color'];

const rowConfig = {
  shouldForwardProp: (prop) =>
    isPropValid(prop) && !IGNORED_PROPS.includes(prop),
};


export const Row = styled('div', rowConfig)(StyledRow);

// export const Container = ({ children, ...props  }) => {



//   return (
//     <CustomTag {...props}> 
//       { children }
//     </CustomTag>
//   )
// }
