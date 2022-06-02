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
import { GatsbyImage, getImage } from "gatsby-plugin-image"



const IndexPage = ({...props }) =>{
  
  const theme = useTheme();
  const products = useGetAllProducts();
  const home = useHome();

  

  const [stateModal, setStateModal] = useState(false)

  const imageNosotros = getImage(home.nosotros.imagen)
  const imagenExperiencia = getImage(home.experiencia.imagen);
  const imagenCorfo = getImage(home.corfoLogo);
  console.log(imagenCorfo)

  return(
    <LayoutScreen title='MarineFarming | Home' descripcion={'Encuentra todos nuestros productos como jaulas para cultivo de peces en lagos, lagunas y ríos'}>
      <Header />

     
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
          <GatsbyImage image={imageNosotros} alt='Marine Farming Image' css={css`height:100%; min-height:550px`}/>
          {/* {<img css={css`height:100%; min-height:550px`} src={home.nosotros.imagen.sourceUrl}/>} */}
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
      <SectionCard badge='Productos' title='Los mejores productos' data={products} type='fabricacion'/>
    
    
      <SectionCard badge='Servicios' title='Brindamos servicios de Calidad' data={products} type='servicio'/>
      <Spacer y={5}/>
      <Link to='/productos' css={css`margin: 0 auto;`}><Button css={css`margin:0 auto`} variant='solid' enableElevation color='primary'>Ver Productos</Button></Link>
      <Spacer y={24}/>
     
      <Row as='section' flex bk={{ background:'#f2f6f7',md:{flexWrap:'nowrap'} }} justify='center' align={'center'} gap={2} wrap='wrap'>     
        <Container pd={10} bk={{ display:'flex',justifyContent:'flex-end',alignItems:'center',maxWidth:'800px',md:{width:'50%'} }} >          
          <Row  bk={{width:'100%', md:{width:'80%'} }} wrap='wrap' >
            <Typography  color='primary' fw='title' variant='base' bk={{ width:'100%' }}>Experiencia</Typography>
            <Spacer y={5} />
            <Typography capitalize variant='h2' fw='title' component='h3' align='left' bk={{ width:'100%' }}>{home.experiencia.titulo}</Typography>
            <Spacer y={5} />
            <Typography variant='base' component='p' align='left' fw='tiny'  bk={{paddingRight:'0px', width:'100%' }}>{home.nosotros.descripcion}</Typography>
            <Spacer y={5} />  
          </Row>
        </Container>
        <Row bk={{ background:'#fff',display:'none', width:'50%',minHeight:'550px', md:{display:'flex'} }}>
          {/* <img css={css`height:100%; min-height:550px;filter: brightness(86%) contrast(144%) hue-rotate(152deg) saturate(117%) sepia(20%) invert(9%) ;`} src={home.experiencia.imagen.sourceUrl} alt='jaulas-hpde' /> */}
          <GatsbyImage image={imagenExperiencia} alt='jaulas-hpde' css={css`height:100%; min-height:550px;filter: brightness(86%) contrast(144%) hue-rotate(152deg) saturate(117%) sepia(20%) invert(9%) ;`}/>
        </Row>      
  
     
      </Row>
      <Spacer y={24}/>
      <Row bk={{ margin:'0 auto', width:'100%' }} align='center' justify='center' wrap='wrap'> 
        <Typography  capitalize variant='h2' fw='title' component='h3' align='center' bk={{ width:'100%' }}>Proyecto Apoyado por</Typography>
        <Spacer y={5} /> 
        <GatsbyImage image={imagenCorfo} alt='Logo corfo' css={css`margin:40px; padding:0px 20px`}/>
  
 

      </Row>
      <Spacer y={24} /> 
      
      <Modal state={stateModal} setState={setStateModal}>     
      <iframe width="560" height="715" src={home.video} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </Modal>

    </LayoutScreen>      
   
  )
}
export default IndexPage
