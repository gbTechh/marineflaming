import { css } from '@emotion/react'
import React, {  useState } from 'react'
import { Div, Row, Spacer, Typography, Container, Button } from '../../uixlibrary/components/exports/components'

import { LayoutScreen } from "../components/layouts/LayoutScreen"
import Header from '../components/ui/molecules/Header'
import SectionCard from '../components/ui/SectionCard'
import useGetAllProducts from '../hooks/useGetAllProducts'
import useHome from '../hooks/useHome'
import { useTheme } from '../../uixlibrary/hooks/useTheme'
import Play from '../components/ui/atoms/icons/Play'
import Modal from '../components/ui/molecules/Modal'
import { Link } from 'gatsby'




const IndexPage = ({...props }) =>{
  
  const theme = useTheme();
  const products = useGetAllProducts();
  const home = useHome();

  const [stateModal, setStateModal] = useState(false)


  return(
    <LayoutScreen title='MarineFlaming | Home' descripcion={'Encuentra todos nuestros productos como jaulas para cultivo de peces en lagos, lagunas y ríos'}>
      <Header />
      <Spacer y={24}/>

      <SectionCard badge='Productos' title='Los mejores productos' data={products} type='fabricacion'/>
      <Spacer y={5}/>
      <Link to='/productos' css={css`margin: 0 auto;`}><Button css={css`margin:0 auto`} variant='solid' enableElevation color='primary'>Ver Productos</Button></Link>
      <Spacer y={24}/>
      <Row as='section' flex bk={{ background:'#f2f6f7',md:{flexWrap:'nowrap'} }} justify='center' align={'center'} gap={2} wrap='wrap'>     
        <Container pd={10} bk={{ display:'flex',justifyContent:'flex-end',alignItems:'center',maxWidth:'800px',md:{width:'50%'} }} >          
          <Row wrap='wrap' bk={{width:'100%', md:{width:'80%'} }} >
            <Typography  color='primary' fw='title' variant='base' bk={{ width:'100%' }}>Nosotros</Typography>
            <Spacer y={5} />
            <Typography capitalize variant='h2' fw='title' component='h3' align='left' bk={{ width:'100%' }}>{home.nosotros.titulo}</Typography>
            <Spacer y={5} />
            <Typography variant='base' component='p' align='left' fw='tiny'  bk={{paddingRight:'0px', width:'100%' , md:{paddingRight:'00px'}}}>{home.nosotros.descripcion}</Typography>
            <Spacer y={5} />
            <Typography capitalize variant='h2' fw='title' component='h3' align='left' bk={{ width:'100%' }}>{home.nosotros.titulo2}</Typography>
            <Spacer y={5} />
            <Typography variant='base' component='p' align='left' fw='tiny' bk={{paddingRight:'0px', width:'100%' , md:{paddingRight:'00px'}}}>{home.nosotros.descripcion2}</Typography>

          </Row>
        </Container>
        <Row bk={{ display:'none', width:'50%',minHeight:'550px', md:{display:'flex'} }}>
          <img css={css`height:100%; min-height:550px`} src={home.nosotros.imagen.sourceUrl}/>
        </Row>
        <Div onClick={() => setStateModal(true)} css={css`
        cursor:pointer;
        &:before {
          content:'';
          width:80px;
          height:80px;
          position:absolute;
          border-radius:50%;
          animation-name:expanding;
          animation-duration:1s;
          animation-iteration-count:infinite;
          animation-timing-function: ease;
          background:${theme.palette.primary.main}1A;
        }
        `} borderRadius='circle' bk={{zIndex:'2',overflow:'visible',marginBottom:'40px', border:'0',width:'80px', height:'80px', background:`${theme.palette.primary.main}`,display:'flex',justifyContent:'center',alignItems:'center',md:{position:'absolute', margin:'0'} }}>
          <Play />
        
        </Div>
        
     
      </Row>
      <Spacer y={24}/>
      <SectionCard badge='Servicios' title='Brindamos servicios de Calidad' data={products} type='servicio'/>
     
      <Row as='section' flex bk={{ background:'#f2f6f7',md:{flexWrap:'nowrap'} }} justify='center' align={'center'} gap={2} wrap='wrap'>     
        <Container pd={10} bk={{ display:'flex',justifyContent:'flex-end',alignItems:'center',maxWidth:'800px',md:{width:'50%'} }} >          
          <Row  bk={{width:'100%', md:{width:'80%'} }} wrap='wrap' >
            <Typography  color='primary' fw='title' variant='base' bk={{ width:'100%' }}>Experiencia</Typography>
            <Spacer y={5} />
            <Typography capitalize variant='h2' fw='title' component='h3' align='left' bk={{ width:'100%' }}>{home.productos.titulo}</Typography>
            <Spacer y={5} />
            <Typography variant='base' component='p' align='left' fw='tiny'  bk={{paddingRight:'0px', width:'100%' }}>{home.nosotros.descripcion}</Typography>
            <Spacer y={5} />  
          </Row>
        </Container>
        <Row bk={{ background:'#fff',display:'none', width:'50%',minHeight:'550px', md:{display:'flex'} }}>
          <img css={css`height:100%; min-height:550px;filter: brightness(86%) contrast(144%) hue-rotate(152deg) saturate(117%) sepia(20%) invert(9%) ;`} src={home.productos.imagen.sourceUrl} alt='jaulas-hpde'/>
        </Row>      
  
     
      </Row>
      <Spacer y={24}/>
      
      <Modal state={stateModal} setState={setStateModal}>
      <iframe width="560" height="650" src="https://www.youtube.com/embed/I7IMFoVsBSw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </Modal>
    </LayoutScreen>      
   
  )
}
export default IndexPage
