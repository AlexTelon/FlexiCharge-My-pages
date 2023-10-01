import { createTheme } from "@material-ui/core/styles";
import "../index.css";

declare module "@material-ui/core/styles/createTheme" {
  interface Theme {
    flexiCharge: {
      font: {
        _main: string;
        Lato: string;
        heading: string;
        h3:{
          fontSize: number;
          fontFamily: string;
        }
        h5:{
          fontSize: number;
          fontFamily: string;
        }
        h6:{
          fontSize: string;
          fontFamily: string;
        }
        p1:{
          fontSize: string;
          fontFamily: string;
        }
        p2:{
          fontSize: string;
          fontFamily: string;
        }
      };
      primary: {
        black: string;
        darkGrey: string;
        grey: string;
        lightGrey: string;
        white: string;
        green: string;
        blue: string;
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
    };
  }
  interface ThemeOptions {
    flexiCharge: {
      font: {
        _main: string;
        Lato: string;
        h3:{
          fontSize: number;
          fontFamily: string;
        }
        h5:{
          fontSize: number;
          fontFamily: string;
        }
        h6:{
          fontSize: string;
          fontFamily: string;
        }
        p1:{
          fontSize: string;
          fontFamily: string;
        }
        p2:{
          fontSize: string;
          fontFamily: string;
        }
      };
      primary: {
        black: string;
        darkGrey: string;
        grey: string;
        lightGrey: string;
        white: string;
        green: string;
        blue: string;
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
      light: "rgb(174,223,164)",
      dark: "#669966",
    },
  },
  flexiCharge: {
    font: {
      _main: "Roboto",
      Lato: '"Lato", sans-serif',
      h3: {
        fontSize:48,
        fontFamily:"Roboto",
      },
      h5: {
        fontSize:24,
        fontFamily:"Roboto regular",
      },
      h6: {
        fontSize:"20",
        fontFamily:"Roboto medium",
      },
      p1: {
        fontSize:"16",
        fontFamily:"Roboto regular",
      },
      p2: {
        fontSize:"14",
        fontFamily:"Roboto regular",
      },
    },
    primary: {
      black: "#000000",
      darkGrey: "#222222",
      grey: "#333333",
      lightGrey: "#e5e5e5",
      white: "#ffffff",
      green: "#78bd76",
      blue: "#5e5eb7",
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
    gradient:
      "linear-gradient(90deg, rgba(240,194,0,1) 0%, rgba(208,195,48,1) 15%, rgba(120,219,118,1) 80%, rgba(64,156,104,1) 100%)",
  },
});

export default flexiChargeTheme;
