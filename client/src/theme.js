import { createTheme } from '@mui/material/styles';

export const shades = {
    black: {
        100: "#cccccc",
        200: "#999999",
        300: "#666666",
        400: "#333333",
        500: "#000000",
        600: "#000000",
        700: "#000000",
        800: "#000000",
        900: "#000000"
    },
    
    white: {
        100: "#ffffff",
        200: "#ffffff",
        300: "#ffffff",
        400: "#ffffff",
        500: "#ffffff",
        600: "#cccccc",
        700: "#999999",
        800: "#666666",
        900: "#333333"
    },
};

export const theme = createTheme({

    palette: {
      primary: {
        main: shades.black[500],
      },
      secondary: {
        main: shades.white[500],
      },
    },

    typography: {
      fontFamily: ["Inter", "sans-serif"].join(","),
      fontSize: 14,
      h1: {
        fontFamily: ["Noto Sana", "sans-serif"].join(","),
        fontSize: 48,
        fontWeight: "bold",
      },
      h2: {
        fontFamily: ["Noto Sana", "sans-serif"].join(","),
        fontSize: 36,
        fontWeight: "bold",
      },
      h3: {
        fontFamily: ["Noto Sana", "sans-serif"].join(","),
        fontSize: 28,
      },
      h4: {
        fontFamily: ["Noto Sana", "sans-serif"].join(","),
        fontSize: 18,
      },
      h5: {
        fontFamily: ["Noto Sana", "sans-serif"].join(","),
        fontSize: 32,
        fontWeight: "bold",
      },
      h6: {
        fontFamily: ["Noto Sana", "sans-serif"].join(","),
        fontSize: 22,
      },
      h7: {
        fontFamily: ["Noto Sana", "sans-serif"].join(","),
        fontSize: 70,
        fontWeight: "bold",
      },
    },

    components: {
      MuiButton: {
        styleOverrides: {
          contained: {
            maxHeight: "70px",
            minHeight: "70px",
            fontSize: "18px",
            letterSpacing: '4px',
          },
          filled: {
            letterSpacing: '4px',
          },
        },
      },
    },
});