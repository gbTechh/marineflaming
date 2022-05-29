import { css } from '@emotion/react'
import React from 'react'
import { Div, Row, Spacer, Typography,   Container,  Col } from '../../uixlibrary/components/exports/components'

import { LayoutScreen } from "../components/layouts/LayoutScreen"


import HeaderText from '../components/ui/HeaderText'

import { graphql, useStaticQuery } from 'gatsby'
import GravityForm from '../components/gravityForms/GravityForm'
import useContact from '../hooks/useContact'

import direccionImg from "../images/direccion.png"
import emailImg from "../images/email-sobre.png"
import phoneImg from "../images/phone.png"



const ContactoPage = ({location,...props }) =>{
  

  const path = location.pathname.replace('/','').replace('/','');

  const data = useStaticQuery(graphql`
    query formQuery {
      wpGfForm(databaseId: {eq: 1}) {
        ...GravityFormContactFields
      }
    }
  `)
  

  const {node:{redesSocialesCf:{email, direccion, whtasapp}}} = useContact();




  return(
    <LayoutScreen title='MarineFlaming | Contacto' descripcion={`Contáctate con nosotros mediante nuestro email: ${email} o numero telefónico ${whtasapp.numero}`}>
      <HeaderText title='Contacto' path={path}/>
      <Spacer y={24}/>
      
      <Container bk={{ padding:'0px', xmd:{maxWidth:'1200px'}}} >

        <Div bk={{ border:'0', background:'none', flexDirection:'column' }} flex justify='center' align='center' >
          <Row bk={{ width:'100%', flexDirection:'column', xmd:{flexDirection:'row'} }} gap={5}>
            <Col span={12}>
              <Div bk={{ padding:'20px', background:'#fff' }}> 
                <Row wrap='wrap' >
                  <Col span={12} bk={{ justifyContent:'center' }}>
                    <img src={emailImg} css={css`width:80px; height:80px; object-fit:contain`} alt='email' />
                  </Col>
                  <Spacer y={5}/>
                  <Col span={12}>
                    <Typography fw='strong' align='center' bk={{ width:'100%' }} uppercase>email</Typography>
                  </Col>
                  <Spacer y={5}/>
                  <Col span={12}>
                    <Typography align='center' bk={{ width:'100%' }}>{email}</Typography>
                  </Col>
                </Row>
              </Div>
            </Col>
            
            <Col span={12}>
              <Div bk={{ padding:'20px', background:'#fff' }}> 
                <Row wrap>
                  <Col span={12}  bk={{ justifyContent:'center' }}>
                    <img src={direccionImg} css={css`width:80px; height:80px; object-fit:contain`} alt='direccion'  />
                  </Col>
                  <Spacer y={5}/>
                  <Col span={12}>                
                  <Typography fw='strong' align='center' bk={{ width:'100%' }} uppercase>direccion</Typography>
                  </Col>
                  <Spacer y={5}/>
                  <Col span={12}>
                    <Typography align='center' bk={{ width:'100%' }}>{direccion}</Typography>
                  </Col>
                </Row>
              </Div>
            </Col>

            <Col span={12}>
              <Div bk={{ padding:'20px' , background:'#fff'}}> 
                <Row wrap>
                  <Col span={12}  bk={{ justifyContent:'center' }}>
                    <img src={phoneImg} css={css`width:80px; height:80px; object-fit:contain`} alt='telefono'  />
                  </Col>
                  <Spacer y={5}/>
                  <Col span={12}>
                    <Typography fw='strong' align='center' bk={{ width:'100%' }} uppercase>telefono</Typography>
                  </Col>
                  <Spacer y={5}/>
                  <Col span={12}>
                    <Typography align='center' bk={{ width:'100%' }}>+{whtasapp.numero}</Typography>
                  </Col>
                </Row>
              </Div>
            </Col>
           
          </Row>
          
        </Div>

      </Container>

      <Spacer y={24}/>
      <Container bk={{ padding:'0px', xmd:{maxWidth:'1200px'}}} >
        <Div bk={{background:'none', flexDirection:'column', xmd:{ padding:'40px 80px'} }} flex justify='center' align='center' >
        <Spacer y={5}/>
          <Typography color='primary' fw='title' variant='h2' uppercase>formulario de Contacto</Typography>
          <Spacer y={5}/>
          <Row bk={{width:'100%', margin:'0 auto' }} align='center' justify={'center'}>
            <GravityForm form={data.wpGfForm}/>
          </Row>
        </Div>
      </Container>
     

    </LayoutScreen>      
   
  )
}
export default ContactoPage
