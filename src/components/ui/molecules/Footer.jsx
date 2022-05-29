import { css } from '@emotion/react';
import { Link } from 'gatsby';
import React from 'react'
import { Button, Col, Container, Row, Spacer, Typography } from '../../../../uixlibrary/components/exports/components'
import { useTheme } from '../../../../uixlibrary/hooks/useTheme';
import useContact from '../../../hooks/useContact';
import useLogo from '../../../hooks/useLogo'
import useMenu from '../../../hooks/useMenu';
import Email from '../atoms/icons/Email';
import Pin from '../atoms/icons/Pin';
import Whatsapp from '../atoms/icons/Whatsapp';

const Footer = () => {

  const logo = useLogo();
  const {node:{redesSocialesCf:{email, direccion, whtasapp}}} = useContact();

  const theme = useTheme();
  const menu = useMenu();

  return (
    <>
      <Container pd={10} bk={{ display:'flex', justifyContent:'center', alignItems:'center', background:'none', position:'relative' }} css={css`
        &:after{
          content:'';
          width:100%;
          height:50%;
          position:absolute;
          background:#171b2a;
          top:50%;
          left:0;
          display:block;
        }
      `}>
          <Row bk={{zIndex:'2',padding:'40px', maxWidth:'1200px',background:`${theme.palette.primary.main}`, width:'100%',flexDirection:'column' ,xmd:{flexDirection:'row'}}} >
            <Col span={12}>
              <Typography variant='h2' colo='white' fw='strong'bk={{alignSelf:'center', width:'100%', color:'#fff' }}>¿Buscas los mejores productos?</Typography>
            </Col>
            <Spacer y={4}/>
            <Col span={12} bk={{ justifyContent:'flex-end' }}>
              <Link to='/contacto'><Button color='white' bk={{ width:'300px' }}>Contáctanos</Button></Link>
            </Col>
          </Row>
      </Container>
      <Container as='footer' bk={{flexDirection:'column', display:'flex',justifyContent:'flex-start',alignItems:'flex-start', background:'#171b2a', xmd:{flexDirection:'row', justifyContent:'flex-start'} }}>
        
        <Row bk={{ width:'100%',display:'flex',padding:'0px 40px', margin:'0 auto', xmd:{width:'35%'} }}>
          <Col span={12}>
            <Row bk={{ flexDirection:'column', width:'100%' }} align='flex-start' justify='flex-start'>
              <Col span={12}>
                <Link to='/'><img css={css`width:150px; height:80px;`} src={logo} alt='marineflaming-logo'/></Link>
              </Col>
              <Spacer y={5}/>
              <Typography variant='sm' fw='tiny' bk={{ display:'flex' , width:'100%', justifyContent:'flex-start', color:'#fff', alignItems:'center', gap:'4px' }}>
              <span>

                    <Email size={'15'}  />  
              </span>
            
                  {email} 
              </Typography>
              <Spacer y={5}/>
              <Typography variant='sm' fw='tiny' bk={{ display:'flex' , width:'100%', justifyContent:'flex-start', color:'#fff', alignItems:'center', gap:'4px' }}>
                <span>
                  <Pin size={'15'}  />  
                </span> 
                {direccion} 
              </Typography>
              <Spacer y={5}/>
              <Typography variant='sm' fw='tiny' bk={{ display:'flex' , width:'100%', justifyContent:'flex-start', color:'#fff', alignItems:'center', gap:'4px' }}>
                <span>
                  <Whatsapp size={'15'}  />  
                </span> 
                {whtasapp.numero} 
              </Typography>
              <Spacer y={15}/>
            </Row>
          </Col>
         
        </Row>
        <Row bk={{ width:'100%' , flexDirection:'column', display:'flex',padding:'0px 40px', margin:'0 auto', xmd:{width:'65%'} }}>
          <Typography capitalize variant='h2' fw='title' component='h4' align='center' bk={{ color:'#fff' }}>{ 'Compañia' }</Typography>
          <Spacer y={5}/>
          {
            menu.menuItems.nodes.map((e ,i)=> (
             
              <Col key={i} bk={{ alignItems:'flex-start' }}>
                <Typography capitalize variant='base' fw='bquote' bk={{ width:'max-content', margin:'0px ', color:'#fff' }} css={css`&:hover{color:${theme.palette.primary.main}; transition:color 0.4s ease}`}>
                  <Link to={e.url} >
                    {e.label}
                  </Link>
                  <Spacer y={5}/>
                </Typography>
                
              </Col>
             
             
            ))
          }
        </Row>
      </Container>
    </>
  )
}

export default Footer