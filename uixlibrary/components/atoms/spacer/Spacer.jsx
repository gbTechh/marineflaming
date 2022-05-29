import styled from '@emotion/styled';
import isPropValid from '@emotion/is-prop-valid';
import {
  isObjectEmpty,    
  space,
  theme as defaultTheme, 
  propsMQrys, 
} from '../../../theme/utils';





const px = (measure) => `${space * measure}px`; 
  

const StyledSpacer = ({
  theme,  
  x,
  y,
  bk

}) => {
  if (isObjectEmpty(theme)) {
    theme = defaultTheme;
  }
  
  const propsByBk = bk && propsMQrys(bk, theme.breakpoints);

  const marginXProps = (px) => {
    
    return {
      marginLeft: `calc(${px} / 2)`,
      marginRight: `calc(${px} / 2)`,
    }
  }
  const marginYProps = (px) => {
  
    return {
      marginTop: `calc(${px} / 2)`,
      marginBottom: `calc(${px} / 2)`,
    }
  }
  
  const xProps = x && marginXProps(px(x));
  const yProps = y && marginYProps(px(y));
  

  const propsItem = {
    display:'block',
    width:'1px',
    height:'1px',
    ...(xProps),
    ...(yProps),
    
   
 
  }

  return {    
   
    ...(propsItem),
    ...(bk && propsByBk),


   
  };
};


const IGNORED_PROPS = ['color'];

const spacerConfig = {
  shouldForwardProp: (prop) =>
    isPropValid(prop) && !IGNORED_PROPS.includes(prop),
};


export const Spacer = styled('span', spacerConfig)(StyledSpacer);


