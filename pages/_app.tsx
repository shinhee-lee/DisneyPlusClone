import type { AppProps } from "next/app";
import { ThemeProvider, type DefaultTheme } from "styled-components";
import GlobalStyle from "@/globalstyles";
import Header from "@/components/Header";

const theme: DefaultTheme = {
  primary: "#111",
  secondary: "#0070f3",
  white: "#fff",
  brightBlue: "#3E64E5",
  silver: "silver",
  darkGrey: "#31343e",
};

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Header />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
