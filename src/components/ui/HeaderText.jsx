import { css } from '@emotion/react'
import { Link } from 'gatsby'
import React from 'react'
import { Col, Container, Div, Row, Spacer, Typography } from '../../../uixlibrary/components/exports/components'
import useContact from '../../hooks/useContact'
import AngleRight from './atoms/icons/AngleRight'

const HeaderText = ({ children, title, path }) => {

  const { node:{featuredImage:{node:{sourceUrl}}}} = useContact();




  return (
   
      <Row bk={{ background:'#f2f6f7', border:'0', minHeight:'300px',height:'100%' }}>
        <Container bk={{ maxWidth:'1200px', display:'flex' }}>
          <Col span={6} bk={{ justifyContent:'flex-start', minHeight:'300px', alignItems:'center', flexWrap:'wrap' }}>
            <Row wrap>
              <Col span={12}>
                <Typography variant='h2' fw='strong'  bk={{ width:'100%' }}>{title}</Typography>
              </Col>
              <Spacer y={5} />
              <Col span={12} >
                <Row align={'center'}>
                  <Link to='/'>
                    <Typography color='primary' fw='bquote'>Home</Typography>
                  </Link>
                  <Spacer x={1}/>
                  <AngleRight css={css`width:10px; height:10px; fill:#5c727d`}/>
                  <Spacer x={1}/>
                  <Typography  fw='bquote' capitalize bk={{ color:'#5c727d' }}>{path}</Typography>
                  <Spacer x={2}/>
                </Row>
              </Col>
            </Row>
          </Col>
          <Col span={6} bk={{ width:'100%', height:'300px' }}>
            <Div bk={{ padding:'0', opacity:'0.2', background:'none', border:'0',backgroundPositionX:'right',backgroundPositionY:'-110px', backgroundRepeat:'no-repeat', backgroundSize:'contain',backgroundImage:`url(${sourceUrl})`}}>
            </Div>
          </Col>
        </Container>
      </Row>

  )
}

export default HeaderText