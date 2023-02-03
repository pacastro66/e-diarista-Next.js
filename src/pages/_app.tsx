import '@styles/globals.css';
import type { AppProps } from 'next/app';
import{ ThemeProvider} from "@mui/material";
import theme from 'UI/themes/theme';
import React from 'react';
import Footer from 'UI/components/surfaces/Footer/Footer';
import Header from 'UI/components/surfaces/Header/Header';


function MyApp({ Component, pageProps }: AppProps) {

  return (
  <>
  <ThemeProvider theme={theme}>
  <Header/>
  <Component {...pageProps} />;
  <Footer/>
  </ThemeProvider>
  </>
  );
}

export default MyApp
