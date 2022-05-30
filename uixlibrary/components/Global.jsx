import { Global, css } from "@emotion/react";
import React from 'react'
import { useChangeTheme } from "../context/provider";
import { theme, darkTheme } from "../theme/utils";

function GlobalStyles() {

    const { isDark } = useChangeTheme();

    return (
      <React.Fragment>
        <Global
          styles={css`
            * {
              margin: 0;
              padding: 0;
              border: 0;
              -webkit-box-sizing: border-box;
                      box-sizing: border-box;
              vertical-align: baseline;
            }
            /* Evitamos problemas con las imagenes */
            img, picture, video, iframe, figure {
              max-width: 100%;
              width: 100%;
              display: block;
              /* opcional */
              -o-object-fit: cover;
                object-fit: cover;
              /* opcional */
              -o-object-position: center center;
                object-position: center center;
            }
            a {
              display: block;
              text-decoration: none;
              color: inherit;
              font-size: inherit;
            }
            p a {
              display: inline;
            }
            /* Quitamos los puntos de los <li> */
            li {
              list-style-type: none;
            }

            /* Configuramos anclas suaves */
            html {
              scroll-behavior: smooth;
            }

            /* Desactivamos estilos por defecto de las principales etiquetas de texto */
            h1, h2, h3, h4, h5, h6, p, span, a, strong, blockquote, i, b, u, em {              
              font-weight: inherit;
              font-style: inherit;
              text-decoration: none;
              color: inherit;
            }

            /* Evitamos problemas con los pseudoelementos de quotes */
            blockquote:before, blockquote:after, q:before, q:after {
              content: "";
              content: none;
            }

            /* Configuramos el texto que seleccionamos */
            /* ::-moz-selection {
              background-color: var(--negro);
              color: var(--blanco);
            }
            ::selection {
              background-color: var(--negro);
              color: var(--blanco);
            } */

            /* Nivelamos problemas de tipografías y colocación de formularios */
            form, input, textarea, select, button, label {
              font-family: inherit;
              font-size: inherit;
              -webkit-hyphens: auto;
                  -ms-hyphens: auto;
                      hyphens: auto;
              background-color: transparent;
              color: inherit;
              display: block;
              /* opcional */
              -webkit-appearance: none;
                -moz-appearance: none;
                      appearance: none;
            }

            /* Reseteamos las tablas */
            table, tr, td {
              border-collapse: collapse;
              border-spacing: 0;
            }

            /* Evitamos problemas con los SVG */
            svg {
              width: 100%;
              display: block;
              fill: currentColor;
            }

            /* (Probándolo, no usar en producción) En el caso de añadir una  */
            /* p svg{
              display: inline;
              width: initial;
            } */
            /* Configuramos la tipografía para toda la web */
            body {
              min-height: 100vh;
              /* opcional */
              line-height: 1.4em;
              /* opcional */
              -webkit-hyphens: none;
                  -ms-hyphens: none;
                      hyphens: none;
              /* opcional */
              font-smooth: always;
              /* opcional */
              -webkit-font-smoothing: antialiased;
              /* opcional */
              -moz-osx-font-smoothing: grayscale;

              background: ${isDark ? theme.tags.body.background : darkTheme.tags.body.background};
              background: ${isDark ? theme.tags.body.backgroundLinear : darkTheme.tags.body.backgroundLinear};
             
            }
            .animation-scroll{
              opacity: 1 !important;
              transition: all 0.5s ease-in;
            }

            .animation-height{
              position:relative;
              top:100%;
              animation-name: hidding;
            }

            .animation-height0{
              animation-duration: 0.4s
            }
            .animation-height1{
              animation-duration: 0.7s
            }
            .animation-height2{
              animation-duration: 1s
            }
            .animation-height3{
              animation-duration: 1.2s
            }
            .animation-height4{
              animation-duration: 1.5s
            }

            @keyframes hidding {
              0%{
                top:0;
              }
            
              100%{
               top:100%;
              }
            }

            @keyframes expanding {
              0%{
                transform:scale(1);
                transform-origin:center;
              }
            
              100%{
                transform:scale(1.4);
                transform-origin:center;
              }
            }


            .jump-animation{
              animation: jump 1.5s 1 cubic-bezier(.175,.885,.32,1.275) alternate forwards;
            }

            @keyframes jump {
              0%,to{
                transform:matrix(1,0,0,1,0,0)
              }
              25%,75% {
                text-shadow:-5px 2px 2px rgba( 46, 48, 65  ,0.8),0 5px 12px rgba( 46, 48, 65  ,0.8);
                transform:matrix(1.1,0,0,.8,0,0)
              }
              50%{
                transform:matrix(.8,0,0,1.2,0,0) translateY(-10px);
                text-shadow:-40px 20px 20px rgba( 46, 48, 65  ,0.8),0 40px 100px rgba( 46, 48, 65  ,0.8)
              }              
            }


            .my-masonry-grid{
              display:flex;
              width:100%;
            }
            .my-masonry-grid_column{
              margin-right:24px;
            }       
            .slick-list, .slick-track{
              height:100%;
            }   
            .slick-track  div {
              height:100%;
            }  
          `}
        />
        </React.Fragment>
    );
}

export default GlobalStyles;