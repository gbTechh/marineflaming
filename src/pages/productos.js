import { css } from '@emotion/react'
import React from 'react'
import { Div, Row, Spacer, Typography, Container, Button, Col } from '../../uixlibrary/components/exports/components'

import { LayoutScreen } from "../components/layouts/LayoutScreen"

import useGetAllProducts from '../hooks/useGetAllProducts'

import { useTheme } from '../../uixlibrary/hooks/useTheme'
import HeaderText from '../components/ui/HeaderText'

import { Link } from 'gatsby'





const ProductosPage = ({location,...props }) =>{
  
  const theme = useTheme();
  const products = useGetAllProducts();


  const productDestacado = products.filter(e => e.node.productoDestacadoCf?.productoDestacado === true)[0];
  const productos = products.filter(e => e.node.productoDestacadoCf?.productoDestacado === null);

  
  
  const path = location.pathname.replace('/','').replace('/','');

  return(
    <LayoutScreen title='MarineFlaming | Productos' descripcion={'Encuentra todos nuestros productos como jaulas para cultivo de peces en lagos, lagunas y ríos'}>
      <HeaderText title='Productos y Servicios' path={path}/>   
      <Row bk={{  }}>
        <Col span={12} bk={{  position:'relative'}}>
          <Div bk={{ display:'block',position:'absolute', width:'100%', height:'100%', top:'0', left:'0', border:'0',  background: 'linear-gradient(0deg, rgba(0,0,0,0.5340336818321079) 0%, rgba(0,0,0,0) 19%, rgba(255,255,255,0) 63%)', zIndex:'3' }}></Div>
          <Div bk={{ border:'0',height:'350px', backgroundSize:'cover',backgroundPosition:'center',backgroundRepeat:'no-repeat', backgroundImage:`url('${productDestacado.node.productoDestacadoCf.imagenDestacada.sourceUrl}')` }}>
            <Container bk={{ padding:'0', maxWidth:'1200px',  }}>
              <Row wrap='wrap' align='flex-end' bk={{ height:'100%', flexDirection:'column', justifyContent:'flex-end', }}>
                <Col span={12} bk={{ height:'auto' }}>
                <Typography color='primary' variant='base' component='h3' bk={{ width:'300px', background:`${theme.palette.primary.soft}`, padding:'6px', textAlign:'center', borderRadius:'999.99px' }}>Nuestro Producto Destacado</Typography>
                </Col>
                <Spacer y={5}/>
                <Col span={12} bk={{ height:'auto',zIndex:'4' }}>
                <Typography capitalize variant='h1' fw='title' component='h3' align='left' bk={{ color:'#fff' }}>{productDestacado.node.title}</Typography>
                </Col>
              </Row>
            </Container>
          </Div>
        </Col>
      </Row>

      
      <Div  bk={{ border:'0', background:'#f2f6f7', flexDirection:'row', flexWrap:'wrap' }} flex justify='center' align='center' >
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
                  <img src={productDestacado.node.featuredImage.node.sourceUrl} alt={productDestacado.node.title} css={css`min-height:100%`}/>
                </Div>
              </Div>
            </Col>  
            <Spacer y={12} bk={{ xmd:{display:'none'} }}/>
            <Spacer x={12} bk={{ display:'none',xmd:{display:'block'} }}/>
            <Col span={12} bk={{ xmd:{width:'50%'} }}>
              <Row wrap>
                <Col span={12} bk={{ height:'auto' }}>
                  <Typography capitalize color='primary' variant='sm' component='h3' bk={{ width:'fit-content', height:'fit-content', background:`${theme.palette.primary.soft}`, padding:'6px 20px', textAlign:'center', borderRadius:'999.99px' }}>{'El más solicitado'}</Typography>
                </Col>
                <Spacer y={5}/>
                <Col span={12} bk={{ height:'auto' }}>
                  <Typography capitalize variant='h1' fw='title' component='h3' align='left'>{productDestacado.node.title}</Typography>
                </Col>
                <Spacer y={2}/>
                <Col span={12} bk={{ height:'auto' }}>
                  <Typography variant='h4' component='p' fw='strong'>{productDestacado.node.productoDestacadoCf.descripcionCortaProducto}</Typography>
                </Col>
                <Spacer y={5}/>
                <Col span={12} bk={{ height:'auto' }}>
                  <Typography variant='base' component='p' fw='tiny'>{productDestacado.node.productoDestacadoCf.descripcion}</Typography>
                </Col>
                <Spacer y={14}/>
                <Col span={12} bk={{ height:'auto', alignSelf:'flex-end' }}>
                  <Link to='/galeria'><Button color='primary' >Ver galería</Button></Link>
                </Col>

              </Row>
            </Col>
          </Row>  
          <Spacer y={24}/>  
        </Container> 
      </Div>  


      {
        productos.map(e => (
          <Div key={e.node.title} bk={{ border:'0', background:'#fff', flexDirection:'row', flexWrap:'wrap' }} flex justify='center' align='center' >
            <Container bk={{ maxWidth:'600px' , padding:'0', xmd:{maxWidth:'1200px'}}} >
            <Spacer y={24}/>
              <Row wrap='wrap' bk={{ xmd:{flexWrap:'nowrap'} }}>

                <Col span={12} bk={{ xmd:{width:'50%'} }}>
          
                  <Div bk={{ position:'relative', border:'0', padding:'0', background:'none' }} 
                 >
                    <Div bk={{ border:'0', padding:'0', width:'100%', height:'400px'}} >
                      <img src={e.node.featuredImage.node.sourceUrl} alt={e.node.title} css={css`min-height:100%`}/>
                    </Div>
                  </Div>
                </Col>  
                <Spacer y={12} bk={{ xmd:{display:'none'} }}/>
                <Spacer x={12} bk={{ display:'none',xmd:{display:'block'} }}/>
                <Col span={12} bk={{ xmd:{width:'50%'} }}>
                  <Row wrap>
                    <Col span={12} bk={{ height:'auto' }}>
                      <Typography capitalize color={'primary'} variant='sm' component='h3' bk={{ width:'fit-content', height:'fit-content', background:`${theme.palette.primary.soft}`, padding:'6px 20px', textAlign:'center', borderRadius:'999.99px' }}>{e.node.tipoProducts.nodes[0].name}</Typography>
                    </Col>
                    <Spacer y={5}/>
                    <Col span={12} bk={{ height:'auto' }}>
                      <Typography capitalize variant='h1' fw='title' component='h3' align='left'>{e.node.title}</Typography>
                    </Col>
                    <Spacer y={2}/>
                    <Col span={12} bk={{ height:'auto' }}>
                      <Typography variant='h4' component='p' fw='strong'>{e.node.productoDestacadoCf.descripcionCortaProducto}</Typography>
                    </Col>
                    <Spacer y={5}/>
                    <Col span={12} bk={{ height:'auto' }}>
                      <Typography variant='base' component='p' fw='tiny'>{e.node.productoDestacadoCf.descripcion}</Typography>
                    </Col>
                    <Spacer y={14}/>
                    <Col span={12} bk={{ height:'auto', alignSelf:'flex-end' }}>
                      <Link to='/galeria'><Button color='primary' >Ver galería</Button></Link>
                    </Col>

                  </Row>
                </Col>
              </Row>  
              <Spacer y={24}/>  
            </Container> 
          </Div> 
        ))
      }
               

     

    </LayoutScreen>      
   
  )
}
export default ProductosPage
