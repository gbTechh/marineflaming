import styled from '@emotion/styled';
import isPropValid from '@emotion/is-prop-valid';
import React, { useRef } from 'react'


import {
  isObjectEmpty,
  spacing,
  space,
  fontSize,
  propsMQrys,
  theme as defaultTheme,  
} from '../../../theme/utils';




const getTypoSizeProps = ({size, theme, ff}) => {

  let fontSystem = "-apple-system, BlinkMacSystemFont, 'Segoe UI','Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans','Helvetica Neue', sans-serif";

  const fontHead = ff ? theme?.typography?.fontFamily[ff] : theme?.typography?.fontFamily?.head ?? fontSystem;
  const fontBase = ff ? theme?.typography?.fontFamily[ff]  : theme?.typography?.fontFamily?.base ?? fontSystem;
  const fontCode = ff ? theme?.typography?.fontFamily[ff]  : theme?.typography?.fontFamily?.code ?? fontSystem;
  const fontPre = ff ? theme?.typography?.fontFamily[ff]  : theme?.typography?.fontFamily?.pre ?? fontSystem;


  const sizes = {
    big: {
      fontSize: `${fontSize['big'][0]}px`,
      lineHeight: `${fontSize['big'][1]}px`,
      letterSpacing: `${fontSize['big'][2]}px`,
      fontFamily: `${fontHead}`,
      '@media (min-width: 768px)':{
        fontSize: `${fontSize['big_tablet'][0]}px`,
      },
      '@media (min-width: 1024px)':{
        fontSize: `${fontSize['big_desktop'][0]}px`,
      }
    },
    h1: {
      fontSize: `${fontSize['h1'][0]}px`,
      lineHeight: `${fontSize['h1'][1]}px`,
      letterSpacing: `${fontSize['h1'][2]}px`,
      fontFamily: `${fontHead}`,
      '@media (min-width: 768px)':{
        fontSize: `${fontSize['h1_tablet'][0]}px`,
      },
      '@media (min-width: 1024px)':{
        fontSize: `${fontSize['h1_desktop'][0]}px`,
      }
    },
    h2: {
      fontSize: `${fontSize['h2'][0]}px`,
      lineHeight: `${fontSize['h2'][1]}px`,
      letterSpacing: `${fontSize['h2'][2]}px`,
      fontFamily: `${fontHead}`,
      '@media (min-width: 768px)':{
        fontSize: `${fontSize['h2_tablet'][0]}px`,
      },
      '@media (min-width: 1024px)':{
        fontSize: `${fontSize['h2_desktop'][0]}px`,
      }
    },
    h3: {
      fontSize: `${fontSize['h3'][0]}px`,
      lineHeight: `${fontSize['h3'][1]}px`,
      letterSpacing: `${fontSize['h3'][2]}px`,
      fontFamily: `${fontHead}`,
      '@media (min-width: 768px)':{
        fontSize: `${fontSize['h3_tablet'][0]}px`,
      },
      '@media (min-width: 1024px)':{
        fontSize: `${fontSize['h3_desktop'][0]}px`,
      }
    },
    h4: {
      fontSize: `${fontSize['h4'][0]}px`,
      lineHeight: `${fontSize['h4'][1]}px`,
      letterSpacing: `${fontSize['h4'][2]}px`,
      fontFamily: `${fontHead}`,
      '@media (min-width: 768px)':{
        fontSize: `${fontSize['h4_tablet'][0]}px`,
      },
      '@media (min-width: 1024px)':{
        fontSize: `${fontSize['h4_desktop'][0]}px`,
      }
    },
    base: {
      fontSize: `${fontSize['base'][0]}px`,
      lineHeight: `${fontSize['base'][1]}px`,
      letterSpacing: `${fontSize['base'][2]}px`,
      fontFamily: `${fontBase}`,
      '@media (min-width: 768px)':{
        fontSize: `${fontSize['base_tablet'][0]}px`,
      },
      '@media (min-width: 1024px)':{
        fontSize: `${fontSize['base_desktop'][0]}px`,
      }
    },
    sm: {
      fontSize: `${fontSize['sm'][0]}px`,
      lineHeight: `${fontSize['sm'][1]}px`,
      letterSpacing: `${fontSize['sm'][2]}px`,
      fontFamily: `${fontBase}`,
      '@media (min-width: 768px)':{
        fontSize: `${fontSize['sm_tablet'][0]}px`,
      },
      '@media (min-width: 1024px)':{
        fontSize: `${fontSize['sm_desktop'][0]}px`,
      }

    },
    xs: {
      fontSize: `${fontSize['xs'][0]}px`,
      lineHeight: `${fontSize['xs'][1]}px`,
      letterSpacing: `${fontSize['xs'][2]}px`,
      fontFamily: `${fontBase}`,
      '@media (min-width: 768px)':{
        fontSize: `${fontSize['xs_tablet'][0]}px`,
      },
      '@media (min-width: 1024px)':{
        fontSize: `${fontSize['xs_desktop'][0]}px`,
      }

    },
    xxs: {
      fontSize: `${fontSize['xxs'][0]}px`,
      lineHeight: `${fontSize['xxs'][1]}px`,
      letterSpacing: `${fontSize['xxs'][2]}px`,
      fontFamily: `${fontBase}`,
      '@media (min-width: 768px)':{
        fontSize: `${fontSize['xxs_tablet'][0]}px`,
      },
      '@media (min-width: 1024px)':{
        fontSize: `${fontSize['xxs_desktop'][0]}px`,
      }

    },
    bquote: {
      fontSize: `${fontSize['bquote'][0]}px`,
      lineHeight: `${fontSize['bquote'][1]}px`,
      letterSpacing: `${fontSize['bquote'][2]}px`,
      fontFamily: `${fontBase}`,
      '@media (min-width: 768px)':{
        fontSize: `${fontSize['bquote_tablet'][0]}px`,
      },
      '@media (min-width: 1024px)':{
        fontSize: `${fontSize['bquote_desktop'][0]}px`,
      }

    },
    figcap: {
      fontSize: `${fontSize['figcap'][0]}px`,
      lineHeight: `${fontSize['figcap'][1]}px`,
      letterSpacing: `${fontSize['figcap'][2]}px`,
      fontFamily: `${fontBase}`,
      '@media (min-width: 768px)':{
        fontSize: `${fontSize['figcap_tablet'][0]}px`,
      },
      '@media (min-width: 1024px)':{
        fontSize: `${fontSize['figcap_desktop'][0]}px`,
      }

    },
    code: {
      fontSize: `${fontSize['code'][0]}px`,
      lineHeight: `${fontSize['code'][1]}px`,
      letterSpacing: `${fontSize['code'][2]}px`,
      fontFamily: `${fontCode}`,
      '@media (min-width: 768px)':{
        fontSize: `${fontSize['code_tablet'][0]}px`,
      },
      '@media (min-width: 1024px)':{
        fontSize: `${fontSize['code_desktop'][0]}px`,
      }

    },
    pre: {
      fontSize: `${fontSize['pre'][0]}px`,
      lineHeight: `${fontSize['pre'][1]}px`,
      letterSpacing: `${fontSize['pre'][2]}px`,
      fontFamily: `${fontPre}`,
      '@media (min-width: 768px)':{
        fontSize: `${fontSize['pre_tablet'][0]}px`,
      },
      '@media (min-width: 1024px)':{
        fontSize: `${fontSize['pre_desktop'][0]}px`,
      }

    },
  
  }

  return sizes[size] || sizes.base;
};

