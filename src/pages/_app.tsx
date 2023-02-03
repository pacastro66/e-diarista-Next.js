import '@styles/globals.css';
import type { AppProps } from 'next/app';
import{ ThemeProvider} from "@mui/material";
import theme from 'UI/themes/theme';
import React from 'react';
import Footer from 'UI/components/surfaces/Footer/Footer';
import Header from 'UI/components/surfaces/Header/Header';
import { AppContainer } from '@styles/pages/AppContainer.styled';
import Head from 'next/head';


function MyApp({ Component, pageProps }: AppProps) {

  return (
  <>
   <Head>
    <title>e-diarista  {pageProps.title && `- ${pageProps.title}`}</title>
   </Head>
      <ThemeProvider theme={theme}>
      <AppContainer>
        <Header/>
        <main>

        </main>
        <Component {...pageProps} />;
        <Footer/>
      </AppContainer>
      </ThemeProvider>
  </>
  );
}

export default MyApp;
