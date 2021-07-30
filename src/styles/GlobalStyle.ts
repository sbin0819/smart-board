import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
const globalStyles = createGlobalStyle`
    ${reset};
    * {
    margin: 0;
    padding: 0;  
  }
  body {
    box-sizing: border-box;
  }
  a {
    text-decoration:none;
    color: inherit;
  }
`;
export default globalStyles;