const borderRadiusProps = {
  n:{
    borderRadius: '0px',
  },
  xsm:{
    borderRadius:`${spacing['xxsm']}`,
  },
  sm:{
    borderRadius: `${spacing['xsm']}`,
  },
  md:{
    borderRadius: `${spacing['sm']}`,
  },
  full:{
    borderRadius: '999.99px',
  },
  circle:{
    borderRadius: '50%',
  }, 
}

const getColor = ({color, theme}) => {

  const colorInPalette = color ? theme.palette.text[color] : theme.palette.text.main;
  
  const colorProps = {
    color: colorInPalette,
  };
 
  return colorInPalette ? colorProps : {color:theme.palette.text.main}
}


const getPropsByVariant = ({ variant, color, theme, gradient }) => {

  const colorInPalette = gradient ? theme.palette.gradient[color] : theme.palette[color];  

  const defaultSolidVariantProps = {
    main: {
      border: `1px solid ${theme.palette.grey[100]}`,
      backgroundColor: theme.palette.grey[100],
      color: theme.palette.common.white,
    },
    hover: {
      border: `1px solid ${theme.palette.grey[200]}`,
      backgroundColor: theme.palette.grey[200],
    },
  };
  
  const defaultOutlineVariantProps = {
    main: {
      border: `1px solid ${theme.palette.common.black}`,
      backgroundColor: theme.palette.common.white,
      color: theme.palette.common.black,
    },
    hover: {
      border: `1px solid ${theme.palette.common.black}`,
      backgroundColor: theme.palette.common.white,
      color: theme.palette.common.black,
    },
  };
  
  
  const solidVariantPropsByPalette = colorInPalette && {
    main: {
      border: gradient ? `0px solid transparent` : `0px solid ${colorInPalette.border}`,
      color: colorInPalette.text,
      background: colorInPalette.border,
     
    },    
  };
  
  const outlineVariantPropsByPalette = colorInPalette && {
    main: {
      border: gradient ? `0px solid transparent` : `1.5px solid ${colorInPalette.border}`,
      background: gradient ? colorInPalette.border : 'transparent',
      color: gradient ? colorInPalette.textOutline : colorInPalette.border,
      zIndex:1,
    },    
    before: {
      content:"''",
      position:'absolute',
      top:'2px',
      left:'2px',
      width:'calc(100% - 4px)',
      height:'calc(100% - 4px)',
      margin:'0 auto',
      background:colorInPalette.bg,
      zIndex:-1,
    }
  };



  const variants = {
    outline: colorInPalette
      ? outlineVariantPropsByPalette
      : defaultOutlineVariantProps,
    solid: colorInPalette
      ? solidVariantPropsByPalette
      : defaultSolidVariantProps,  
    
  };

  return variants[variant] || variants.solid;
};

