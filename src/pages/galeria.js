import { css } from '@emotion/react'
import React, { useState } from 'react'
import {  Row, Spacer, Typography, Container } from '../../uixlibrary/components/exports/components'

import { LayoutScreen } from "../components/layouts/LayoutScreen"

import { useTheme } from '../../uixlibrary/hooks/useTheme'
import HeaderText from '../components/ui/HeaderText'

import useGalery from '../hooks/useGalery'
import Modal from '../components/ui/molecules/Modal'



const GaleriaPage = ({location,...props }) =>{
  
 
  const theme = useTheme();
  const [galeryState, setGaleryState] = useState()
  const [stateModal, setStateModal] = useState(false)
  const path = location.pathname.replace('/','').replace('/','');

  
  const galery = useGalery();

  

  const handleGalery = (id) => {
    

    const obj = galery.node.galeriacf.galeria.filter(e => e.id === id);
    setGaleryState(obj[0].sourceUrl)
    setStateModal(true);

    
  }


  return(
    <LayoutScreen title='MarineFlaming | Galería' descripcion={'Mira nuestra galería de procesos de fabricación de los productos'}>
      <HeaderText title='Galería' path={path}/>
      <Spacer y={24}/>
      
      <Container bk={{ padding:'0px', xmd:{maxWidth:'1200px'}}} >
        <Typography capitalize variant='h1' fw='title' component='h3' align='center'>{ galery.node.galeriacf.titulo }</Typography>
        <Spacer y={24}/>
        <Row wrap='wrap' gap={5} alig='center' justify='center'>
        {
          galery && galery.node.galeriacf.galeria.map(e => (
            <img onClick={() => handleGalery(e.id)} key={e.id} src={e.sourceUrl} css={css`width:300px; transform:scale(1);transition:transform 0.3s ease; &:hover{transform:scale(1.1)}`} alt={'fabricacion-de-productos'}/>
          ))
        }
      </Row>
      <Spacer y={24}/>

      </Container>
      <Modal state={stateModal} setState={setStateModal}>
        {
          galeryState && ( <img  src={galeryState} css={css`width:100%; transform:scale(0.8)`}/>)  
        }
      </Modal>

    </LayoutScreen>      
   
  )
}
export default GaleriaPage
