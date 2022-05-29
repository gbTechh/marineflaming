import React, { useEffect, useRef } from 'react'
import Helmet from 'react-helmet'
import { Navbar } from '../ui/molecules/Navbar';
import { Col, Container, Div, Row, Spacer, Typography } from '../../../uixlibrary/components/exports/components';

import { css } from '@emotion/react';
import useMenu from '../../hooks/useMenu';
import useLogo from '../../hooks/useLogo';
import Footer from '../ui/molecules/Footer';
import useContact from '../../hooks/useContact';
import { useTheme } from '../../../uixlibrary/hooks/useTheme';
import Facebook from '../ui/atoms/icons/Facebook';
import Twitter from '../ui/atoms/icons/Twitter';
import Instagram from '../ui/atoms/icons/Instagram';
import Whatsapp from '../ui/atoms/icons/Whatsapp';
import { Link } from 'gatsby';


export const LayoutScreen = ({ children, title, descripcion }) => {

  

  // const { opengraphTitle, opengraphDescription, opengraphImage, twitterTitle, twitterDescription, twitterImage } = useYoastSEO();
  const menu = useMenu();
  const logo = useLogo();
  const contact = useContact();
  
  const theme = useTheme();
  const {node:{redesSocialesCf:{email, direccion,twitter, facebook, instagram, whtasapp}}} = useContact();

  const whatsappLink = () => {
    return `https://wa.me/${whtasapp.numero}?text=${whtasapp.mensaje.replace(' ', '%20')}`
  }

  return (
    <>      
      <Helmet
        htmlAttributes={{
          lang: 'en-us',
        }}
        title={title}
        meta={[
          {
            name: `description`,
            content: descripcion,
          },
          
        ]}
      >

     
       
      </Helmet>
      <Container bk={{ background:'#273358',height:'auto', padding:'4px 30px' }}>
        <Row justify='center' align={'center'} bk={{ height:'100%' }} wrap>
          <Col span={12} bk={{ flexDirection:'column',alignItems:'center', justifyContent:'flex-start', xmd:{width:'50%', flexDirection:'row'} }}>
            {email &&  <Typography variant='xs' bk={{ color:'#fff' }}>{email}</Typography>}
            <Spacer x={5}/>
            {direccion &&  <Typography variant='xs' bk={{ color:'#fff' }}>{direccion}</Typography>}
          </Col>
          <Col span={12} bk={{ alignItems:'center', justifyContent:'center', xmd:{width:'40%'} }}>
            <Row justy='center'  bk={{ width:'100%',flexDirection:'column',alignItems:'center', xmd:{flexDirection:'row',justifyContent:'flex-end'} }}>
              <Col span={6} bk={{ width:'100%', justifyContent:'center', alignItems:'flex-end', xmd:{justifyContent:'flex-end'} }}>
                <Div bk={{ width:'18px', height:'18px', border:'0', background:'none', padding:'0' }}>
                  {facebook && <a href={facebook} css={css`width:100%; height:100%`}><Facebook css={css`width:100%; height:100%; max-height:100%; fill:#fff`}/></a>}
                </Div>
                <Spacer x={2}/>
                <Div bk={{ width:'18px', height:'18px', border:'0', background:'none', padding:'0' }}>
                {twitter && <a href={twitter} css={css`width:100%; height:100%`}><Twitter css={css`width:100%; height:100%; max-height:100%; fill:#fff`}/></a>}
                </Div>
                <Spacer x={2}/>
                <Div bk={{ width:'18px', height:'18px', border:'0', background:'none', padding:'0' }}>
                {instagram && <a href={instagram} css={css`width:100%; height:100%`}><Instagram css={css`width:100%; height:100%; max-height:100%; fill:#fff`}/></a>}
                </Div>
                <Spacer x={2}/>
                <Link to={whatsappLink()} css={css`cursor:pointer;width:110px; height:20px; background:#1cb360; border-radius:99.99px; padding:2px 5px`}><Typography variant='sm' component='span' bk={{ width:'100%', height:'100%', display:'flex', color:'#fff' }}><Whatsapp css={css`margin-right:0px;width:100%; height:100%; max-height:100%; fill:#fff`}/>Whatsapp</Typography></Link>
              </Col>             
            </Row>
          </Col>
        </Row>
      </Container>
      <Container fluid bk={{ padding:'0',background:'#fff' }}>
        <nav css={css`` } >
          <Navbar logo={logo} menu={menu}></Navbar>
        </nav>
        { children }      
      </Container>  
    
      <Footer></Footer>
    </>
  )
}

  