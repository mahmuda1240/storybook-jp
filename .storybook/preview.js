import React from "react";
import { addDecorator } from "@storybook/react"
import { ThemeProvider } from "styled-components";
import { createGlobalStyle } from "styled-components";
import themeDefault from "../src/components/particles/themeDefault";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
} 

const GlobalStyles = createGlobalStyle`
  body {
      background-color: ${props => props.theme.primary};
      color: black;
  }
`;

// Adding a wrapper which will repeat components across stories
const GlobalWrapper = storyFn => (
  <ThemeProvider theme={themeDefault}>
    <GlobalStyles />
    {storyFn()}
  </ThemeProvider>
);

addDecorator(GlobalWrapper);