import { css } from '@emotion/react'
import React, { useEffect, useLayoutEffect, useRef, useState } from 'react'
import { Div, Row, Spacer, Typography, Card, Divider, Container, Button, Col } from '../../uixlibrary/components/exports/components'
import { theme } from '../../uixlibrary/theme/utils'
import { LayoutScreen } from "../components/layouts/LayoutScreen"
import Header from '../components/ui/molecules/Header'
import SectionCard from '../components/ui/SectionCard'
import useGetAllProducts from '../hooks/useGetAllProducts'
import useHome from '../hooks/useHome'
import { useTheme } from '../../uixlibrary/hooks/useTheme'
import HeaderText from '../components/ui/HeaderText'
import useHistory from '../hooks/useHistory'
import useTeam from '../hooks/useTeam'
import useActividades from '../hooks/useActividades'
import { Link } from 'gatsby'





const ActividadesPage = ({location,...props }) =>{
  
  const theme = useTheme();
  const actividades = useActividades();
 
  const path = location.pathname.replace('/','').replace('/','');

  return(
    <LayoutScreen title='MarineFlaming | Actividades' descripcion={'Aprende más de lo que hacemos en Marine flaming'}>
      <HeaderText title='Actividades' path={path}/>   

      {
        actividades.map((e,i) => (
          <Div key={e.title} bk={{ border:'0', background:`${i === 0 ? 'none' : '#f2f6f7'}`, flexDirection:'row', flexWrap:'wrap' }} flex justify='center' align='center' >
            <Container bk={{ maxWidth:'600px' , padding:'0', xmd:{maxWidth:'1200px'}}} >
            <Spacer y={24}/>
              <Row wrap='wrap' bk={{ xmd:{flexWrap:'nowrap'} }}>

                <Col span={12} bk={{ xmd:{width:'50%'} }}>
          
                  <Div bk={{ position:'relative', border:'0', padding:'0', background:'none' }} 
                  css={css`
                    &:before {
                      content:'';
                      width: 30px;
                      height:80%;
                      left:0;
                      top:10%;
                      margin:0 auto;                         
                      position:absolute;
                      background:${theme.palette.primary.main};
                    }
                  `}>
                    <Div bk={{ border:'0', padding:'0', marginLeft:'30px', width:'100%', height:'400px'}} >
                      <img src={e.featuredImage.node.sourceUrl} alt={e.title} css={css`min-height:100%`}/>
                    </Div>
                  </Div>
                </Col>  
                <Spacer y={12} bk={{ xmd:{display:'none'} }}/>
                <Spacer x={12} bk={{ display:'none',xmd:{display:'block'} }}/>
                <Col span={12} bk={{ xmd:{width:'50%'} }}>
                  <Row wrap>
                    <Col span={12} bk={{ height:'auto' }}>
                      <Typography capitalize color='primary' variant='sm' component='h3' bk={{ width:'120px', height:'fit-content', background:`${theme.palette.primary.soft}`, padding:'6px', textAlign:'center', borderRadius:'999.99px' }}>{e.title}</Typography>
                    </Col>
                    <Spacer y={5}/>
                    <Col span={12} bk={{ height:'auto' }}>
                      <Typography capitalize variant='h1' fw='title' component='h3' align='left'>{e.actividadesCf.title}</Typography>
                    </Col>
                    <Spacer y={5}/>
                    <Col span={12} bk={{ height:'auto' }}>
                      <Typography variant='base' component='p' fw='tiny'>{e.actividadesCf.descripcion}</Typography>
                    </Col>
                    <Spacer y={14}/>
                    <Col span={12} bk={{ height:'auto', alignSelf:'flex-end' }}>
                      <Link to='/productos'><Button color='primary' >Ver productos</Button></Link>
                    </Col>

                  </Row>
                </Col>
              </Row>  
              <Spacer y={24}/>  
            </Container> 
          </Div>          
        ))
      }
   

      {/*
        TEAM
      */
      }
      
    
      
     

    </LayoutScreen>      
   
  )
}
export default ActividadesPage
