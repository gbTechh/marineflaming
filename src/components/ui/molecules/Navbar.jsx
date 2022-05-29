import { css } from '@emotion/react';
import React, { useRef, useState } from 'react';
import {  Col, Container, Div, Row, Spacer, Typography } from '../../../../uixlibrary/components/exports/components'
import { BurguerMenu } from '../atoms';
import { useChangeTheme } from '../../../../uixlibrary/context/provider';
import { Link } from 'gatsby';
import Xsmall from '../atoms/icons/Xsmall';
import { useTheme } from '../../../../uixlibrary/hooks/useTheme';


export const Navbar = ({ logo, menu }) => {

  const { changeTheme } = useChangeTheme();

  const [menuState, setMenuState] = useState(false)

  const handleMenu = () => {
    setMenuState(!menuState);
  }
  const menuMobil = useRef();

  const closeMenu = () => {
    setMenuState(false);
  }

  const theme = useTheme();
 

  return (
    <>
    <Container fluid>
      <Row gap={0} justify={'space-between'} bk={{ 'height': '100px' }}>
        <Col span={6}>
          <Row justify={'center'} align='center'>
            <Link to='/'>
              <img             
                src={logo}
                css={css`
                width:180px;
                height:70px;
                `}
                alt='logo-marineflaming'
              />
            </Link>
          </Row>
        </Col>
       
        <Col span={6} bk={{ justifyContent:'flex-end' }}>
        <Row bk={{ display:'none', xmd:{display:'flex'} }}>
        {
          menu.menuItems.nodes.map((e,i) => (
            <Col key={i} bk={{ alignItems:'center' }}>
              <Typography capitalize variant='base' fw='strong' bk={{ width:'max-content', margin:'0px 10px' }} css={css`&:hover{color:${theme.palette.primary.main}; transition:color 0.4s ease}`}>
                <Link to={e.url} >
                  {e.label}
                </Link>
              </Typography>
            </Col>
          ))
        }
        </Row>
        
        <Row bk={{ xmd:{display:'none'} }} >
          <BurguerMenu handleMenu={handleMenu} />
        </Row>
        </Col>
      </Row>
    </Container>
    <Row ref={menuMobil} justify='center' align='center' bk={{ background:'#fff',display:`${menuState ? 'flex' : 'none'}`,flexDirection:'column',top:'0', left:'0', width:'100vw',height:'100vh',zIndex:'100', position:'fixed', xmd:{display:'none'} }}>
      <Div bk={{cursor:'pointer', padding:'0',width:'40px', height:'40px',position:'fixed', border:'0px solid #000', background:'0', top:'35px', right:'30px', zIndex:'100' ,display:'block'}} onClick={closeMenu}>
        <Xsmall css={css`width:100%; height:100%; z-index:110; fill:#000`} />
      </Div>
      <Col bk={{ alignItems:'center',justifyContent:'center', height:'auto' }}>
        <Typography capitalize variant='h3' fw='strong' bk={{ width:'max-content', margin:'0px 10px' }} css={css`&:hover{color:${theme.palette.primary.main}}`}>
          <Link to={'/'} onClick={closeMenu} >
            home
          </Link>
        </Typography>
        
      </Col>
      <Spacer y={5}/>
    {
      menu.menuItems.nodes.map((e,i) => (
      
        <Col key={e.slug}  bk={{ alignItems:'center',justifyContent:'center', height:'auto' }}>
          <Typography capitalize variant='h3' fw='strong' bk={{ width:'max-content', margin:'0px 10px' }} css={css`&:hover{color:${theme.palette.primary.main}}`} >
            <Link to={e.url} onClick={closeMenu} >
              {e.label}
            </Link>
            <Spacer y={5}/>
          </Typography>
         
        </Col>
      
       
       
      ))
    }
    </Row>
    </>
  );
}