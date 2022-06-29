import { createGlobalStyle } from 'styled-components'
import reset from 'styled-reset'

const GlobalStyle = createGlobalStyle`
    ${reset};
    body{
        padding: 0;
        margin: 0;
        font-family: sans-serif;
        background-color: rgb(250, 250, 250) ;
    };
    
`

export default GlobalStyle
