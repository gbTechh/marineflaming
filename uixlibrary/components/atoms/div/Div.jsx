import styled from '@emotion/styled';
import isPropValid from '@emotion/is-prop-valid';
import React from 'react'


import {
  isObjectEmpty,
  spacing,
  space,
  propsMQrys,
  theme as defaultTheme,  
} from '../../../theme/utils';



const px = (measure) => `${space * measure}px`; 

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
      border: gradient ? `0px solid transparent` : `0px solid ${colorInPalette.main}`,
      color: colorInPalette.text,
      background: colorInPalette.main,
     
    },    
  };
  
  const outlineVariantPropsByPalette = colorInPalette && {
    main: {
      border: gradient ? `0px solid transparent` : `1.5px solid ${colorInPalette.main}`,
      background: gradient ? colorInPalette.main : 'transparent',
      color: gradient ? colorInPalette.textOutline : colorInPalette.main,
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

const StyledDiv = ({
  color,
  disabled,
  theme,  
  variant,
  borderRadius,
  gradient,
  shadow,  
  bk,
  pt,pb,pl,pr,pd,
  mt,mb,ml,mr,mg,
  w, maxw, minw,
  h, maxh, minh,
  keyframe,
  flex, 
  justify,
  align

}) => {
  if (isObjectEmpty(theme)) {
    theme = defaultTheme;
  }

 
  const propsByBk = bk && propsMQrys(bk, theme.breakpoints);

  const propsByVariant = getPropsByVariant({ variant, theme, color, gradient });
  const propsByBorderRadius = borderRadius ? borderRadiusProps[borderRadius] : borderRadiusProps.n
  // const propsByHover = getHoverEffects({hover, color, theme, gradient,capitalize, lowercase, uppercase, variant});
   

  return {
    appearance:'none',
    boxSizing: 'border-box',     
    transition: 'all 0.3s linear', 
    boxShadow: shadow && theme.shadow['main'],
    position:  'relative',
    overflow:'hidden',
    display:flex ? 'flex' : 'block',    
    width: w ? w : '100%',
    height: h ? h : '100%',
    maxWidth: maxw ? maxw : 'auto',
    minWidth: minw ? minw : 'auto',
    maxHeight: maxh ? maxh : 'auto',
    minHeight: minh ? minh : 'auto',

    ...(propsByVariant && propsByVariant.main),
    ...(propsByBorderRadius),
    // ...(propsByHover && propsByHover?.noHover),
    padding: `${px(pd * 1.5)} ${px((pd * 1.5))}`,
    ...(pd ?? {padding: `${px(2 * 1.5)} ${px((2 * 1.5))}`}),
    paddingBottom: pb && px(pb), 
    paddingTop: pt && px(pt), 
    paddingLeft: pl && px(pl), 
    paddingRight: pr && px(pr),
    margin: `${px(mg * 1.5)} ${px((mg * 1.5))}`,
    ...(mg ?? {margin: `${px(2 * 0)} ${px((2 * 0))}`}),
    marginBottom: mb && px(mb), 
    marginTop: mt && px(mt), 
    marginLeft: ml && px(ml), 
    marginRight: mr && px(mr),
    useSelect: disabled && 'none',
    opacity: disabled && '0.8',
    animation: keyframe && keyframe,
    justifyContent:justify &&justify,
    alignItems:align && align,
    
    ...(bk && propsByBk),
  };
};


const IGNORED_PROPS = ['color'];

const divConfig = {
  shouldForwardProp: (prop) =>
    isPropValid(prop) && !IGNORED_PROPS.includes(prop),
};


const DivComponent = styled('div', divConfig)(StyledDiv);

export const Div = ({ children, ...props  }) => {

  let component = 'div';
  const CustomTag = DivComponent.withComponent(`${props.component ?? component}`);

  return (
    <CustomTag {...props}> 
      { children }
    </CustomTag>
  )
}

