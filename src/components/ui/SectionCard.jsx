import { css } from '@emotion/react';
import React from 'react'
import { Div, Row, Spacer, Typography, Card, Divider } from '../../../uixlibrary/components/exports/components'
import { useTheme } from '../../../uixlibrary/hooks/useTheme'

const SectionCard = ({ children , badge, title, data, type}) => {

  const theme = useTheme();
  return (
    <Div bk={{ border:'0', background:'none', flexDirection:'column' }} flex justify='center' align='center' >
      <Typography color='primary' variant='base' component='h3' bk={{ width:'150px', background:`${theme.palette.primary.soft}`, padding:'6px', textAlign:'center', borderRadius:'999.99px' }}>{ badge }</Typography>
      <Spacer y={5}/>
      <Typography capitalize variant='h1' fw='title' component='h3' align='center'>{ title }</Typography>
      <Spacer y={12}/>
      <Row gap={5} wrap='wrap' justify='center'>
        {
          data.map((e,i) => (          
            (e.node.tipoProducts?.nodes[0].slug === type) && (
              <Card key={i} pd={0} minw={'350px'} maxw={'350px'} borderRadius='n'bk={{ border:'0' }} shadow>
                <Card.Header pd={0} bk={{ height:'250px' }}>
                  <img css={css`height:100%`}src={e.node.featuredImage.node.sourceUrl} alt={e.node.title}/>
                </Card.Header>
                <Divider color='pink' gradient h='2px'/>
                <Card.Body pd={2} bk={{ background:'#fff',  }}>
                  <Typography fw='title' align='center'>{e.node.title}</Typography>
                  <Spacer y={5}/>
                  <Typography variant='sm' fw='tiny'>
                    {e.node.productoDestacadoCf?.descripcionCortaProducto}
                  </Typography>
                </Card.Body>
              </Card> ) 
          ))
        }
      </Row>
      <Spacer y={24}/>
      </Div>
  )
}

export default SectionCard