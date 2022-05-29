import { css } from '@emotion/react'
import React, { useEffect, useState } from 'react'
import { Div, Row, Spacer, Typography, Card, Divider, Container,  Col } from '../../uixlibrary/components/exports/components'

import { LayoutScreen } from "../components/layouts/LayoutScreen"

import useGetAllProducts from '../hooks/useGetAllProducts'
import useHome from '../hooks/useHome'
import { useTheme } from '../../uixlibrary/hooks/useTheme'
import HeaderText from '../components/ui/HeaderText'
import useHistory from '../hooks/useHistory'
import useTeam from '../hooks/useTeam'





const NosotrosPage = ({location,...props }) =>{
  
  const theme = useTheme();
  const products = useGetAllProducts();
  const home = useHome();
  const history = useHistory();
  const years = history.sort((a,b) => (a.node.historiaCpt.year - b.node.historiaCpt.year))
  
  
  const [yearsArr, setYearsArr] = useState()

 
  const handleYears = (slug) => {
    const data =years.filter(e => (e.node.slug === slug))
    setYearsArr(data)
 
  }

  
  useEffect(() => {
    const data = [];
    data.push(years[0])
    setYearsArr(data)  


   
  }, [])

  const team = useTeam();

  const path = location.pathname.replace('/','').replace('/','');
  
  return(
    <LayoutScreen title='MarineFlaming | nosotros' descripcion={'Conoce más acerca de la gran compañia Marine Flaming'}>
      <HeaderText title='Nosotros' path={path}/>
      <Spacer y={24}/>
      
      <Container bk={{ maxWidth:'600px' , padding:'0', xmd:{maxWidth:'1200px'}}} >

      <Div bk={{ border:'0', background:'none', flexDirection:'column' }} flex justify='center' align='center' >
        <Typography color='primary' variant='base' component='h3' bk={{ width:'150px', background:`${theme.palette.primary.soft}`, padding:'6px', textAlign:'center', borderRadius:'999.99px' }}>Historia</Typography>
        <Spacer y={5}/>
        <Typography capitalize variant='h1' fw='title' component='h3' align='center'>Breve Reseña</Typography>
        <Spacer y={12}/>
        <Row gap={5} wrap='wrap' justify='center' bk={{ width:'100%' }}>
          
          {
            years.map((e) => (                 
              <Div key={e.node.slug} bk={{ border:'0', padding:'20px', maxWidth:'100px' }} css={css`&:hover{ background:${theme.palette.primary.main}}; color:'#fff`} onClick={() => handleYears(e.node.slug)} >
              <Typography variant={'h3'} component='h3' align='center'>{e.node.historiaCpt.year}</Typography>
              </Div>            
            ))
          }          
     
        </Row>
        <Spacer y={24}/>
        <Container bk={{ padding:'0' }}>         
          <Row wrap='wrap' bk={{ xmd:{flexWrap:'nowrap'} }} justify='center' align='center'>
            <Col span={12} bk={{ maxHeight:'400px',xmd:{width:'50%'} }}>
              <img src={yearsArr && yearsArr[0].node.featuredImage.node.sourceUrl} alt='imagen-nosotros' />
            </Col>
            <Spacer y={5} bk={{ xmd:{display:'none'} }} />
            <Col span={12} bk={{ flexWrap:'wrap', maxHeight:'400px',xmd:{width:'50%', padding:'20px'}  }}>      
              <Col span={12} >
                { yearsArr && <Typography color='primary' variant='base' component='h3' bk={{ width:'80px', background:`${theme.palette.primary.soft}`, padding:'6px', textAlign:'center', borderRadius:'999.99px' }}>{yearsArr[0].node.historiaCpt.year}</Typography>     }   
              </Col>
              <Spacer y={5}/>
             
         
              <Col span={12} >
                <Typography variant='h2' component='h3' fw='strong' capitalize>{yearsArr && yearsArr[0].node.title}</Typography>
              </Col>
              <Spacer y={5}/>
              <Col span={12}>
                <Typography component='p' variant='base'>{yearsArr && yearsArr[0].node.historiaCpt.resumen}</Typography>
              </Col>
            
            </Col>
          </Row>  
        </Container>
        <Spacer y={24}/>
      </Div>

      {/*
        TEAM
      */
      }
      
      </Container>
      <Div bk={{ border:'0', background:'#f2f6f7', flexDirection:'column' }} flex justify='center' align='center' >
        <Container bk={{ display:'flex', alignItems:'center',justifyContent:'center',flexDirection:'column',maxWidth:'600px' , padding:'0', xmd:{maxWidth:'1200px'}}} >
          <Spacer y={24}/>
          <Typography color='primary' variant='base' component='h3' bk={{ width:'150px', background:`${theme.palette.primary.soft}`, padding:'6px', textAlign:'center', borderRadius:'999.99px' }}>Historia</Typography>
          <Spacer y={5}/>
          <Typography capitalize variant='h1' fw='title' component='h3' align='center'>Nuestro Team</Typography>
          <Spacer y={12}/>  
          <Row gap={5} wrap='wrap' justify='center'>
          {
            team.map((e,i) => (          
              (
                <Card key={i} pd={0} minw={'300px'} maxw={'300px'} borderRadius='n'bk={{ }}>
                  <Card.Header pd={0} bk={{ height:'350px' }}>
                    <img css={css`height:100%`}src={e.featuredImage.node.sourceUrl} alt={e.title}/>
                  </Card.Header>
                  <Divider color='pink' gradient h='2px'/>
                  <Card.Body pd={1} bk={{ background:'#f2f6f7',  }}>
                    <Typography fw='title' align='center'>{e.title}</Typography>
                    <Spacer y={1}/>
                    <Typography variant='sm' color='primary' fw='title' align='center'>
                      {e.teamCf.cargo}
                    </Typography>
                    <Spacer y={3}/>
                    <Typography variant='sm' fw='tiny' align='center'>
                      {e.teamCf.descripcion}
                    </Typography>
                  </Card.Body>
                </Card> ) 
            ))
          }
          </Row>
        
      
          <Spacer y={24}/>
          </Container>
      </Div>
     

    </LayoutScreen>      
   
  )
}
export default NosotrosPage
