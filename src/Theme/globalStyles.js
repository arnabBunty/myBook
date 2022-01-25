import { createGlobalStyle} from "styled-components"
export const GlobalStyles = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    font-family: Tahoma, Helvetica, Arial, Roboto, sans-serif;
    transition: all 0.50s linear;
  }
  
  .imageupload__imageupload,.imageupload__more,.post,.imageupload__container{
    background: ${({ theme }) => theme.body};
    border: solid #fff 1px;
    color: ${({ theme }) => theme.text};
    font-family: Tahoma, Helvetica, Arial, Roboto, sans-serif;
    transition: all 0.50s linear;
  }

  .homeHeader section .dropdown-content,.homeHeader > .homeHeader__inputSearch > input,.homeHeader__inputButton,.imageupload__firstSection,.imageupload__container,.imageupload__firstSection,.container__comments,.imageupload__firstSectionModal,.imageupload__feedModal,.imageupload__colorwrap1,.imageupload__imageupload,.imageupload__imageuploadModal,.imageupload__more,.imageupload__commentAssign {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    font-family: Tahoma, Helvetica, Arial, Roboto, sans-serif;
    transition: all 0.50s linear;
  }
  `
