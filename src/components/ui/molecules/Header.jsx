import { graphql, useStaticQuery } from 'gatsby';
import React from 'react'
import { Col, Container, Div, Row, Spacer, Typography } from '../../../../uixlibrary/components/exports/components'
import useSlider from '../../../hooks/useSlider'
import GravityForm from '../../gravityForms/GravityForm';
import SliderHead from './Slider';

const Header = ({ children}) => {

  const sliderData = useSlider();
  
  const data = useStaticQuery(graphql`
    {
      wpGfForm(databaseId: {eq: 1}) {
        ...GravityFormContactFields
      }
    }
  
  `)

  return (
    <Container bk={{ padding:0 }}>
      <Div bk={{ display:'grid', gridTemplateRows:'600px auto', gridTemplateColumns:'200px repeat(5,1fr)', padding:'0', border:'0', md:{gridTemplateRows:'calc(100vh - 100px)'} }}>
        <SliderHead sliderData={sliderData}> </SliderHead>
        <Div bk={{ border:'0',width:'100%', height:'100%', gridRow:'2/3' ,gridColumn:'1/7', background:'rgba(255,255,255,0.8)', xmd:{gridRow:'1/3', gridColumn:'1/3', display:'flex', alignItems:'center', justifyContent:'center'}}}>
          <Row wrap='wrap' bk={{ flexDirection:'column', width:'100%' }} align='center'>
            <Spacer y={5}/>
            <Col span={12}>
              <Typography uppercase variant='h2' fw='title' component='h2' align='center' bk={{ width:'100%' }}>Somos tu mejor <Typography color='primary' uppercase variant='h2' fw='title' component='h2' align='center' bk={{ width:'100%' }}>opcion</Typography></Typography>
            </Col>
            <Spacer y={5}/>
            <Col span={12} bk={{ background:'#f2f6f7', padding:'16px' }}>
              <GravityForm form={data.wpGfForm}/>
            </Col>
            <Spacer y={24}/>
          </Row>
        </Div>
      </Div>
    </Container>
  )
}

export default Header