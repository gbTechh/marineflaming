import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import { Div, Typography } from "../../../../uixlibrary/components/exports/components";
import { css } from "@emotion/react";

import { useTheme } from "../../../../uixlibrary/hooks/useTheme";



const SliderHead = ({ linkWsp, children, sliderData, ...props}) => {


 
  const settings = {
    dots: true,
    infinite: true,
    autoplay: false,
    autoplaySpeed: 4000,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  const theme = useTheme();

  return (
    <Div bk={{  gridRow:'1/2', gridColumn:'1/7',padding:'0', border:'0', height:'100%' }}>  
      <Slider {...settings} style={{ height:'100%' }}>
        {
          sliderData.map((e,i) => (
            <Div key={i} bk={{border:'0', display:'grid !important',  gridTemplateColumns:'repeat(6,1fr)', gridTemplateRows:'repeat(6,1fr)', padding:'0', height:'100%', md:{height:'calc(100vh - 100px)'} }}>
              <img key={i} css={css`width:100%; height:max(600px,calc(100vh - 100px));  object-fit:cover; grid-column:1/7; grid-row:1/7`} src={e.node.featuredImage.node.sourceUrl} alt={'imagen-slider'}></img>
              <Div bk={{ border:'0',background:'rgba( 5,5,31,0.4)', width:'100%', height:'100%',gridColumn:'1/7', gridRow:'1/7' }}></Div>
              <Typography as='h1' variant={'h2'} fw={'strong'}  bk={{ textAlign:'left',paddingTop:'0',width:'100%', alignSelf:'flex-start',background:'none', gridColumn:'2/6', gridRow:'2/5',color:'#fff', md:{marginLeft:'-100px',fontSize:'50px', lineHeight:'51px', gridColumn:'2/5'} }}>{e.node.sliderCf.text}</Typography>              
              <Typography component='a' href={linkWsp} variant={'base'} fw={'title'} bk={{ background:`${theme.palette.primary.main}`,textAlign:'center',padding:'15px 20px',width:'max-content', alignSelf:'center',color:'#fff', margin:'0 auto',gridColumn:'2/6', gridRow:'4/5',color:'#fff' }}>{'Más información'}</Typography>
            </Div>
            ))
          }
        
      </Slider>
    </Div>
 
  )
}

export default SliderHead