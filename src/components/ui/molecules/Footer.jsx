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
import { GatsbyImage, getImage } from "gatsby-plugin-image"


const Footer = () => {

  const logo = useLogo();

  console.log({logo});
  const {node:{redesSocialesCf:{email, direccion, whtasapp,direccionChile, ruc, telefonoChile}}} = useContact();

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
        
        <Row bk={{ width:'100%',display:'flex',padding:'0px 10px', margin:'0 auto', xmd:{width:'75%',flexWrap:'nowrap'} }} wrap='wrap'> 
          <Col span={12} bk={{ xmd:{width:'25%', height:'100%'} }}>
            <Link to='/'><GatsbyImage css={css`width:180px; height:80px;`} image={getImage(logo)} alt='marineflaming-logo'/></Link>
          </Col>
          <Col span={12} bk={{ xmd:{width:'75%'} }}>
            <Row bk={{ flexDirection:'column', width:'100%', xmd:{flexDirection:'row'} }} align='flex-start' justify='flex-start'> 
              <Col span={12} bk={{ flexDirection:'column', xmd:{width:'50%', height:'100%'}  }}>
                <Spacer y={5}/>
                <Typography variant='sm' fw='base' bk={{ display:'flex' , width:'100%', justifyContent:'flex-start', color:'#fff', alignItems:'center', gap:'4px' }}>                
                      {'MARINE FARMING COMPANY'} 
                </Typography>                
                <Spacer y={5}/>
                <Typography variant='sm' fw='base' bk={{ display:'flex' , width:'100%', justifyContent:'flex-start', color:'#fff', alignItems:'center', gap:'4px' }}>                
                      { `Chile: ${direccionChile}` } 
                </Typography>
                <Spacer y={5}/>
                <Typography variant='sm' fw='base' bk={{ display:'flex' , width:'100%', justifyContent:'flex-start', color:'#fff', alignItems:'center', gap:'4px' }}>                
                      {`Peru: ${direccion}`} 
                </Typography>
                <Spacer y={5}/>    
              </Col>          
              <Col span={12} bk={{ flexDirection:'column', xmd:{width:'50%', height:'100%',alignItems:'center',paddingLeft:'20px',}  }}>
                <Spacer y={5}/>
                <Typography variant='sm' fw='base' bk={{ display:'flex' , width:'100%', justifyContent:'flex-start', color:'#fff', alignItems:'center', gap:'4px' , xmd:{justifyContent:'center'}}}>
                  <span css={css`& > svg { width:17px; height:17px;}`}>
                        <Email fill={theme.palette.primary.main} />  
                  </span>
                
                      {email} 
                </Typography>              
              
                <Spacer y={5}/>
                <Typography variant='sm' fw='base' bk={{ display:'flex' , width:'100%', justifyContent:'flex-start', color:'#fff', alignItems:'center', gap:'4px', xmd:{justifyContent:'center'} }}>
                  <span css={css`& > svg { width:17px; height:17px;}`}>
                    <Whatsapp  fill={theme.palette.primary.main}/>  
                  </span> 
                  {`Peru: +${whtasapp.numero}`} 
                </Typography>
                <Spacer y={5}/>
                <Typography variant='sm' fw='base' bk={{ display:'flex' , width:'100%', justifyContent:'flex-start', color:'#fff', alignItems:'center', gap:'4px', xmd:{justifyContent:'center'} }}>
                  <span css={css`& > svg { width:17px; height:17px;}`}>
                    <Whatsapp  fill={theme.palette.primary.main}/>  
                  </span> 
                  {`Chile: +${telefonoChile}`} 
                </Typography>
                <Spacer y={15}/>
              </Col>         
              
            </Row>
          </Col>
         
        </Row>
        <Row bk={{ width:'100%' , flexDirection:'column', display:'flex',padding:'0px 10px', margin:'0 auto', xmd:{width:'25%'} }}>
          <Typography capitalize variant='h2' fw='title' component='h4' align='center' bk={{ color:'#fff' }}>{ 'Compañia' }</Typography>
          <Spacer y={5}/>
          {
            menu.menuItems.nodes.map((e ,i)=> (
             
              <Col key={i} bk={{ alignItems:'flex-start' }}>
                <Typography capitalize variant='base' fw='bquote' bk={{ width:'max-content', margin:'0px ', color:'#fff' }} css={css`&:hover{color:${theme.palette.primary.main}; transition:color 0.4s ease}`}>
                  <Link to={e.path.slice(0, -1)} >
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