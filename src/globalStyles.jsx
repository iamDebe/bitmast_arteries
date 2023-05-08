import { createGlobalStyle } from 'styled-components';

export const HD = `@media screen and (min-width: 1800px)`;
export const desktop = `@media screen and (max-width: 1440px)`;
export const desktopMidi = `@media screen and (max-width: 1280px)`;
export const tablet = `@media screen and (max-width: 1023px)`;
export const mobile = `@media screen and (max-width: 767px)`;
export const mobileMedium = `@media screen and (max-width: 480px)`;

export const GlobalStyles = createGlobalStyle`
 
  
  :root {
    /* colors */
    --white: #ffffff;
    --black: #0A0A0A;
    --grey: rgba(98, 98, 98, 0.4);
    --grey-light: #626262;
    --grey-lighter: #A4A4A4;
    --grey-lightest: #E7E7E7;
    /* arteries primary */
    --blue-main: #34A3A4;
    --blue-light: #7DC4C5;
    --blue-lighter: rgba(184, 221, 221, 0.4);
    --blue-lightest: #D8EEEE;
    /* arteries success */
    --green-main: #124804;
    --green-light: #597F4F;
    --green-lighter: #A0B69B;
    --green-lightest: #D0DACD;
    /* arteries warning */
    --yellow-main: #FBCA0E;
    --yellow-light: #FCDA56;
    --yellow-lighter: #FDEA9E;
    --yellow-lightest: #FEF4CF;
    /* arteries critical */
    --red-main: #BB0C0C;
    --red-light: #CF5555;
    --red-lighter: #DD8585;
    --red-lightest: #F1CECE;
    /* arteries ascent */
    --orange: #EC3D06;
   
  
    /* fonts */
    font-family: "manrope", sans-serif;
    font-synthesis: none;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-text-size-adjust: 100%;


    --bold:@font-face {
      font-family: "manrope";
      src: url("../public/fonts/manrope.bold.otf");
      font-weight: 800;
    }
   --extraBold: @font-face {
      font-family: "manrope";
      src: url("../public/fonts/manrope.extrabold.otf");
    }
    --light: @font-face {
      font-family: "manrope";
      src: url("../public/fonts/manrope.light.otf");
    }
   --medium: @font-face {
      font-family: "manrope";
      src: url("../public/fonts/manrope.medium.otf");
    }
   --regular: @font-face {
      font-family: "manrope";
      src: url("../public/fonts/manrope.regular.otf");
    }
    --semibold:@font-face {
      font-family: "manrope";
      src: url("../public/fonts/manrope.semibold.otf");
    }
    --thin:@font-face {
      font-family: "manrope";
      src: url("../public/fonts/manrope.thin.otf");
    }
   
    /* border radius */
    --br: 4px; 
  }
  
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  body {
    font-size: 16px;
    letter-spacing: 0.02em;
    width: 100%;

    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    p,
    ol,
    ul,
    menu {
      margin: 0;
      padding: 0;
    }

    img {
      display: block;
      height: auto;
      user-select: none;
      user-drag: none;
    }

    svg {
      display: block;
    }

    --nav-width-collapsed: 7.375rem;
    --nav-width-expanded: 18.3125rem;
    --content-window-width-expanded: calc(100vw - var(--nav-width-expanded));
    --content-window-width-collapsed: calc(100vw - var(--nav-width-collapsed));
  
    /* font types */

    .fade{
      color: rgba(10, 10, 10, 0.8);
    }
    .type-title1 {
      font-weight: manrope-bold;
      font-size: 3rem;
      line-height: 4rem;
    }
    .type-title2 {
      font-weight: manrope-semibold;
      font-size: 2.5rem;
      line-height: 1.4735rem;
    }
    .type-title3 {
      font-weight: manrope-medium;
      font-size: 2rem;
      line-height: 2.76rem;
    }
    .type-title4 {
      font-weight: 700;
      font-size: 1.5rem;
      line-height: 2.2rem;
    }
    .type-title5 {
      font-weight: manrope-regular;
      font-size: 1.25rem;
      line-height: 2rem;
    }
    .type-title6 {
      font-weight: 400;
      font-size: 1rem;
      line-height: 1.2rem;
    }
    .type-btn {
      font-weight: 500;
      font-size: .875rem;
      line-height: 1.2rem;
    }
    .label {
      font-weight: manrope-regular;
      font-weight: normal;
      font-size: .625rem;
      line-height: .85rem;
    }

    .type-body1 {
      font-weight: manrope-regular;
      font-size: 1rem;
      line-height: 1.5rem;
    }
    .type-body-em {
      font-weight: 600;
      font-size: .875rem;
      line-height: 1.5rem;
      
    .type-body-sm {
      font-weight: 400;
      font-size: .75rem;
      line-height: 1.25rem;
    }
   
  }
  a {
    text-decoration: none;
    color: inherit;
  }
`;