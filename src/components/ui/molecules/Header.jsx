
import { Link } from 'gatsby';
import React from 'react'
import {  Container, Div } from '../../../../uixlibrary/components/exports/components'
import useContact from '../../../hooks/useContact';
import useSlider from '../../../hooks/useSlider'
import Whatsapp from '../atoms/icons/Whatsapp';

import SliderHead from './Slider';

const Header = ({ children}) => {

  const sliderData = useSlider();
  
  const {node:{redesSocialesCf:{whtasapp}}} = useContact();

  

  const whatsappLink = () => {
    return `https://wa.me/${whtasapp.numero}?text=${whtasapp.mensaje.replace(' ', '%20')}`
  }

  return (
    <Container bk={{ padding:0 }}>
      <Div bk={{ display:'grid', gridTemplateRows:'600px', gridTemplateColumns:'200px repeat(5,1fr)', padding:'0', border:'0', md:{gridTemplateRows:'calc(100vh - 100px)'} }}>
        <SliderHead linkWsp={whatsappLink()}  sliderData={sliderData}> </SliderHead>

      </Div>
      <Div bk={{ zIndex:'10',display:'block', position:'fixed', bottom:'40px', right:'25px', width:'55px', height:'55px', borderRadius:'50%', background:' linear-gradient(45deg, rgba(16,184,40,1) 0%, rgba(138,255,146,1) 100%)', border:'0', padding:'0', display:'grid', placeContent:'center' , paddingBottom:'1.2px', paddingLeft:'1px'}}>
        <Link to={whatsappLink()}>
          <Whatsapp fill={'#fff'}/>
        </Link>
      </Div>
    </Container>
  )
}

export default Header