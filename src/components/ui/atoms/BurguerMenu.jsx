import React from 'react'
import { css } from '@emotion/react';
import { Div, Row } from '../../../../uixlibrary/components/exports/components'

export const BurguerMenu = ({children, handleMenu, ...props}) => {

  

  return (
    <>
      <Div flex justify={'flex-end'} onClick={() => handleMenu()} bk={{ background:'transparent', border:'none', cursor:'pointer' }}>
        <Row wrap='wrap' bk={{ flexDirection:'column' }} align='center' justify='center'>          
          <span css={css`
            display:block;
            width:30px;
            height:3px;
            background:#000;
          `}></span>
    
           <span css={css`
            display:block;
            width:30px;
            height:3px;
            background:#000;
          `}></span>
           <span css={css`
            display:block;
            width:30px;
            height:3px;
            background:#000;
          `}></span>
        </Row>
      </Div>
    </>
  )
}

