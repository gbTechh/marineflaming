import * as React from "react"
import { Spacer, Typography } from "../../uixlibrary/components/exports/components"
import { LayoutScreen } from "../components/layouts/LayoutScreen"



const NotFoundPage = () => (
  <LayoutScreen title='MarineFlaming | Página no encontrada' descripcion={'No hemos podido encontar lo que estas buscando'}>
       <Spacer y={10}/>
    <Typography variant='big' component='h1' bk={{ width:'100%', fontSize:'100px' }} align='center'>404</Typography>
    <Spacer y={10}/>
    <Typography variant='big' component='h2' bk={{ width:'100%' }} align='center'>Parece que te haz Perdido</Typography>
    <Spacer y={10}/>

  </LayoutScreen>
)

export default NotFoundPage
