import React from "react";
import styled, { ThemeProvider } from "styled-components";
import { themes } from "../src/shared/theme";

const getTheme = (themeName) => {
  return themes[themeName];
};

const GlobalStyles = styled.div`
  font-family: ${(props) => props.theme.fontFamily} !important;
  font-size: 1rem;
`;

const withThemeProvider = (Story, context) => {
  const theme = getTheme(context.globals.theme);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles>
        <Story {...context} />
      </GlobalStyles>
    </ThemeProvider>
  );
};

export const decorators = [withThemeProvider];

export const globalTypes = {
  theme: {
    name: "Theme",
    description: "Global theme for components",
    defaultValue: "light",
    toolbar: {
      icon: "contrast",
      // Array of plain string values or MenuItem shape (see below)
      items: ["light", "dark"],
      // Property that specifies if the name of the item will be displayed
      showName: true,
    },
  },
};

export const parameters = {
  backgrounds: {
    default: "light",
    values: [
      {
        name: "light",
        value: themes.light.background,
      },
      {
        name: "dark",
        value: themes.dark.background,
      },
    ],
  },
};
