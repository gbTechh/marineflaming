import { spacing } from './units';

const white = '#fff';
const black = '#000';

const palette = {   
  common: {
    black, 
    white,
  }, 
  default:{
    main:'#202020',         
    secondary:'#161616',         
    middle:'#0e0e0e',         
    soft:'#202020',         
    clear:'#2a2a2a',         
    light:'#353535',
    text:'#f1f1f1',
    text_secondary:'#f1f1f1',
    text_darken:'#c2c2c2',
    border:'#cecece'
    
  },
  primary:{
    main:'#FF5C8D',      
    secondary:'#4857df',      
    middle:'#5967e7',      
    soft:'#f397b3',      
    clear:'#7e8afa',      
    light:'#909bf8',  
    text:'#ffffff',
    text_secondary:'#f1f1f1',
    text_darken:'#c2c2c2',
    text_contrast:'#000000',
    bg_outline:'#fff',
    border:'#909bf8'
  },
  secondary:{
    main:'#5bf19a',
    secondary:'#72f1a7',
    middle:'#84f0b1',
    soft:'#97f5be',
    clear:'#a5f6c7',
    light:'#bffdd9',
    text:'#ffffff',
    text_secondary:'#f1f1f1',
    text_darken:'#c2c2c2',
  },
  warning:{
    main:'#fc9804',
    secondary:'#ffa217',
    middle:'#FBA420',
    soft:'#fdac31',
    clear:'#fdb64b',
    light:'#ffbd59',  
    text:'#ffffff',
    text_secondary:'#f1f1f1',
    text_darken:'#c2c2c2',    
  },
  error:{
    main:'#ff2b47',
    secondary:'#ff3e58',
    middle:'#fd5269',
    soft:'#fd6478',
    clear:'#ff798b',
    light:'#ff8d9c',
    text:'#ffffff',
    text_secondary:'#f1f1f1',
    text_darken:'#c2c2c2',
  },
  text:{
    main:'#e3e3e3',
    primary:'#FF5C8D',
    error:'#ff2b47',
    head:'#ffffff',
    boquote:'#f5f5f5',
    subtitle:'#f1f1f1',
    link:'#e6e6e6',
    soft:'#d6d6d6',
    grey:'#cccccc',
  },
  background:{
    main:'#271d42',    
    secondary:'#211b33',    
    middle:'#2a243f',    
    soft:'#332c4b',    
    clear:'#403955',    
    light:'#534d66',
  },
  black:{
    just:'#000000',
    secondary:'#161616',
    middle:'#0e0e0e',
    soft:'#202020',
    opaque:'#2a2a2a',
    grey:'#353535',
  },
  white:{
    just:'#ffffff',
    secondary:'#f0f0f0',
    middle:'#e6e6e6',
    soft:'#dddddd',
    opaque:'#d4d4d4',
    grey:'#c3c3c3',
  },
  grey:{
    100: '#EAEAEA',
    200: '#C9C5C5',
    300: '#888',
    400: '#666',
  },
  gradient:{
    rainbow:{
      main:`conic-gradient(#fd004c,
        #fe9000,
        #fff020,
        #3edf4b,
        #3363ff,
        #b102b7,
        #fd004c)`,
      text:'#ffffff',
      border:'#ffffff',
      color:'#ffffff',
      transparent:'#5B42F3CC',
      bg:'#000',
      textOutline:'#fff',

    },
    purple:{
      main:'linear-gradient(112deg,#AF40FF -63.59%, #5B42F3 -20.3% ,#00DDEB 70.46%)',    
      text:'#ffffff',
      textOutline:'#fff',
      border:'#AF40FF',
      color:'#ffffff',
      transparent:'#5B42F3CC',
      bg:'#000',
    },
    pink:{
      main:'linear-gradient(235deg, rgba(255,138,155,1) 0%, rgba(245,15,110,1) 19%, rgba(255,56,169,1) 55%, rgba(240,0,55,1) 100%)',
      text:'#ffffff',
      textOutline:'#000000',
      border:'#F09819',
      color:'#FF512F',
      transparent:'#FF512FCC',
      bg:'#fff',
    }
   

  }
  
}

const shadows = {
  0: 'none',
  1: '0px 5px 10px rgba(0, 0, 0, 0.12)',
  2: '0px 8px 30px rgba(0, 0, 0, 0.24)',
};

const typography = {
  fontFamily : {
    head:  '"Noto Serif", serif',
    base: 	  '"Noto Serif", serif',
    code: 		'"Noto Serif", serif',
    pre: 		 '"Poppins", serif',
  },
  fontWeight : {
    heading:	800,
    title:    600,
    base: 		400,
    strong:		700,
    bquote: 	500,
    tiny:     300,
    figcap: 	400,
  }
};

const shape = {
  borderRadius: spacing['xsm'],
};

const breakpoints = {
  xs: '320px',
  xxs: '375px',
  xxxs: '425px',
  md: '768px',
  xmd: '960px',
  xxmd: '1024px',
  l: '1124px',
  xl: '1440px',
  xxl: '1800px',
  xxxl: '2560px'
}

const container = {
  maxWidth: breakpoints.desktopM,
  padding: {
    value: 3,
    breakpoints: {
      mobileS: 3,
      tabletS: 4,
      desktopS: 5,
    }
  }
}


const shadow = {
  main: '0 8px 30px rgba(0, 0, 0, 0.15)',
}

const tags = {
  body: {
    background: '#121212',
    //backgroundLinear: 'linear-gradient(144deg, rgba(18,18,18,1) 0%, rgba(35,18,11,1) 45%, rgba(0,0,0,1) 100%)',  
    backgroundLinear: 'linear-gradient(90deg, rgba(33,33,33,1) 0%, rgba(5,4,5,1) 20%, rgba(15,14,14,1) 85%, rgba(9,1,29,1) 100%)',
  }
}

export const darkTheme = {
  palette,
  shadows,
  typography,
  shape,
  container,
  breakpoints,
  shadow,
  tags
};