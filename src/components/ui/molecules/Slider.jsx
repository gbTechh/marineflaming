import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { Div, Typography } from "../../../../uixlibrary/components/exports/components";
import { css } from "@emotion/react";


const SliderHead = ({ children, sliderData, ...props}) => {

  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 4000,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };


  return (
    <Div bk={{  gridRow:'1/1', gridColumn:'1/7',padding:'0', border:'0', height:'100%' }}>  
      <Slider {...settings} style={{ height:'100%' }}>
        {
          sliderData.map((e,i) => (
            <Div key={i} bk={{border:'0', display:'grid !important',  gridTemplateColumns:'repeat(6,1fr)', gridTemplateRows:'1fr', padding:'0', height:'100%', md:{height:'calc(100vh - 100px)'} }}>
              <img key={i} css={css`width:100%; height:max(600px,calc(100vh - 100px));  object-fit:cover; grid-column:1/7; grid-row:1/6`} src={e.node.featuredImage.node.sourceUrl} alt={'imagen-slider'}></img>
              <Div bk={{ border:'0',background:'rgba( 49, 85, 247 ,0.15)', width:'100%', height:'100%',gridColumn:'1/7', gridRow:'1/1' }}></Div>
              <Typography as='h1' variant={'h2'} fw={'strong'}  bk={{ textAlign:'right',paddingTop:'100px',width:'100%', alignSelf:'flex-start',background:'none', gridColumn:'3/6', gridRow:'1/1',color:'#fff', md:{fontSize:'50px', lineHeight:'51px', gridColumn:'4/6'} }}>{e.node.sliderCf.text}</Typography>
            </Div>
            ))
          }
      </Slider>
    </Div>
 
  )
}

export default SliderHead