const StyledInput = ({
  theme,
  disabled,  
  variant, 
  gradient,
  shadow,
  size,
  color,
  mt,mb,ml,mr,
  pt,pb,pl,pr,
  uppercase,
  lowercase,
  capitalize,
  borderRadius,
  bk,
  fw,
  ff,
  align,
  css
}) => {
  if (isObjectEmpty(theme)) {
    theme = defaultTheme;
  }

  const px = (measure) => `${space * measure}px`; 
 
  const propsBySizeTypo = getTypoSizeProps({size, theme, ff});
  const propsByColor = getColor({ color, theme });  

  const propsByBk = bk && propsMQrys(bk, theme.breakpoints);
  const propsByFw = fw && theme.typography.fontWeight[fw];
  const propsByBorderRadius = borderRadius ? borderRadiusProps[borderRadius] : borderRadiusProps.n
  
  const propsByVariant = getPropsByVariant({ variant, theme, color, gradient });


  return {
    boxSizing: 'border-box',
    textTransform: uppercase ? 'uppercase' : lowercase ? 'lowercase' : capitalize ?'capitalize' : 'none' ,
    marginBottom: mb ? px(mb) : px(0), 
    marginTop: mt ? px(mt) : px(0), 
    marginLeft: ml ? px(ml) : px(0), 
    marginRight: mr ? px(mr) : px(0), 
    paddingBottom: pb ? px(pb) : px(2), 
    paddingTop: pt ? px(pt) : px(2), 
    paddingLeft: pl ? px(pl) : px(2), 
    paddingRight: pr ? px(pr) : px(2), 
    ...(propsBySizeTypo),
    transition: 'all 0.3s linear',
    width:'100%',
    height:'auto',
    position:'relative',
    fontWeight: fw ? propsByFw : '400',
    textAlign: align && align,
    ...(propsByBorderRadius),
    ...(propsByVariant && propsByVariant.main),
    ...(propsByColor),

    ...(bk && propsByBk),
    
    
    
    ...(css && css)
  };
};


const IGNORED_PROPS = ['color'];

const inputConfig = {
  shouldForwardProp: (prop) =>
    isPropValid(prop) && !IGNORED_PROPS.includes(prop),
};


const InputComponent = styled('input', inputConfig)(StyledInput);



export const Input = React.memo(({ children, type, placeholder, ...props  }) => {

  let component = 'input';
  
  const CustomTag = useRef(InputComponent.withComponent(`${props.component ?? component}`));


  return (
    <CustomTag.current {...props} type={type} placeholder={placeholder} onChange={(e) => {
      props.onChange && props.onChange(e)          
    }}
    >
      { children }
    </CustomTag.current>
  )
})
