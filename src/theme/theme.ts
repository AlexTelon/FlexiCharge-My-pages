import { createTheme } from "@material-ui/core/styles";
import "../index.css";

declare module "@material-ui/core/styles/createTheme" {
  interface Theme {
    flexiCharge: {
      font: {
        fontFamily: {
          _main: string;
        }
        fontSize: {
          _main: string;
          small: string;
          title: string;
          bigButton: string;
        }
      };
      primary: {
        black: string;
        darkGrey: string;
        grey: string;
        lightGrey: string;
        white: string;
        green: string;
        yellow: string;
        blue: string;
        red: string;
      };
      accent: {
        primary: string;
        secondary: string;
        warning: string;
        neutral: string;
        error: string;
      };
      boxShadow: {
        grid: string;
        button: string;
      };
      gradient: string;
      margin: {
        marginDistance: string;
      };
    };
  }
  interface ThemeOptions {
    flexiCharge: {
      font: {
        fontFamily: {
          _main: string;
        }
        fontSize: {
          _main: string;
          small: string;
          title: string;
          bigButton: string;
        }
      };
      primary: {
        black: string;
        darkGrey: string;
        grey: string;
        lightGrey: string;
        white: string;
        green: string;
        yellow: string;
        blue: string;
        red: string;
      };
      accent: {
        primary: string;
        secondary: string;
        warning: string;
        neutral: string;
        error: string;
      };
      boxShadow: {
        button: string;
      };
      gradient: string;
      margin: {
        marginDistance: string;
      };
    };
  }
}

const flexiChargeTheme = createTheme({
  overrides: {
    MuiCssBaseline: {
      "@global": {
        "*::-webkit-scrollbar-thumb": {
          backgroundColor: "#78bd76",
          borderRadius: "5px",
        },
        "*::-webkit-scrollbar": {
          width: "5px",
          height: "5px",
        },
        "*::webskit-scrollbar-track": {
          backgroundColor: "transparent",
          marginBottom: "3px",
          marginTop: "3px",
        },
      },
    },
  },
  palette: {
    primary: {
      main: "#78bd76",
      light: "#78bd76",
      dark: "#78bd76",
    },
  },
  flexiCharge: {
    font: {
      fontFamily: {
        _main: '"Lato", sans-serif'
      },
      fontSize: {
        _main: "1rem",
        small: "0.75rem",
        title: "2em",
        bigButton: "24px",
      },
    },
    primary: {
      black: "#000000",
      darkGrey: "#222222",
      grey: "#333333",
      lightGrey: "#e5e5e5",
      white: "#ffffff",
      green: "#78bd76",
      yellow: "#f0c200",
      blue: "#5e5eb7",
      red: "#ef6048",
    },
    accent: {
      primary: "#78bd76",
      secondary: "#f0c200",
      warning: "#f0c200",
      neutral: "#5e5eb7",
      error: "#ef6048",
    },
    boxShadow: {
      button: "5px 5px 10px rgba(46, 229, 157, 0.4)",
    },
    gradient: "linear-gradient(90deg, rgba(240,194,0,1) 0%, rgba(208,195,48,1) 15%, rgba(120,219,118,1) 80%, rgba(64,156,104,1) 100%)",
    margin: {
      marginDistance: "2vh"
    },
  },
});

export default flexiChargeTheme;
