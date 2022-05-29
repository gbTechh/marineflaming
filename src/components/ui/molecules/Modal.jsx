import { css } from '@emotion/react'
import React from 'react'
import { Container, Row } from '../../../../uixlibrary/components/exports/components'
import Xsmall from '../atoms/icons/Xsmall'

const Modal = ({ setState, state, children }) => {

  return (
    <>      
      {
        state && 
        <Container className='modal' bk={{ zIndex:'999',alignItems:'center', jutifyContent:'center', background:'rgba(7,7,28,0.7)', height:'100vh', width:'100vw', position:'fixed', top:0,left:'0', display:'flex' }}>
          <Container bk={{ width:'100%', height:'100%', position:'relative', padding:'0',display:'flex',alignItems:'center', jutifyContent:'center' }}>
            <Row bk={{ background:'rga(255,255,255,0.5)', width:'90%', height:'auto', margin:'0 auto'  }}>
              { children }
            </Row>
            <Xsmall onClick={() => setState(false)} css={css`cursor:pointer;position:absolute; width:30px; height:30px; top:10px;right:10px;fill:#fff`}/>
          </Container>
        </Container>
      }
    </>
  )
}

export default Modal