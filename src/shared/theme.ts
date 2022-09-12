import { palette } from "./palette";

export type ThemeType = "light" | "dark";

const globalStyles = {
  fontFamily: `-apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji"`,
  minHeight: "2.5rem",
  selection: {
    background: palette.blue,
    text: palette.white,
  },
};

const buttonStyles = {
  button: {
    disabled: {
      background: palette.ash,
      border: palette.darkash,
      text: palette.darkash,
    },
    blue: {
      background: palette.blue,
      border: palette.darkblue,
      text: palette.white,
      textShadow: palette.darkblue,
      hover: {
        background: palette.darkblue,
        text: palette.white,
      },
    },
    green: {
      background: palette.green,
      border: palette.darkgreen,
      text: palette.white,
      textShadow: palette.darkgreen,
      hover: {
        background: palette.darkgreen,
        text: palette.white,
      },
    },
    grey: {
      background: palette.grey,
      border: palette.darkgrey,
      text: palette.white,
      textShadow: palette.darkgrey,
      hover: {
        background: palette.darkgrey,
        text: palette.white,
      },
    },
    red: {
      background: palette.red,
      border: palette.darkred,
      text: palette.white,
      textShadow: palette.darkred,
      hover: {
        background: palette.darkred,
        text: palette.white,
      },
    },
    yellow: {
      background: palette.yellow,
      border: palette.darkyellow,
      text: palette.white,
      textShadow: palette.darkyellow,
      hover: {
        background: palette.darkyellow,
        text: palette.white,
      },
    },
  },
  input: {
    background: palette.darkgrey,
    border: palette.grey,
    text: palette.lightgrey,
    placeholder: palette.grey,
    disabled: {
      background: palette.darkash,
      border: palette.ash,
      text: palette.lightash,
    },
    focused: {
      background: palette.glassblue,
      border: palette.lightblue,
      shadow: palette.glassblue,
      placeholder: palette.lightblue,
      invalid: {
        background: palette.glassred,
        border: palette.lightred,
        shadow: palette.glassred,
        placeholder: palette.lightred,
      },
    },
    invalid: {
      background: palette.darkgrey,
      border: palette.red,
      text: palette.red,
    },
    label: {
      text: palette.white,
      invalid: {
        text: palette.red,
      },
    },
  },
};

export const themes = {
  light: {
    ...globalStyles,
    ...buttonStyles,
    background: palette.white,
  },
  dark: {
    ...globalStyles,
    ...buttonStyles,
    background: palette.black,
  },
};
